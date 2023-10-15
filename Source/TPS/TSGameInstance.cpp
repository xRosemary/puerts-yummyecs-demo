// Fill out your copyright notice in the Description page of Project Settings.


#include "TSGameInstance.h"

void UTSGameInstance::Init()
{
}

void UTSGameInstance::OnStart()
{
    GameScript = MakeShared<puerts::FJsEnv>(
        std::make_unique<puerts::DefaultJSModuleLoader>(
            TEXT("JavaScript")
        ),
        std::make_shared<puerts::FDefaultLogger>(),
        8080 // 指定调试websocket server所用的端口，即视为要打开调试server
    );
    //GameScript->WaitDebugger();
    //GameScript = MakeShared<puerts::FJsEnv>();
    TArray<TPair<FString, UObject*>> Arguments;
    Arguments.Add(TPair<FString, UObject*>(TEXT("GameInstance"), this));
    GameScript->Start("GameStart", Arguments);
}

void UTSGameInstance::Shutdown()
{
    GameScript.Reset();
}
