import * as UE from 'ue';
import { D, F } from 'yummyecs';
import { ANIM_LAYER } from './Define';
import { CrouchAction, SwitchLocomotionLayerAction } from './PublicAE';
import { PlayerSpawnedEvent } from '../character';
import { GMList } from './gm';

let GameWorld: UE.World;

export class LocomotionSystem extends F.System {
    @D.listen(PlayerSpawnedEvent)
    protected onPlayerSpawnedEvent(event: PlayerSpawnedEvent) {
        this.linkAnimClassLayers(ANIM_LAYER.Unarmed, event.character);
        GameWorld = event.character.GetWorld();
        GMList.forEach((v) => {
            F.registerGMCommand(v.func, v.paramTypes);
        });
    }

    @D.listen(SwitchLocomotionLayerAction)
    protected onSwitchLocomotionLayerAction(action: SwitchLocomotionLayerAction) {
        let player: UE.Character = action.player;
        if (action.player === undefined) {
            player = UE.GameplayStatics.GetPlayerCharacter(GameWorld, 0);
        }

        this.linkAnimClassLayers(action.layerPath, player);
    }

    @D.listen(CrouchAction)
    protected onCrouchAction(action: CrouchAction) {
        let player = UE.GameplayStatics.GetPlayerCharacter(GameWorld, 0);
        this.debug(action.isCrouch);
        if (action.isCrouch) {
            player.Crouch(action.bClientSimulation);
        } else {
            player.UnCrouch(action.bClientSimulation);
        }
    }

    private linkAnimClassLayers(layerPath: string, player: UE.Character) {
        let bpClass = UE.Class.Load(layerPath);
        player.Mesh.LinkAnimClassLayers(bpClass);
    }
}
