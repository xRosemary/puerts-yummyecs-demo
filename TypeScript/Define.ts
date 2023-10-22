import { F } from 'yummyecs';

export const DEFAULT_INIT_SYSTEM = [F.GmSystem, F.SheetLoadSystem, F.UISystem];

export const DEFAULT_MAP = 'ThirdPersonMap';

export interface GMCommand {
    func: Function;
    paramTypes: Function[];
}
