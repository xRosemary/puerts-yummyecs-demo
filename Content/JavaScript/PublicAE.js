"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeginPlayEvent = void 0;
const yummyecs_1 = require("yummyecs");
class BeginPlayEvent extends yummyecs_1.F.Event {
    world;
    constructor(world) {
        super();
        this.world = world;
    }
}
exports.BeginPlayEvent = BeginPlayEvent;
//# sourceMappingURL=PublicAE.js.map