import * as UE from 'ue';
import { F } from 'yummyecs';

export class SwitchLocomotionLayerAction extends F.Action {
    constructor(public layerPath: string, public player?: UE.Character) {
        super();
    }
}
