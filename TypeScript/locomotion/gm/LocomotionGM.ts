import { GMCommand } from '../..';
import { ANIM_LAYER } from '../Define';
import { SwitchLocomotionLayerAction } from '../PublicAE';

function SwitchLocomotion(index: number) {
    let layerPath: string;
    switch (index) {
        case 0:
            layerPath = ANIM_LAYER.Unarmed;
            break;
        case 1:
            layerPath = ANIM_LAYER.Pistol;
            break;
        case 2:
            layerPath = ANIM_LAYER.Rifle;
            break;
        case 3:
            layerPath = ANIM_LAYER.Shotgun;
            break;
        default:
            layerPath = ANIM_LAYER.Unarmed;
            break;
    }
    SwitchLocomotionLayerAction.do(layerPath);
}

export const GMList: GMCommand[] = [
    {
        func: SwitchLocomotion,
        paramTypes: [Number],
    },
];
