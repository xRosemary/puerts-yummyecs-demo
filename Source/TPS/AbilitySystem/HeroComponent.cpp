#include "HeroComponent.h"
#include "EnhancedInputSubsystems.h"
#include "EnhancedInputComponent.h"
#include "GameplayTagContainer.h"
#include "NativeGameplayTags.h"
#include "GameplayAbilitySpec.h"
#include "TPS/Input/GASInputComponent.h"
#include "TPS/Character/CharacterWithAbility.h"
#include "TPS/Player/GASPlayerController.h"

#if WITH_EDITOR
#include "Misc/UObjectToken.h"
#endif	// WITH_EDITOR

namespace GASGameplayTags
{
	UE_DEFINE_GAMEPLAY_TAG_STATIC(InputTag_Move, "InputTag.Move");
	UE_DEFINE_GAMEPLAY_TAG_STATIC(InputTag_Look_Mouse, "InputTag.Look.Mouse");
}

UHeroComponent::UHeroComponent(const FObjectInitializer& ObjectInitializer)
	: Super(ObjectInitializer)
{
	bReadyToBindInputs = false;
}

void UHeroComponent::OnRegister()
{
	Super::OnRegister();

	if (!GetPawn())
	{
		UE_LOG(LogTemp, Error, TEXT("[UHeroComponent::OnRegister] This component has been added to a blueprint whose base class is not a Pawn. To use this component, it MUST be placed on a Pawn Blueprint."));

#if WITH_EDITOR
		if (GIsEditor)
		{
			static const FText Message = NSLOCTEXT("HeroComponent", "NotOnPawnError", "has been added to a blueprint whose base class is not a Pawn. To use this component, it MUST be placed on a Pawn Blueprint. This will cause a crash if you PIE!");
			static const FName HeroMessageLogName = TEXT("HeroComponent");

			FMessageLog(HeroMessageLogName).Error()
				->AddToken(FUObjectToken::Create(this, FText::FromString(GetNameSafe(this))))
				->AddToken(FTextToken::Create(Message));

			FMessageLog(HeroMessageLogName).Open();
		}
#endif
	}
}

void UHeroComponent::AddAdditionalInputConfig(const UGASInputConfig* InputConfig)
{
	if (!InputConfig)
	{
		return;
	}

	UGASInputComponent* GasIC = GetGASInputComponent();
	if (ensureMsgf(GasIC, TEXT("Unexpected Input Component class! The Gameplay Abilities will not be bound to their inputs. Change the input component to UGASInputComponent or a subclass of it.")))
	{
		GasIC->BindAbilityActions(InputConfig, this, &ThisClass::Input_AbilityInputTagPressed, &ThisClass::Input_AbilityInputTagReleased);
	}
}

void UHeroComponent::RemoveAdditionalInputConfig(const UGASInputConfig* InputConfig)
{
	if (!InputConfig)
	{
		return;
	}

	UGASInputComponent* GasIC = GetGASInputComponent();
	if (ensureMsgf(GasIC, TEXT("Unexpected Input Component class! The Gameplay Abilities will not be bound to their inputs. Change the input component to UGASInputComponent or a subclass of it.")))
	{
		GasIC->RemoveBindAbilityActions(InputConfig);
	}
}

bool UHeroComponent::IsReadyToBindInputs() const
{
	return bReadyToBindInputs;
}

void UHeroComponent::InitializePlayerInput(UInputComponent* PlayerInputComponent)
{
	check(PlayerInputComponent);

	const APawn* Pawn = GetPawn();
	if (!Pawn)
	{
		return;
	}

	const APlayerController* PC = Pawn->GetController<APlayerController>();
	check(PC);

	const ULocalPlayer* LP = PC->GetLocalPlayer();
	check(LP);

	UEnhancedInputLocalPlayerSubsystem* Subsystem = LP->GetSubsystem<UEnhancedInputLocalPlayerSubsystem>();
	check(Subsystem);

	Subsystem->ClearAllMappings();

	// 绑定 IMC
	for (const FInputMappingContextAndPriority& Mapping : DefaultInputMappings)
	{
		if (UInputMappingContext* IMC = Mapping.InputMapping.Get())
		{
			FModifyContextOptions Options = {};
			Options.bIgnoreAllPressedKeysUntilRelease = false;
			Subsystem->AddMappingContext(IMC, Mapping.Priority, Options);
		}
	}

	// 绑定 Gameplay Tag 和 Input Action
	if (DefaultInputConfig)
	{
		UGASInputComponent* GasIC = Cast<UGASInputComponent>(PlayerInputComponent);
		if (ensureMsgf(GasIC, TEXT("Unexpected Input Component class! The Gameplay Abilities will not be bound to their inputs. Change the input component to UGASInputComponent or a subclass of it.")))
		{
			GasIC->BindAbilityActions(DefaultInputConfig, this, &ThisClass::Input_AbilityInputTagPressed, &ThisClass::Input_AbilityInputTagReleased);
			GasIC->BindNativeAction(DefaultInputConfig, GASGameplayTags::InputTag_Move, ETriggerEvent::Triggered, this, &ThisClass::Input_Move, /*bLogIfNotFound=*/ false);
			GasIC->BindNativeAction(DefaultInputConfig, GASGameplayTags::InputTag_Look_Mouse, ETriggerEvent::Triggered, this, &ThisClass::Input_LookMouse, /*bLogIfNotFound=*/ false);
		}
	}
	
	if (ensure(!bReadyToBindInputs))
	{
		bReadyToBindInputs = true;
	}
}

void UHeroComponent::Input_AbilityInputTagPressed(FGameplayTag InputTag)
{
	if (APawn* Pawn = GetPawn())
	{
		if (AGASPlayerController* PC = Pawn->GetController<AGASPlayerController>())
		{
			PC->AbilityInputTagPressed(InputTag);
		}
	}
}

void UHeroComponent::Input_AbilityInputTagReleased(FGameplayTag InputTag)
{
	if (APawn* Pawn = GetPawn())
	{
		if (AGASPlayerController* PC = Pawn->GetController<AGASPlayerController>())
		{
			PC->AbilityInputTagReleased(InputTag);
		}
	}
}

void UHeroComponent::Input_Move(const FInputActionValue& InputActionValue)
{
	APawn* Pawn = GetPawn();
	const AController* Controller = Pawn ? Pawn->GetController() : nullptr;

	if (!Controller)
	{
		return;
	}
	
	const FVector2D Value = InputActionValue.Get<FVector2D>();
	const FRotator ControlRotation = Controller->GetControlRotation();
	if (Value.X != 0.0f)
	{
		const FRotator MovementRotation(0.0f, ControlRotation.Yaw, ControlRotation.Roll);
		const FVector MovementDirection = MovementRotation.RotateVector(FVector::RightVector);
		Pawn->AddMovementInput(MovementDirection, Value.X);
	}

	if (Value.Y != 0.0f)
	{
		const FRotator MovementRotation(0.0f, ControlRotation.Yaw, 0.0f);
		const FVector MovementDirection = MovementRotation.RotateVector(FVector::ForwardVector);
		Pawn->AddMovementInput(MovementDirection, Value.Y);
	}
}

void UHeroComponent::Input_LookMouse(const FInputActionValue& InputActionValue)
{
	APawn* Pawn = GetPawn();

	if (!Pawn)
	{
		return;
	}

	const FVector2D Value = InputActionValue.Get<FVector2D>();

	if (Value.X != 0.0f)
	{
		Pawn->AddControllerYawInput(Value.X);
	}

	if (Value.Y != 0.0f)
	{
		Pawn->AddControllerPitchInput(Value.Y);
	}
}

APawn* UHeroComponent::GetPawn() const
{
	return Cast<APawn>(GetOwner());
}

UGASInputComponent* UHeroComponent::GetGASInputComponent()
{
	const APawn* Pawn = GetPawn();
	if (!Pawn)
	{
		return nullptr;
	}

	const APlayerController* PC = Pawn->GetController<APlayerController>();
	check(PC);

	const ULocalPlayer* LP = PC->GetLocalPlayer();
	check(LP);
	
	return Cast<UGASInputComponent>(Pawn->InputComponent);
}
