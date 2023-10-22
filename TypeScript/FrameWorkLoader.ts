import * as UE from 'ue';
import { C, F } from 'yummyecs';
import { DEFAULT_INIT_SYSTEM, DEFAULT_MAP } from './Define';

class FrameWorkLoader extends UE.Actor {
    ReceiveBeginPlay(): void {
        // 将Game instance传给框架
        C.InitGameInstance(this.GetGameInstance());

        // 初始化系统池
        F.SystemPoolStore.getInstance().systems.push(new F.PoolSystem());

        // 加载默认System
        DEFAULT_INIT_SYSTEM.forEach((systemCtor) => {
            F.CreateSystemAction.do(systemCtor);
        });

        // 加载默认地图
        UE.GameplayStatics.OpenLevel(this.GetWorld(), DEFAULT_MAP);
    }
}

export default FrameWorkLoader;
