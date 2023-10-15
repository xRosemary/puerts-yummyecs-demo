"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const yummyecs_1 = require("yummyecs");
const PublicAE_1 = require("./PublicAE");
class TSGameMode extends UE.GameModeBase {
    GM(funcName, params) {
        yummyecs_1.F.GmAction.do(funcName, params.split(' '));
    }
    ReceiveBeginPlay() {
        PublicAE_1.BeginPlayEvent.dispatch();
    }
}
__decorate([
    UE.set_flags(UE.FunctionFlags.FUNC_Exec)
], TSGameMode.prototype, "GM", null);
exports.default = TSGameMode;
//# sourceMappingURL=TSGameMode.js.map