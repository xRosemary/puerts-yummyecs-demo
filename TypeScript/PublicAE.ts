import * as UE from 'ue';
import { F } from 'yummyecs';

export class BeginPlayEvent extends F.Event {
    constructor(public world: UE.World) {
        super();
    }
}
