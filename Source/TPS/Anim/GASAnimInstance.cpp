// Fill out your copyright notice in the Description page of Project Settings.


#include "GASAnimInstance.h"
#include "GameFramework/Character.h"
#include "Components/CapsuleComponent.h"
#include "AbilitySystemGlobals.h"
#include "GameFramework/CharacterMovementComponent.h"

void UGASAnimInstance::InitializeWithAbilitySystem(UAbilitySystemComponent* ASC)
{
	check(ASC);

	GameplayTagPropertyMap.Initialize(this, ASC);
}

void UGASAnimInstance::NativeInitializeAnimation()
{
	Super::NativeInitializeAnimation();

	if (AActor* OwningActor = GetOwningActor())
	{
		if (UAbilitySystemComponent* ASC = UAbilitySystemGlobals::GetAbilitySystemComponentFromActor(OwningActor))
		{
			InitializeWithAbilitySystem(ASC);
		}
	}
}
