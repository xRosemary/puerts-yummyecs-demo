"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_MAP = exports.DEFAULT_INIT_SYSTEM = void 0;
const yummyecs_1 = require("yummyecs");
const locomotion_1 = require("./locomotion");
exports.DEFAULT_INIT_SYSTEM = [yummyecs_1.F.GmSystem, yummyecs_1.F.SheetLoadSystem, yummyecs_1.F.UISystem, locomotion_1.LocomotionSystem];
exports.DEFAULT_MAP = 'ThirdPersonMap';
//# sourceMappingURL=Define.js.map