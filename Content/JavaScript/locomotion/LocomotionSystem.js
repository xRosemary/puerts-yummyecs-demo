"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocomotionSystem = void 0;
const UE = require("ue");
const yummyecs_1 = require("yummyecs");
const Define_1 = require("./Define");
const PublicAE_1 = require("./PublicAE");
const character_1 = require("../character");
const gm_1 = require("./gm");
let GameWorld;
class LocomotionSystem extends yummyecs_1.F.System {
    onPlayerSpawnedEvent(event) {
        this.linkAnimClassLayers(Define_1.ANIM_LAYER.Unarmed, event.character);
        GameWorld = event.character.GetWorld();
        gm_1.GMList.forEach((v) => {
            yummyecs_1.F.registerGMCommand(v.func, v.paramTypes);
        });
        // F.CreateSystemAction.do(TestUISystem);
        // F.OpenUMG.do(UMG_NAME);
    }
    onSwitchLocomotionLayerAction(action) {
        let player = action.player;
        if (action.player === undefined) {
            player = UE.GameplayStatics.GetPlayerCharacter(GameWorld, 0);
        }
        this.linkAnimClassLayers(action.layerPath, player);
    }
    onCrouchAction(action) {
        let player = UE.GameplayStatics.GetPlayerCharacter(GameWorld, 0);
        this.debug(action.isCrouch);
        if (action.isCrouch) {
            player.Crouch(action.bClientSimulation);
        }
        else {
            player.UnCrouch(action.bClientSimulation);
        }
    }
    linkAnimClassLayers(layerPath, player) {
        let bpClass = UE.Class.Load(layerPath);
        player.Mesh.LinkAnimClassLayers(bpClass);
    }
}
__decorate([
    yummyecs_1.D.listen(character_1.PlayerSpawnedEvent)
], LocomotionSystem.prototype, "onPlayerSpawnedEvent", null);
__decorate([
    yummyecs_1.D.listen(PublicAE_1.SwitchLocomotionLayerAction)
], LocomotionSystem.prototype, "onSwitchLocomotionLayerAction", null);
__decorate([
    yummyecs_1.D.listen(PublicAE_1.CrouchAction)
], LocomotionSystem.prototype, "onCrouchAction", null);
exports.LocomotionSystem = LocomotionSystem;
//# sourceMappingURL=LocomotionSystem.js.map