// Fill out your copyright notice in the Description page of Project Settings.


#include "GASInputComponent.h"

UGASInputComponent::UGASInputComponent(const FObjectInitializer& ObjectInitializer)
{
}

void UGASInputComponent::RemoveBindByTag(const FGameplayTag& InputTag)
{
	uint32* Handle = BindHandleMap.Find(InputTag);
	if (Handle)
	{
		RemoveBindingByHandle(*Handle);
		BindHandleMap.Remove(InputTag);
	}
}

void UGASInputComponent::RemoveBindAbilityActions(const UGASInputConfig* InputConfig)
{
	check(InputConfig);

	for (const FGASInputAction& Action : InputConfig->AbilityInputActions)
	{
		if (Action.InputTag.IsValid())
		{
			RemoveBindByTag(Action.InputTag);
		}
	}
}
