import * as UE from 'ue';
import { F } from 'yummyecs';

class Weapon extends UE.Actor {
    SkeletalMesh: UE.SkeletalMeshComponent;

    Constructor() {
        this.SkeletalMesh = this.CreateDefaultSubobject(
            'SkeletalMesh',
            UE.SkeletalMeshComponent.StaticClass(),
            UE.SkeletalMeshComponent.StaticClass(),
            true,
            false
        ) as UE.SkeletalMeshComponent;

        this.SkeletalMesh.SetupAttachment(this.SkeletalMesh, 'SkeletalMesh');

        // socket
        // pos, rot, scale
    }

    ReceiveBeginPlay(): void {
        super.ReceiveBeginPlay();
    }
}

export default Weapon;
