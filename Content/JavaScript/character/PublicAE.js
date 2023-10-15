"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerSpawnedEvent = void 0;
const yummyecs_1 = require("yummyecs");
class PlayerSpawnedEvent extends yummyecs_1.F.Event {
    character;
    constructor(character) {
        super();
        this.character = character;
    }
}
exports.PlayerSpawnedEvent = PlayerSpawnedEvent;
//# sourceMappingURL=PublicAE.js.map