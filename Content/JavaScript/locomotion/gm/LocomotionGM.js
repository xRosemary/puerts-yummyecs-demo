"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GMList = void 0;
const Define_1 = require("../Define");
const PublicAE_1 = require("../PublicAE");
function SwitchLocomotion(index) {
    let layerPath;
    switch (index) {
        case 0:
            layerPath = Define_1.ANIM_LAYER.Unarmed;
            break;
        case 1:
            layerPath = Define_1.ANIM_LAYER.Pistol;
            break;
        case 2:
            layerPath = Define_1.ANIM_LAYER.Rifle;
            break;
        case 3:
            layerPath = Define_1.ANIM_LAYER.Shotgun;
            break;
        default:
            layerPath = Define_1.ANIM_LAYER.Unarmed;
            break;
    }
    PublicAE_1.SwitchLocomotionLayerAction.do(layerPath);
}
function SwitchCrouch(isCrouch) {
    PublicAE_1.CrouchAction.do(isCrouch === 1);
}
exports.GMList = [
    {
        func: SwitchLocomotion,
        paramTypes: [Number],
    },
    {
        func: SwitchCrouch,
        paramTypes: [Number],
    },
];
//# sourceMappingURL=LocomotionGM.js.map