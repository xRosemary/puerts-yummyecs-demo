// Fill out your copyright notice in the Description page of Project Settings.


#include "TSExtensionMethods.h"

AActor* UTSExtensionMethods::SpawnActor(UWorld* World, UClass* Class, const FTransform& Transform, ESpawnActorCollisionHandlingMethod SpawnCollisionHandlingOverride, AActor* Owner, APawn* Instigator)
{
    FActorSpawnParameters SpawnParameters;
    SpawnParameters.SpawnCollisionHandlingOverride = SpawnCollisionHandlingOverride;

    SpawnParameters.Owner = Owner;
    SpawnParameters.Instigator = Instigator;

    return World->SpawnActor<AActor>(Class, Transform, SpawnParameters);
}

AGameStateBase* UTSExtensionMethods::GetGameState(UWorld* World)
{
    AGameStateBase* state = World->GetGameState();
    if (state) {
        UE_LOG(LogTemp, Error, TEXT("GetGameState"));
    }
    else {
        UE_LOG(LogTemp, Error, TEXT("UN GetGameState"));
    }
    return state;
}

void UTSExtensionMethods::DestroyComponent(UActorComponent* comp, bool bPromoteChildren)
{
    comp->DestroyComponent(bPromoteChildren);
}

bool UTSExtensionMethods::Destroy(AActor* Actor, bool bNetForce, bool bShouldModifyLevel)
{
    return Actor->Destroy(bNetForce, bShouldModifyLevel);
}

UGameInstance* UTSExtensionMethods::GetGameInstance(AActor* Actor)
{
    return Actor->GetGameInstance();
}

void UTSExtensionMethods::AddToRoot(UObject* Object)
{
    Object->AddToRoot();
}

UEnhancedInputLocalPlayerSubsystem* UTSExtensionMethods::GetEnhancedInputSubsystem(APlayerController* PlayerController)
{
    return ULocalPlayer::GetSubsystem<UEnhancedInputLocalPlayerSubsystem>(PlayerController->GetLocalPlayer());
}

void UTSExtensionMethods::AddMappingContext(UEnhancedInputLocalPlayerSubsystem* SubSystem, const UInputMappingContext* MappingContext, int32 Priority, const FModifyContextOptions& Options)
{
    SubSystem->AddMappingContext(MappingContext, Priority, Options);
}

void UTSExtensionMethods::BindAction(UEnhancedInputComponent* Component, const UInputAction* Action, ETriggerEvent TriggerEvent, UObject* Object, FName FunctionName)
{
    class MyUEnhancedInputComponent : public UEnhancedInputComponent
    {
        friend UTSExtensionMethods;
        TArray<TUniquePtr<FEnhancedInputActionEventBinding>> EnhancedActionEventBindings;
    };

    TUniquePtr<FEnhancedInputActionEventDelegateBinding<FEnhancedInputActionHandlerSignature>> AB = MakeUnique<FEnhancedInputActionEventDelegateBinding<FEnhancedInputActionHandlerSignature>>(Action, TriggerEvent);
    // Component->BindAction(Action, TriggerEvent, Object, FunctionName);
    AB->Delegate.SetShouldFireWithEditorScriptGuard(false);
    auto comp = (MyUEnhancedInputComponent*)Component;
    comp->EnhancedActionEventBindings.Add_GetRef(MoveTemp(AB));
}

void UTSExtensionMethods::SetPath(FSoftObjectPath SoftObjectPath, const FString& Path)
{
    SoftObjectPath.SetPath(Path);
}

UObject* UTSExtensionMethods::ResolveObject(FSoftObjectPath SoftObjectPath)
{
    return SoftObjectPath.ResolveObject();
}

FString UTSExtensionMethods::GetContentDir(UGameInstance* gameInstance)
{
    return FPaths::ProjectContentDir();
}

UUserWidget* UTSExtensionMethods::CreateWidget(UWorld* World, UClass* Class)
{
    return ::CreateWidget<UUserWidget>(World, Class);
}
