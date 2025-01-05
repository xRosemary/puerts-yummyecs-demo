// Fill out your copyright notice in the Description page of Project Settings.

#include "TPS/Pickup/BaseItem.h"
#include "AbilitySystemComponent.h"
#include "TPS/Character/CharacterWithAbility.h"

// Sets default values
ABaseItem::ABaseItem()
{
	// Set this actor to call Tick() every frame.  You can turn this off to improve performance if you don't need it.
	PrimaryActorTick.bCanEverTick = true;

	SphereCollider = CreateDefaultSubobject<USphereComponent>("SphereCollider");
	SetRootComponent(SphereCollider);

	MeshComponent = CreateOptionalDefaultSubobject<UStaticMeshComponent>("Mesh");
	MeshComponent->SetupAttachment(SphereCollider);
}

// Called when the game starts or when spawned
void ABaseItem::BeginPlay()
{
	Super::BeginPlay();
	SphereCollider->OnComponentBeginOverlap.AddDynamic(this, &ABaseItem::OnOverlapBegin);
}

void ABaseItem::OnOverlapBegin(UPrimitiveComponent *OverlappedComponent, AActor *OtherActor, UPrimitiveComponent *OtherComp, int32 OtherBodyIndex, bool bFromSweep, const FHitResult &SweepResult)
{
	auto player = Cast<ACharacterWithAbility>(OtherActor);

	if (IsValid(player))
	{

		auto AbilitySystem = player->GetAbilitySystemComponent();

		AbilitySystem->ApplyGameplayEffectToTarget(GameplayEffect.GetDefaultObject(), AbilitySystem);
	}
}