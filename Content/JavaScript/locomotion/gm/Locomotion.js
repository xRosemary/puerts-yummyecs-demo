"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwitchLocomotion = void 0;
const yummyecs_1 = require("yummyecs");
const __1 = require("..");
function SwitchLocomotion(index) {
    let layerPath;
    switch (index) {
        case 0:
            layerPath = __1.ANIM_LAYER.Unarmed_Layer;
            break;
        case 1:
            layerPath = __1.ANIM_LAYER.Pistol_Layer;
            break;
        default:
            layerPath = __1.ANIM_LAYER.Unarmed_Layer;
            break;
    }
    __1.SwitchLocomotionLayerAction.do(layerPath);
}
exports.SwitchLocomotion = SwitchLocomotion;
// DEFAULT_INIT_GM_COMMAND.push({
//     func: SwitchLocomotion,
//     paramTypes: [Number],
// });
yummyecs_1.F.registerGMCommand(SwitchLocomotion, [Number]);
//# sourceMappingURL=Locomotion.js.map