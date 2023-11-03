// Fill out your copyright notice in the Description page of Project Settings.


#include "TSGameInstance.h"
#include "AbilitySystemGlobals.h"

void UTSGameInstance::Init()
{
	Super::Init();
	UAbilitySystemGlobals::Get().InitGlobalData();
}
