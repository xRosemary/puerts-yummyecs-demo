// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Components/ActorComponent.h"
#include "InputMappingContext.h"
#include "TPS/Input/GASInputConfig.h"
#include "Camera/CameraComponent.h"
#include "HeroComponent.generated.h"

USTRUCT(BlueprintType)
struct FInputMappingContextAndPriority
{
	GENERATED_BODY()

	UPROPERTY(EditAnywhere, Category = "Input")
	TObjectPtr<class UInputMappingContext> InputMapping;

	// Higher priority input mappings will be prioritized over mappings with a lower priority.
	UPROPERTY(EditAnywhere, Category = "Input")
	int32 Priority = 0;
};

struct FGameplayTag;
struct FInputActionValue;

/**
 * Component that sets up input and camera handling for player controlled pawns (or bots that simulate players).
 */
UCLASS(Blueprintable, meta = (BlueprintSpawnableComponent))
class TPS_API UHeroComponent : public UActorComponent
{
	GENERATED_BODY()

public:
	UHeroComponent(const FObjectInitializer &ObjectInitializer);

	/** Adds mode-specific input config */
	void AddAdditionalInputConfig(const UGASInputConfig *InputConfig);

	/** Removes a mode-specific input config if it has been added */
	void RemoveAdditionalInputConfig(const UGASInputConfig *InputConfig);

	/** True if this is controlled by a real player and has progressed far enough in initialization where additional input bindings can be added */
	bool IsReadyToBindInputs() const;

	virtual void InitializePlayerInput(UInputComponent *PlayerInputComponent);

protected:
	virtual void OnRegister() override;

	void Input_AbilityInputTagPressed(FGameplayTag InputTag);
	void Input_AbilityInputTagReleased(FGameplayTag InputTag);

	void Input_Move(const FInputActionValue &InputActionValue);
	void Input_LookMouse(const FInputActionValue &InputActionValue);

private:
	APawn *GetPawn() const;
	class UGASInputComponent *GetGASInputComponent();

protected:
	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "GAS|Input")
	TArray<FInputMappingContextAndPriority> DefaultInputMappings;

	// Input configuration used by player controlled pawns to create input mappings and bind input actions.
	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "GAS|Input")
	TObjectPtr<UGASInputConfig> DefaultInputConfig;

	/** True when player input bindings have been applied, will never be true for non - players */
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "GAS|Input")
	bool bReadyToBindInputs;
};
