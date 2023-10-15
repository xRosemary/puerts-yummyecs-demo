// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "JsEnv.h"
#include "Engine/GameInstance.h"
#include "UObject/Object.h"
#include "TSGameInstance.generated.h"

/**
 * 
 */
UCLASS()
class TPS_API UTSGameInstance : public UGameInstance
{
	GENERATED_BODY()

	virtual void Init() override;
	virtual void OnStart() override;
	virtual void Shutdown() override;

private:
	TSharedPtr<puerts::FJsEnv> GameScript;
};
