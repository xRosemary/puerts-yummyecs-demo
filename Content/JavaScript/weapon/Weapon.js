"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
class Weapon extends UE.Actor {
    SkeletalMesh;
    Constructor() {
        this.SkeletalMesh = this.CreateDefaultSubobject('SkeletalMesh', UE.SkeletalMeshComponent.StaticClass(), UE.SkeletalMeshComponent.StaticClass(), true, false);
        this.SkeletalMesh.SetupAttachment(this.SkeletalMesh, 'SkeletalMesh');
        // socket
        // pos, rot, scale
    }
    ReceiveBeginPlay() {
        super.ReceiveBeginPlay();
    }
}
exports.default = Weapon;
//# sourceMappingURL=Weapon.js.map