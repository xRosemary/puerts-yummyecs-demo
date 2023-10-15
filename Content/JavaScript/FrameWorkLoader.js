"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const yummyecs_1 = require("yummyecs");
const Define_1 = require("./Define");
class FrameWorkLoader extends UE.Actor {
    ReceiveBeginPlay() {
        // 初始化系统池
        yummyecs_1.F.SystemPoolStore.getInstance().systems.push(new yummyecs_1.F.PoolSystem());
        // 加载默认System
        Define_1.DEFAULT_INIT_SYSTEM.forEach((systemCtor) => {
            yummyecs_1.F.CreateSystemAction.do(systemCtor);
        });
        // 加载默认地图
        UE.GameplayStatics.OpenLevel(this.GetWorld(), Define_1.DEFAULT_MAP);
    }
}
exports.default = FrameWorkLoader;
//# sourceMappingURL=FrameWorkLoader.js.map