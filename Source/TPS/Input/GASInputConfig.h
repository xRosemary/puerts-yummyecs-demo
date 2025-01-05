// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Engine/DataAsset.h"
#include "GameplayTagContainer.h"
#include "InputTriggers.h"
#include "GASInputConfig.generated.h"

class UInputAction;
class UObject;
struct FFrame;

/**
 * FInputAction
 *
 *	Struct used to map a input action to a gameplay input tag.
 */
USTRUCT(BlueprintType)
struct FGASInputAction
{
	GENERATED_BODY()

public:
	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly)
	TObjectPtr<const UInputAction> InputAction = nullptr;

	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Meta = (Categories = "InputTag"))
	FGameplayTag InputTag;
};

USTRUCT(BlueprintType)
struct FGASInputMessage
{
	GENERATED_BODY()

public:
	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Meta = (Categories = "InputTag"))
	FGameplayTag InputTag;

	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly)
	ETriggerEvent Event = ETriggerEvent::Triggered;
};

/**
 * UGASInputConfig
 *
 *	Non-mutable data asset that contains input configuration properties.
 */
UCLASS(BlueprintType, Const)
class TPS_API UGASInputConfig : public UDataAsset
{
	GENERATED_BODY()

public:
	UGASInputConfig(const FObjectInitializer &ObjectInitializer);

	UFUNCTION(BlueprintCallable, Category = "GAS|Pawn")
	const UInputAction *FindNativeInputActionForTag(const FGameplayTag &InputTag, bool bLogNotFound = true) const;

	UFUNCTION(BlueprintCallable, Category = "GAS|Pawn")
	const UInputAction *FindAbilityInputActionForTag(const FGameplayTag &InputTag, bool bLogNotFound = true) const;

public:
	// List of input actions used by the owner.  These input actions are mapped to a gameplay tag and must be manually bound.
	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Meta = (TitleProperty = "InputAction"))
	TArray<FGASInputAction> NativeInputActions;

	// List of input actions used by the owner.  These input actions are mapped to a gameplay tag and are automatically bound to abilities with matching input tags.
	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Meta = (TitleProperty = "InputAction"))
	TArray<FGASInputAction> AbilityInputActions;
};
