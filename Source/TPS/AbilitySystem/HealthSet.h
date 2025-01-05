// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "AttributeSet.h"
#include "AbilitySystemComponent.h"
#include "Net/UnrealNetwork.h"
#include "GameplayEffectExtension.h"
#include "NativeGameplayTags.h"
#include "HealthSet.generated.h"

#define ATTRIBUTE_ACCESSORS(ClassName, PropertyName)           \
	GAMEPLAYATTRIBUTE_PROPERTY_GETTER(ClassName, PropertyName) \
	GAMEPLAYATTRIBUTE_VALUE_GETTER(PropertyName)               \
	GAMEPLAYATTRIBUTE_VALUE_SETTER(PropertyName)               \
	GAMEPLAYATTRIBUTE_VALUE_INITTER(PropertyName)

namespace GASGameplayTags
{
	UE_DECLARE_GAMEPLAY_TAG_EXTERN(TAG_Gameplay_HealthChanged);
	UE_DECLARE_GAMEPLAY_TAG_EXTERN(TAG_Gameplay_MaxHealthChanged);
	UE_DECLARE_GAMEPLAY_TAG_EXTERN(TAG_Gameplay_PhysicalChanged);
	UE_DECLARE_GAMEPLAY_TAG_EXTERN(TAG_Gameplay_MaxPhysicalChanged);
}

UCLASS(BlueprintType, Const)
class TPS_API UHealthSet : public UAttributeSet
{
	GENERATED_BODY()

public:
	UHealthSet();
	virtual void GetLifetimeReplicatedProps(TArray<FLifetimeProperty> &OutLifetimeProps) const override;

public:
	UPROPERTY(BlueprintReadOnly, Category = "Health", ReplicatedUsing = OnRep_Health)
	FGameplayAttributeData Health;
	ATTRIBUTE_ACCESSORS(UHealthSet, Health)

	UFUNCTION()
	void OnRep_Health(const FGameplayAttributeData &OldValue);

	UPROPERTY(BlueprintReadOnly, Category = "Health", ReplicatedUsing = OnRep_MaxHealth)
	FGameplayAttributeData MaxHealth;
	ATTRIBUTE_ACCESSORS(UHealthSet, MaxHealth)
	UFUNCTION()
	void OnRep_MaxHealth(const FGameplayAttributeData &OldValue);

	UPROPERTY(BlueprintReadOnly, Category = "Physical", ReplicatedUsing = OnRep_Physical)
	FGameplayAttributeData Physical;
	ATTRIBUTE_ACCESSORS(UHealthSet, Physical)
	UFUNCTION()
	void OnRep_Physical(const FGameplayAttributeData &OldValue);

	UPROPERTY(BlueprintReadOnly, Category = "Physical", ReplicatedUsing = OnRep_MaxPhysical)
	FGameplayAttributeData MaxPhysical;
	ATTRIBUTE_ACCESSORS(UHealthSet, MaxPhysical)
	UFUNCTION()
	void OnRep_MaxPhysical(const FGameplayAttributeData &OldValue);

public:
	// 属性修改前回调
	virtual void PreAttributeChange(const FGameplayAttribute &Attribute, float &NewValue);

	// GE执行后属性回调
	virtual void PostGameplayEffectExecute(const FGameplayEffectModCallbackData &Data) override;

protected:
	/** Helper function to proportionally adjust the value of an attribute when it's associated max attribute changes. (i.e. When MaxHealth increases, Health increases by an amount that maintains the same percentage as before) */
	void AdjustAttributeForMaxChange(FGameplayAttributeData &AffectedAttribute, const FGameplayAttributeData &MaxAttribute, float NewMaxValue, const FGameplayAttribute &AffectedAttributeProperty);
};
