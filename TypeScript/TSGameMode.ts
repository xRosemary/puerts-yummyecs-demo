import * as UE from 'ue';
import { F } from 'yummyecs';
import { BeginPlayEvent } from './PublicAE';

class TSGameMode extends UE.GameModeBase {
    @UE.set_flags(UE.FunctionFlags.FUNC_Exec)
    public GM(funcName: string, params: string): void {
        F.GmAction.do(funcName, params.split(' '));
    }

    ReceiveBeginPlay(): void {
        BeginPlayEvent.dispatch(this.GetWorld());
    }
}

export default TSGameMode;
