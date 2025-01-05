// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Components/ActorComponent.h"
#include "AbilitySystemComponent.h"
#include "HealthComponent.generated.h"

USTRUCT(BlueprintType)
struct FGASOnAttributeChangeData
{
	GENERATED_BODY()
public:
	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Attribute")
	FGameplayTag Tag;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Attribute")
	float NewValue;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Attribute")
	float OldValue;
};

DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FGASOnAttributeValueChange, const FGASOnAttributeChangeData &, AttributeChangeData);

UCLASS(Blueprintable, Meta = (BlueprintSpawnableComponent))
class TPS_API UHealthComponent : public UActorComponent
{
	GENERATED_BODY()

public:
	// Sets default values for this component's properties
	UHealthComponent();

public:
	UPROPERTY(BlueprintAssignable, Category = "Attribute")
	FGASOnAttributeValueChange OnAttributeChanged;

	UFUNCTION(BlueprintCallable, Category = "Health")
	void InitializeWithAbilitySystem(UAbilitySystemComponent *ASC);

	UFUNCTION(BlueprintCallable, Category = "Health")
	void Uninitialize();

	UFUNCTION(BlueprintPure, Category = "Health")
	static UHealthComponent *FindHealthComponent(const AActor *Actor) { return (Actor ? Actor->FindComponentByClass<UHealthComponent>() : nullptr); }

	UFUNCTION(BlueprintCallable, Category = "Health")
	float GetHealth() const;

	UFUNCTION(BlueprintCallable, Category = "Health")
	float GetMaxHealth() const;

	// Returns the current health in the range [0.0, 1.0].
	UFUNCTION(BlueprintCallable, Category = "Health")
	float GetHealthNormalized() const;

	UFUNCTION(BlueprintCallable, Category = "Health")
	float GetPhysical() const;

	UFUNCTION(BlueprintCallable, Category = "Health")
	float GetMaxPhysical() const;

	// Returns the current physical in the range [0.0, 1.0].
	UFUNCTION(BlueprintCallable, Category = "Health")
	float GetPhysicalNormalized() const;

protected:
	void OnNativeAttributeValueChange(const FOnAttributeChangeData &AttributeChangeData);

protected:
	UPROPERTY()
	TObjectPtr<UAbilitySystemComponent> AbilitySystemComponent;

	UPROPERTY()
	TObjectPtr<const class UHealthSet> HealthSet;

	static inline TMap<FGameplayAttribute, FGameplayTag> AttributeTagMap;
};
