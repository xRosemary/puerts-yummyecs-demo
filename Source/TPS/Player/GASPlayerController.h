// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/PlayerController.h"
#include "NativeGameplayTags.h"
#include "AbilitySystemComponent.h"
#include "GameplayAbilitySpecHandle.h"

#include "GASPlayerController.generated.h"

UCLASS(Config = Game, Meta = (ShortTooltip = "The base player controller class used by this project."))
class TPS_API AGASPlayerController : public APlayerController
{
	GENERATED_BODY()

#pragma region AbilityInput
public:
	virtual void PostProcessInput(const float DeltaTime, const bool bGamePaused) override;

	void AbilityInputTagPressed(const FGameplayTag &InputTag);
	void AbilityInputTagReleased(const FGameplayTag &InputTag);

	void ProcessAbilityInput(UAbilitySystemComponent *ASC, float DeltaTime, bool bGamePaused);
	void ClearAbilityInput();

protected:
	// Handles to abilities that had their input pressed this frame.
	TArray<FGameplayAbilitySpecHandle> InputPressedSpecHandles;

	// Handles to abilities that had their input released this frame.
	TArray<FGameplayAbilitySpecHandle> InputReleasedSpecHandles;

	// Handles to abilities that have their input held.
	TArray<FGameplayAbilitySpecHandle> InputHeldSpecHandles;
#pragma endregion
};
