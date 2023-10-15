// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "ExtensionMethods.h"
#include "GameFramework/Actor.h"
#include "Components/ActorComponent.h"
#include "TSGameInstance.h"
#include "EnhancedInputSubsystems.h"
#include "Misc/Paths.h"
#include "Engine/GameInstance.h"
#include "Blueprint/UserWidget.h"
#include "TSExtensionMethods.generated.h"

/**
 * 
 */
UCLASS()
class TPS_API UTSExtensionMethods : public UExtensionMethods
{
	GENERATED_BODY()
	UFUNCTION(BlueprintCallable, Category = "WorldExtension")
	static AActor* SpawnActor(UWorld* World, UClass* Class, const FTransform& Transform, ESpawnActorCollisionHandlingMethod SpawnCollisionHandlingOverride, AActor* Owner, APawn* Instigator);

	UFUNCTION(BlueprintCallable, Category = "WorldExtension")
	static AGameStateBase* GetGameState(UWorld* World);

	UFUNCTION(BlueprintCallable, Category = "WorldExtension")
	static void DestroyComponent(UActorComponent* comp, bool bPromoteChildren = false);

	UFUNCTION(BlueprintCallable, Category = "WorldExtension")
	static bool Destroy(AActor* Actor, bool bNetForce = false, bool bShouldModifyLevel = true);

	UFUNCTION(BlueprintCallable, Category = "WorldExtension")
	static UGameInstance* GetGameInstance(AActor* Actor);

	UFUNCTION(BlueprintCallable, Category = "WorldExtension")
	static void AddToRoot(UObject* Object);

	UFUNCTION(BlueprintCallable, Category = "WorldExtension")
	static UEnhancedInputLocalPlayerSubsystem* GetEnhancedInputSubsystem(APlayerController* PlayerController);

	UFUNCTION(BlueprintCallable, Category = "WorldExtension")
	static void AddMappingContext(UEnhancedInputLocalPlayerSubsystem* SubSystem, const UInputMappingContext* MappingContext, int32 Priority, const FModifyContextOptions& Options = FModifyContextOptions());

	UFUNCTION(BlueprintCallable, Category = "WorldExtension")
	static FString GetContentDir(UGameInstance* gameInstance);

	UFUNCTION(BlueprintCallable, BlueprintCosmetic, Category = "WorldExtension")
	static UUserWidget* CreateWidget(UWorld* World, UClass* Class);
};
