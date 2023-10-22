"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestUISystem = void 0;
const yummyecs_1 = require("yummyecs");
const Define_1 = require("./Define");
class TestUISystem extends yummyecs_1.F.System {
    testCallback(widget) {
        console.error(widget.GetName());
        console.error('testCallback');
    }
}
__decorate([
    yummyecs_1.D.ui(Define_1.UMG_NAME, 'btnTest', 'OnClicked')
], TestUISystem.prototype, "testCallback", null);
exports.TestUISystem = TestUISystem;
//# sourceMappingURL=TestUISystem.js.map