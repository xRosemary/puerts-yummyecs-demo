// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Character.h"
#include "AbilitySystemInterface.h"
#include "CharacterWithAbility.generated.h"

DECLARE_DYNAMIC_MULTICAST_DELEGATE(FPostNativeBeginPlay);

UCLASS(Blueprintable)
class TPS_API ACharacterWithAbility : public ACharacter, public IAbilitySystemInterface
{
	GENERATED_BODY()

public:
	// Sets default values for this character's properties
	ACharacterWithAbility();

#pragma region Ability
public:
	UAbilitySystemComponent *GetAbilitySystemComponent() const override;

	UFUNCTION(BlueprintCallable)
	void InitAbilitySystem();

public:
	UPROPERTY()
	TObjectPtr<const class UHealthSet> HealthSet;

protected:
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "GAS|Character", meta = (AllowPrivateAccess = "true"))
	class UAbilitySystemComponent *AbilitySystem;

	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "GAS|Character", Meta = (AllowPrivateAccess = "true"))
	TArray<TObjectPtr<class UAbilityAsset>> AbilitySets;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "GAS|Character", Meta = (AllowPrivateAccess = "true"))
	TObjectPtr<class UHealthComponent> HealthComponent;
#pragma endregion
};
