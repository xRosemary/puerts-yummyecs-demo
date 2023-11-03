// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Components/ActorComponent.h"
#include "AbilitySystemComponent.h"
#include "HealthBase.h"
#include "HealthComponent.generated.h"


UCLASS(Blueprintable, ClassGroup=(Custom), meta=(BlueprintSpawnableComponent) )
class TPS_API UHealthComponent : public UActorComponent, public IHealthBase
{
	GENERATED_BODY()

public:
	// Sets default values for this component's properties
	UHealthComponent();

public:
	UFUNCTION(BlueprintCallable, Category = "Health")
	void Initialize(UAbilitySystemComponent* ASC);

	UFUNCTION(BlueprintCallable, Category = "Health")
	void Uninitialize();

	UFUNCTION(BlueprintPure, Category = "Health")
	static UHealthComponent* FindHealthComponent(const AActor* Actor) { return (Actor ? Actor->FindComponentByClass<UHealthComponent>() : nullptr); }

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

	//UFUNCTION(BlueprintCallable, BlueprintImplementableEvent, Category = "Health")
	//void StartDeath();
protected:
	UPROPERTY()
	TObjectPtr<UAbilitySystemComponent> AbilitySystemComponent;

	UPROPERTY()
	TObjectPtr<const class UHealthAttributeSet> HealthSet;
};
