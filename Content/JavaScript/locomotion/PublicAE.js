"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwitchLocomotionLayerAction = void 0;
const yummyecs_1 = require("yummyecs");
class SwitchLocomotionLayerAction extends yummyecs_1.F.Action {
    layerPath;
    player;
    constructor(layerPath, player) {
        super();
        this.layerPath = layerPath;
        this.player = player;
    }
}
exports.SwitchLocomotionLayerAction = SwitchLocomotionLayerAction;
//# sourceMappingURL=PublicAE.js.map