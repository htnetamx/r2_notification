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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotmakerController = void 0;
const axios_1 = __importDefault(require("axios"));
;
class BotmakerController {
    post(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const instance = axios_1.default.create({
                    baseURL: 'https://go.botmaker.com/api/v1.0/intent/v2',
                    timeout: 15000,
                    headers: {
                        "access-token": "eyJhbGciOiJIUzUxMiJ9.eyJidXNpbmVzc0lkIjoibmV0YSIsIm5hbWUiOiJKb3JnZSBHYXJkdcOxbyIsImFwaSI6dHJ1ZSwiaWQiOiJEendwcUthNzVqUnRSYmpHNXY2dE8zYkFoeGUyIiwiZXhwIjoxNzkzNTcyMTEwLCJqdGkiOiJEendwcUthNzVqUnRSYmpHNXY2dE8zYkFoeGUyIn0.WeeDunXgDyAddDtR4J0BVfb_PRpjetZZi5CjNpL6U2P0t8e0RJMbtJCMi7NcqghABoV8vTpnyooscVNbp9qzig"
                    }
                });
                yield instance.post('/', params);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.BotmakerController = BotmakerController;
