import * as UE from 'ue';
import { D, F } from 'yummyecs';
import { PlayerSpawnedEvent } from '../character';
import { ABILITY_SET_PATH } from './Define';

export class AbilitySystem extends F.System {
    @D.listen(PlayerSpawnedEvent)
    protected onPlayerSpawnedEvent(event: PlayerSpawnedEvent) {
        if (event.Character === null) {
            return;
        }

        const DefaultAbilitySet = UE.AbilityAsset.Load(ABILITY_SET_PATH);
        if (DefaultAbilitySet === null) {
            return;
        }

        event.Character.AbilitySets.Add(DefaultAbilitySet);
        event.Character.InitAbilitySystem();
    }
}
