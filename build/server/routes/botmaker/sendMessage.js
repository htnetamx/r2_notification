"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessageRoute = void 0;
const botmaker_controller_1 = require("../../../controller/botmaker/botmaker.controller");
class sendMessageRoute {
    constructor(server) {
        this.sendMessage = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield new botmaker_controller_1.BotmakerController().post(req.body);
                res.status(200).send(result);
            }
            catch (e) { }
        });
        this.server = server;
    }
    configureEndPoints(baseUrl) {
        this.server.post(`${baseUrl}notification/botmaker/`, this.sendMessage);
    }
}
exports.sendMessageRoute = sendMessageRoute;
