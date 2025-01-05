// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Engine/DataAsset.h"
#include "PawnDataAsset.generated.h"

class UAbilityAsset;
class UGASInputConfig;

/**
 * UPawnDataAsset
 *
 *	Non-mutable data asset that contains properties used to define a pawn.
 */
UCLASS(BlueprintType, Const, Meta = (DisplayName = "Pawn Data", ShortTooltip = "Data asset used to define a Pawn."))
class TPS_API UPawnDataAsset : public UPrimaryDataAsset
{
	GENERATED_BODY()

public:
	UPawnDataAsset(const FObjectInitializer &ObjectInitializer);

public:
	// Class to instantiate for this pawn (should usually derive from APawn or ACharacter).
	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "GAS|Pawn")
	TSubclassOf<APawn> PawnClass;

	// Ability sets to grant to this pawn's ability system.
	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "GAS|Abilities")
	TArray<TObjectPtr<UAbilityAsset>> AbilitySets;

	// Input configuration used by player controlled pawns to create input mappings and bind input actions.
	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "GAS|Input")
	TObjectPtr<UGASInputConfig> InputConfig;
};
