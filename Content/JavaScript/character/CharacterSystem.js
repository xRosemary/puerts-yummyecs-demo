"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocomotionSystem = void 0;
const yummyecs_1 = require("yummyecs");
const PublicAE_1 = require("../PublicAE");
class LocomotionSystem extends yummyecs_1.F.System {
    onBeginPlayEvent(event) {
        //event.world.SpawnActor(BaseCharacter.StaticClass())
    }
}
__decorate([
    yummyecs_1.D.listen(PublicAE_1.BeginPlayEvent)
], LocomotionSystem.prototype, "onBeginPlayEvent", null);
exports.LocomotionSystem = LocomotionSystem;
//# sourceMappingURL=CharacterSystem.js.map