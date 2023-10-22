"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const PublicAE_1 = require("./PublicAE");
const yummyecs_1 = require("yummyecs");
const locomotion_1 = require("../locomotion");
class BaseCharacter extends UE.TPSCharacter {
    ReceiveBeginPlay() {
        super.ReceiveBeginPlay();
        let imc = UE.InputMappingContext.Load('/Game/ThirdPerson/Input/IMC_Default.IMC_Default');
        let controller = this.GetController();
        controller.GetEnhancedInputSubsystem().AddMappingContext(imc, 0);
        yummyecs_1.F.CreateSystemAction.do(locomotion_1.LocomotionSystem);
        PublicAE_1.PlayerSpawnedEvent.dispatch(this);
    }
}
exports.default = BaseCharacter;
//# sourceMappingURL=BaseCharacter.js.map