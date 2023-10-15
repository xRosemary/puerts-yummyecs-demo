import { F } from 'yummyecs';
import { LocomotionSystem } from './locomotion';

export const DEFAULT_INIT_SYSTEM = [F.GmSystem, F.SheetLoadSystem, F.UISystem, LocomotionSystem];

export const DEFAULT_MAP = 'ThirdPersonMap';

export interface GMCommand {
    func: Function;
    paramTypes: Function[];
}
