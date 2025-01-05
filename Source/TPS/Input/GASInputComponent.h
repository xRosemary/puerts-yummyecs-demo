// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "EnhancedInputComponent.h"
#include "GASInputConfig.h"
#include "GASInputComponent.generated.h"

class UEnhancedInputLocalPlayerSubsystem;
class UInputAction;
class UObject;

UCLASS(Config = Input)
class TPS_API UGASInputComponent : public UEnhancedInputComponent
{
	GENERATED_BODY()

public:
	UGASInputComponent(const FObjectInitializer &ObjectInitializer);

	template <class UserClass, typename FuncType>
	void BindNativeAction(const UGASInputConfig *InputConfig, const FGameplayTag &InputTag, ETriggerEvent TriggerEvent, UserClass *Object, FuncType Func, bool bLogIfNotFound);

	template <class UserClass, typename PressedFuncType, typename ReleasedFuncType>
	void BindAbilityActions(const UGASInputConfig *InputConfig, UserClass *Object, PressedFuncType PressedFunc, ReleasedFuncType ReleasedFunc);

	void RemoveBindByTag(const FGameplayTag &InputTag);

	void RemoveBindAbilityActions(const UGASInputConfig *InputConfig);

private:
	TMap<FGameplayTag, uint32> BindHandleMap;
};

template <class UserClass, typename FuncType>
void UGASInputComponent::BindNativeAction(const UGASInputConfig *InputConfig, const FGameplayTag &InputTag, ETriggerEvent TriggerEvent, UserClass *Object, FuncType Func, bool bLogIfNotFound)
{
	check(InputConfig);
	if (const UInputAction *IA = InputConfig->FindNativeInputActionForTag(InputTag, bLogIfNotFound))
	{
		BindHandleMap.Add(InputTag, BindAction(IA, TriggerEvent, Object, Func).GetHandle());
	}
}

template <class UserClass, typename PressedFuncType, typename ReleasedFuncType>
void UGASInputComponent::BindAbilityActions(const UGASInputConfig *InputConfig, UserClass *Object, PressedFuncType PressedFunc, ReleasedFuncType ReleasedFunc)
{
	check(InputConfig);

	for (const FGASInputAction &Action : InputConfig->AbilityInputActions)
	{
		if (Action.InputAction && Action.InputTag.IsValid())
		{
			if (PressedFunc)
			{
				uint32 InputHandle = BindAction(Action.InputAction, ETriggerEvent::Triggered, Object, PressedFunc, Action.InputTag).GetHandle();
				BindHandleMap.Add(Action.InputTag, InputHandle);
			}

			if (ReleasedFunc)
			{
				uint32 InputHandle = BindAction(Action.InputAction, ETriggerEvent::Completed, Object, ReleasedFunc, Action.InputTag).GetHandle();
				BindHandleMap.Add(Action.InputTag, InputHandle);
			}
		}
	}
}