// Fill out your copyright notice in the Description page of Project Settings.


#include "HealthComponent.h"
#include "HealthSet.h"

#define RegisterAttributeDelegate(AttributeName) \
	UHealthComponent::AttributeTagMap.Add(HealthSet->Get##AttributeName##Attribute().GetUProperty(), \
	GASGameplayTags::TAG_Gameplay_##AttributeName##Changed); \
	AbilitySystemComponent->GetGameplayAttributeValueChangeDelegate \
	(HealthSet->Get##AttributeName##Attribute()).AddUObject(this, &UHealthComponent::OnNativeAttributeValueChange)

// Sets default values for this component's properties
UHealthComponent::UHealthComponent()
{
	// Set this component to be initialized when the game starts, and to be ticked every frame.  You can turn these features
	// off to improve performance if you don't need them.
	PrimaryComponentTick.bCanEverTick = false;

	AbilitySystemComponent = nullptr;

	HealthSet = nullptr;
}

void UHealthComponent::InitializeWithAbilitySystem(UAbilitySystemComponent* ASC)
{
	AActor* Owner = GetOwner();
	check(Owner);

	if (!ASC)
	{
		UE_LOG(LogTemp, Error, TEXT("AbilitySystemComponent is NULL"), *GetNameSafe(Owner));
		return;
	}

	AbilitySystemComponent = ASC;

	HealthSet = AbilitySystemComponent->GetSet<UHealthSet>();
	if (!HealthSet)
	{
		UE_LOG(LogTemp, Error, TEXT("HealthSet is NULL"), *GetNameSafe(Owner));
		return;
	}
	
	RegisterAttributeDelegate(Health);
	RegisterAttributeDelegate(MaxHealth);
	RegisterAttributeDelegate(Physical);
	RegisterAttributeDelegate(MaxPhysical);
}

void UHealthComponent::Uninitialize()
{
	HealthSet = nullptr;
	AbilitySystemComponent = nullptr;
}

float UHealthComponent::GetHealth() const
{
	return (HealthSet ? HealthSet->GetHealth() : 0.0f);
}

float UHealthComponent::GetMaxHealth() const
{
	return (HealthSet ? HealthSet->GetMaxHealth() : 0.0f);
}

float UHealthComponent::GetHealthNormalized() const
{
	if (HealthSet)
	{
		const float Health = HealthSet->GetHealth();
		const float MaxHealth = HealthSet->GetMaxHealth();

		return ((MaxHealth > 0.0f) ? (Health / MaxHealth) : 0.0f);
	}

	return 0.0f;
}

float UHealthComponent::GetPhysical() const
{
	return (HealthSet ? HealthSet->GetPhysical() : 0.0f);
}

float UHealthComponent::GetMaxPhysical() const
{
	return (HealthSet ? HealthSet->GetMaxPhysical() : 0.0f);
}

float UHealthComponent::GetPhysicalNormalized() const
{
	if (HealthSet)
	{
		const float Physical = HealthSet->GetPhysical();
		const float MaxPhysical = HealthSet->GetMaxPhysical();

		return ((MaxPhysical > 0.0f) ? (Physical / MaxPhysical) : 0.0f);
	}

	return 0.0f;
}

void UHealthComponent::OnNativeAttributeValueChange(const FOnAttributeChangeData& AttributeChangeData)
{
	FGameplayTag* Tag = UHealthComponent::AttributeTagMap.Find(AttributeChangeData.Attribute);

	if(!Tag || !Tag->IsValid())
	{
		return;
	}
	FGASOnAttributeChangeData Data;
	Data.NewValue = AttributeChangeData.NewValue;
	Data.OldValue = AttributeChangeData.OldValue;
	Data.Tag = *Tag;
	OnAttributeChanged.Broadcast(Data);
}

#undef RegisterAttributeDelegate