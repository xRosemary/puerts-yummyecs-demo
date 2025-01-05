// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "AbilitySystemComponent.h"
#include "ExAbilitySystemComponent.generated.h"

UCLASS()
class TPS_API UExAbilitySystemComponent : public UAbilitySystemComponent
{
	GENERATED_BODY()

protected:
	virtual void AbilitySpecInputPressed(FGameplayAbilitySpec &Spec) override;
	virtual void AbilitySpecInputReleased(FGameplayAbilitySpec &Spec) override;
};
