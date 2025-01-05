import { F } from 'yummyecs';
import { LocomotionSystem } from './Locomotion';
import { AbilitySystem } from './AbilitySystem';

// prettier-ignore
export const DEFAULT_INIT_SYSTEM = [
    F.GmSystem,
    F.SheetLoadSystem,
    F.UISystem,
    LocomotionSystem,
    AbilitySystem,
];

export const DEFAULT_MAP = 'ThirdPersonMap';

export interface GMCommand {
    func: Function;
    paramTypes: Function[];
}
