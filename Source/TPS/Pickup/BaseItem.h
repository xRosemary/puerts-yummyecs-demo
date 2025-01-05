// Fill out your copyright notice in the Description page of Project Settings.

#pragma once
#include "GameplayEffect.h"
#include "Components/SphereComponent.h"
#include "BaseItem.generated.h"

UCLASS()
class TPS_API ABaseItem : public AActor
{
	GENERATED_BODY()

	UPROPERTY(EditAnywhere)
	USphereComponent *SphereCollider;

	UPROPERTY(EditAnywhere)
	UStaticMeshComponent *MeshComponent;

	UPROPERTY(EditDefaultsOnly)
	TSubclassOf<UGameplayEffect> GameplayEffect = nullptr;

public:
	// Sets default values for this actor's properties
	ABaseItem();

protected:
	// Called when the game starts or when spawned
	virtual void BeginPlay() override;

	UFUNCTION()
	void OnOverlapBegin(UPrimitiveComponent *OverlappedComponent, AActor *OtherActor, UPrimitiveComponent *OtherComp, int32 OtherBodyIndex, bool bFromSweep, const FHitResult &SweepResult);
};
