// Fill out your copyright notice in the Description page of Project Settings.


#include "HealthAttributeSet.h"
#include "HealthBase.h"

UHealthAttributeSet::UHealthAttributeSet() :
	Health(100.0f),
	MaxHealth(100.0f),
	Physical(100.0f),
	MaxPhysical(100.0f)
{
}

void UHealthAttributeSet::GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const
{
	Super::GetLifetimeReplicatedProps(OutLifetimeProps);

	DOREPLIFETIME(UHealthAttributeSet, Health);
	DOREPLIFETIME(UHealthAttributeSet, MaxHealth);
	DOREPLIFETIME(UHealthAttributeSet, Physical);
	DOREPLIFETIME(UHealthAttributeSet, MaxPhysical);
}

void UHealthAttributeSet::OnRep_Health(const FGameplayAttributeData& OldValue)
{
	GAMEPLAYATTRIBUTE_REPNOTIFY(UHealthAttributeSet, Health, OldValue);
}

void UHealthAttributeSet::OnRep_MaxHealth(const FGameplayAttributeData& OldValue)
{
	GAMEPLAYATTRIBUTE_REPNOTIFY(UHealthAttributeSet, MaxHealth, OldValue);
}

void UHealthAttributeSet::OnRep_Physical(const FGameplayAttributeData& OldValue)
{
	GAMEPLAYATTRIBUTE_REPNOTIFY(UHealthAttributeSet, Physical, OldValue);
}

void UHealthAttributeSet::OnRep_MaxPhysical(const FGameplayAttributeData& OldValue)
{
	GAMEPLAYATTRIBUTE_REPNOTIFY(UHealthAttributeSet, MaxPhysical, OldValue);
}

void UHealthAttributeSet::PreAttributeChange(const FGameplayAttribute& Attribute, float& NewValue)
{
	if (Attribute == GetHealthAttribute())
	{
		NewValue = FMath::Clamp(NewValue, 0.f, GetMaxHealth());
	}
	if (Attribute == GetPhysicalAttribute())
	{
		NewValue = FMath::Clamp(NewValue, 0.f, GetMaxPhysical());
	}
}

void UHealthAttributeSet::PostGameplayEffectExecute(const FGameplayEffectModCallbackData& Data)
{
	Super::PostGameplayEffectExecute(Data);
	UObject* HealthComponent = nullptr;
	if (Data.Target.AbilityActorInfo.IsValid() && Data.Target.AbilityActorInfo->AvatarActor.IsValid())
	{
		AActor* TargetActor = Data.Target.AbilityActorInfo->AvatarActor.Get();
		HealthComponent = Cast<UObject>(TargetActor ? TargetActor->FindComponentByInterface<UHealthBase>() : nullptr);
	}
	if (nullptr != HealthComponent)
	{
		if (Data.EvaluatedData.Attribute == GetHealthAttribute())
		{
			IHealthBase::Execute_OnHealthChanged(HealthComponent);
		}
		if (Data.EvaluatedData.Attribute == GetPhysicalAttribute())
		{
			IHealthBase::Execute_OnPhysicalChanged(HealthComponent);
		}
	}
}