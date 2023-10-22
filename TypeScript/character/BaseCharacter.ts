import * as UE from 'ue';
import { PlayerSpawnedEvent } from './PublicAE';
import { F } from 'yummyecs';
import { LocomotionSystem } from '../locomotion';

class BaseCharacter extends UE.TPSCharacter {
    ReceiveBeginPlay(): void {
        super.ReceiveBeginPlay();

        let imc = UE.InputMappingContext.Load('/Game/ThirdPerson/Input/IMC_Default.IMC_Default');
        let controller = this.GetController() as UE.PlayerController;
        controller.GetEnhancedInputSubsystem().AddMappingContext(imc, 0);

        F.CreateSystemAction.do(LocomotionSystem);
        PlayerSpawnedEvent.dispatch(this);
    }
}

export default BaseCharacter;
