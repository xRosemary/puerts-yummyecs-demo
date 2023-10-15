"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const PublicAE_1 = require("./PublicAE");
class BaseCharacter extends UE.TPSCharacter {
    ReceiveBeginPlay() {
        super.ReceiveBeginPlay();
        PublicAE_1.PlayerSpawnedEvent.dispatch(this);
    }
}
exports.default = BaseCharacter;
//# sourceMappingURL=BaseCharacter.js.map