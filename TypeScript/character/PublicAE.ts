import * as UE from 'ue';
import { F } from 'yummyecs';

export class PlayerSpawnedEvent extends F.Event {
    constructor(public Character: UE.TPSCharacter) {
        super();
    }
}
