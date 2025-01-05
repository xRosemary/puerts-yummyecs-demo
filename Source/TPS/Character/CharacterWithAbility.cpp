// Fill out your copyright notice in the Description page of Project Settings.


#include "CharacterWithAbility.h"
#include "TPS/AbilitySystem/HealthSet.h"
#include "TPS/AbilitySystem/HealthComponent.h"
#include "TPS/AbilitySystem/ExAbilitySystemComponent.h"
#include "TPS/AbilitySystem/AbilityAsset.h"

// Sets default values
ACharacterWithAbility::ACharacterWithAbility()
{
 	// Set this character to call Tick() every frame.  You can turn this off to improve performance if you don't need it.
	PrimaryActorTick.bCanEverTick = true;

	AbilitySystem = CreateDefaultSubobject<UExAbilitySystemComponent>(TEXT("AbilitySystem"));
	AbilitySystem->SetIsReplicated(true);
	AbilitySystem->SetReplicationMode(EGameplayEffectReplicationMode::Mixed);
	HealthSet = CreateDefaultSubobject<UHealthSet>(TEXT("HealthSet"));
	HealthComponent = CreateDefaultSubobject<UHealthComponent>(TEXT("HealthComponent"));
}

// Called when the game starts or when spawned
void ACharacterWithAbility::BeginPlay()
{
	if (nullptr == AbilitySystem)
	{
		return;
	}

	// 赋予技能
	if (HasAuthority())
	{
		for (auto AbilitySet : AbilitySets)
		{
			if (AbilitySet)
			{
				AbilitySet->GiveToAbilitySystem(AbilitySystem);
			}
		}
	}

	// 初始化AbilitySystem
	AbilitySystem->InitAbilityActorInfo(this, this);
	HealthComponent->InitializeWithAbilitySystem(AbilitySystem);

	//没有这个蓝图的BeginPlay都不执行了
	Super::BeginPlay();

	OnPostNativeBeginPlay.Broadcast();
}

UAbilitySystemComponent* ACharacterWithAbility::GetAbilitySystemComponent() const
{
	return AbilitySystem;
}

