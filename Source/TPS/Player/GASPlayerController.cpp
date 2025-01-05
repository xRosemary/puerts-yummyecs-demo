// Fill out your copyright notice in the Description page of Project Settings.


#include "GASPlayerController.h"
#include "TPS/Character/CharacterWithAbility.h"
#include "GameFramework/GameplayMessageSubsystem.h"
#include "TPS/Input/GASInputConfig.h"

namespace GASGameplayTags
{
	UE_DEFINE_GAMEPLAY_TAG_STATIC(TAG_Gameplay_AbilityInputBlocked, "Gameplay.AbilityInputBlocked");
}

void AGASPlayerController::PostProcessInput(const float DeltaTime, const bool bGamePaused)
{
	if (ACharacterWithAbility* GASPawn = GetPawn<ACharacterWithAbility>())
	{
		if (UAbilitySystemComponent* ASC = GASPawn->GetAbilitySystemComponent())
		{
			ProcessAbilityInput(ASC, DeltaTime, bGamePaused);
		}
	}

	Super::PostProcessInput(DeltaTime, bGamePaused);
}

void AGASPlayerController::AbilityInputTagPressed(const FGameplayTag& InputTag)
{
	if (!InputTag.IsValid())
	{
		return;
	}

	if (ACharacterWithAbility* GASPawn = GetPawn<ACharacterWithAbility>())
	{
		if (UAbilitySystemComponent* ASC = GASPawn->GetAbilitySystemComponent())
		{
			for (const FGameplayAbilitySpec& AbilitySpec : ASC->GetActivatableAbilities())
			{
				if (AbilitySpec.Ability && (AbilitySpec.DynamicAbilityTags.HasTagExact(InputTag)))
				{
					InputPressedSpecHandles.AddUnique(AbilitySpec.Handle);
					InputHeldSpecHandles.AddUnique(AbilitySpec.Handle);
				}
			}
		}
	}

	UGameplayMessageSubsystem& Router = UGameplayMessageSubsystem::Get(this);
	FGASInputMessage InputMessage;
	InputMessage.Event = ETriggerEvent::Triggered;
	InputMessage.InputTag = InputTag;
	Router.BroadcastMessage(InputTag, InputMessage);
}

void AGASPlayerController::AbilityInputTagReleased(const FGameplayTag& InputTag)
{
	if (!InputTag.IsValid())
	{
		return;
	}

	if (ACharacterWithAbility* GASPawn = GetPawn<ACharacterWithAbility>())
	{
		if (UAbilitySystemComponent* ASC = GASPawn->GetAbilitySystemComponent())
		{
			for (const FGameplayAbilitySpec& AbilitySpec : ASC->GetActivatableAbilities())
			{
				if (AbilitySpec.Ability && (AbilitySpec.DynamicAbilityTags.HasTagExact(InputTag)))
				{
					InputReleasedSpecHandles.AddUnique(AbilitySpec.Handle);
					InputHeldSpecHandles.Remove(AbilitySpec.Handle);
				}
			}
		}
	}

	UGameplayMessageSubsystem& Router = UGameplayMessageSubsystem::Get(this);
	FGASInputMessage InputMessage;
	InputMessage.Event = ETriggerEvent::Completed;
	InputMessage.InputTag = InputTag;
	Router.BroadcastMessage(InputTag, InputMessage);
}

void AGASPlayerController::ProcessAbilityInput(UAbilitySystemComponent* ASC, float DeltaTime, bool bGamePaused)
{
	check(ASC);

	if (ASC->HasMatchingGameplayTag(GASGameplayTags::TAG_Gameplay_AbilityInputBlocked))
	{
		ClearAbilityInput();
		return;
	}

	static TArray<FGameplayAbilitySpecHandle> AbilitiesToActivate;
	AbilitiesToActivate.Reset();

	//
	// Process all abilities that activate when the input is held.
	//
	for (const FGameplayAbilitySpecHandle& SpecHandle : InputHeldSpecHandles)
	{
		if (const FGameplayAbilitySpec* AbilitySpec = ASC->FindAbilitySpecFromHandle(SpecHandle))
		{
			if (AbilitySpec->Ability && !AbilitySpec->IsActive())
			{
				AbilitiesToActivate.AddUnique(AbilitySpec->Handle);
			}
		}
	}

	//
	// Process all abilities that had their input pressed this frame.
	//
	for (const FGameplayAbilitySpecHandle& SpecHandle : InputPressedSpecHandles)
	{
		if (FGameplayAbilitySpec* AbilitySpec = ASC->FindAbilitySpecFromHandle(SpecHandle))
		{
			if (AbilitySpec->Ability)
			{
				AbilitySpec->InputPressed = true;

				if (AbilitySpec->IsActive())
				{
					// Ability is active so pass along the input event.
					ASC->AbilitySpecInputPressed(*AbilitySpec);
				}
				else
				{
					AbilitiesToActivate.AddUnique(AbilitySpec->Handle);
				}
			}
		}
	}

	//
	// Try to activate all the abilities that are from presses and holds.
	// We do it all at once so that held inputs don't activate the ability
	// and then also send a input event to the ability because of the press.
	//
	for (const FGameplayAbilitySpecHandle& AbilitySpecHandle : AbilitiesToActivate)
	{
		ASC->TryActivateAbility(AbilitySpecHandle);
	}

	//
	// Process all abilities that had their input released this frame.
	//
	for (const FGameplayAbilitySpecHandle& SpecHandle : InputReleasedSpecHandles)
	{
		if (FGameplayAbilitySpec* AbilitySpec = ASC->FindAbilitySpecFromHandle(SpecHandle))
		{
			if (AbilitySpec->Ability)
			{
				AbilitySpec->InputPressed = false;

				if (AbilitySpec->IsActive())
				{
					// Ability is active so pass along the input event.
					ASC->AbilitySpecInputReleased(*AbilitySpec);
				}
			}
		}
	}

	//
	// Clear the cached ability handles.
	//
	InputPressedSpecHandles.Reset();
	InputReleasedSpecHandles.Reset();
}

void AGASPlayerController::ClearAbilityInput()
{
	InputPressedSpecHandles.Reset();
	InputReleasedSpecHandles.Reset();
	InputHeldSpecHandles.Reset();
}
