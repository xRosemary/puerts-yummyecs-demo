// Fill out your copyright notice in the Description page of Project Settings.


#include "HealthSet.h"
#include "GameFramework/GameplayMessageSubsystem.h"

namespace GASGameplayTags
{
	UE_DEFINE_GAMEPLAY_TAG(TAG_Gameplay_HealthChanged, "Gameplay.AttributeChanged.Health");
	UE_DEFINE_GAMEPLAY_TAG(TAG_Gameplay_MaxHealthChanged, "Gameplay.AttributeChanged.MaxHealth");
	UE_DEFINE_GAMEPLAY_TAG(TAG_Gameplay_PhysicalChanged, "Gameplay.AttributeChanged.Physical");
	UE_DEFINE_GAMEPLAY_TAG(TAG_Gameplay_MaxPhysicalChanged, "Gameplay.AttributeChanged.MaxPhysical");
}

UHealthSet::UHealthSet() :
	Health(100.0f),
	MaxHealth(100.0f),
	Physical(100.0f),
	MaxPhysical(100.0f)
{
}

void UHealthSet::GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const
{
	Super::GetLifetimeReplicatedProps(OutLifetimeProps);

	DOREPLIFETIME(UHealthSet, Health);
	DOREPLIFETIME(UHealthSet, MaxHealth);
	DOREPLIFETIME(UHealthSet, Physical);
	DOREPLIFETIME(UHealthSet, MaxPhysical);
}

void UHealthSet::OnRep_Health(const FGameplayAttributeData& OldValue)
{
	GAMEPLAYATTRIBUTE_REPNOTIFY(UHealthSet, Health, OldValue);
}

void UHealthSet::OnRep_MaxHealth(const FGameplayAttributeData& OldValue)
{
	GAMEPLAYATTRIBUTE_REPNOTIFY(UHealthSet, MaxHealth, OldValue);
}

void UHealthSet::OnRep_Physical(const FGameplayAttributeData& OldValue)
{
	GAMEPLAYATTRIBUTE_REPNOTIFY(UHealthSet, Physical, OldValue);
}

void UHealthSet::OnRep_MaxPhysical(const FGameplayAttributeData& OldValue)
{
	GAMEPLAYATTRIBUTE_REPNOTIFY(UHealthSet, MaxPhysical, OldValue);
}

void UHealthSet::PreAttributeChange(const FGameplayAttribute& Attribute, float& NewValue)
{
	Super::PreAttributeChange(Attribute, NewValue);

	if (Attribute == GetMaxHealthAttribute())
	{
		AdjustAttributeForMaxChange(Health, MaxHealth, NewValue, GetHealthAttribute());
	}
	else if (Attribute == GetMaxPhysicalAttribute())
	{
		AdjustAttributeForMaxChange(Physical, MaxPhysical, NewValue, GetPhysicalAttribute());
	}
}

void UHealthSet::PostGameplayEffectExecute(const FGameplayEffectModCallbackData& Data)
{
	Super::PostGameplayEffectExecute(Data);

	float Magnitude = Data.EvaluatedData.Magnitude;
	if (Data.EvaluatedData.Attribute == GetHealthAttribute())
	{
		SetHealth(FMath::Clamp(GetHealth(), 0.0f, GetMaxHealth()));
	}
	else if (Data.EvaluatedData.Attribute == GetPhysicalAttribute())
	{
		SetPhysical(FMath::Clamp(GetPhysical(), 0.0f, GetMaxPhysical()));
	}
}

void UHealthSet::AdjustAttributeForMaxChange(FGameplayAttributeData& AffectedAttribute, const FGameplayAttributeData& MaxAttribute, float NewMaxValue, const FGameplayAttribute& AffectedAttributeProperty)
{
	UAbilitySystemComponent* AbilityComp = GetOwningAbilitySystemComponent();
	const float CurrentMaxValue = MaxAttribute.GetCurrentValue();
	if (!FMath::IsNearlyEqual(CurrentMaxValue, NewMaxValue) && AbilityComp)
	{
		// Change current value to maintain the current Val / Max percent
		const float CurrentValue = AffectedAttribute.GetCurrentValue();
		float NewDelta = (CurrentMaxValue > 0.f) ? (CurrentValue * NewMaxValue / CurrentMaxValue) - CurrentValue : NewMaxValue;

		AbilityComp->ApplyModToAttributeUnsafe(AffectedAttributeProperty, EGameplayModOp::Additive, NewDelta);
	}
}
