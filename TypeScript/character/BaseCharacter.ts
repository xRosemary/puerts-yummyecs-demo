import * as UE from 'ue';
import { PlayerSpawnedEvent } from './PublicAE';

class BaseCharacter extends UE.TPSCharacter {
    ReceiveBeginPlay(): void {
        super.ReceiveBeginPlay();
        PlayerSpawnedEvent.dispatch(this);
    }
}

export default BaseCharacter;
