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
exports.OrderItemRepositoryMySQL = exports.RepositoryMySQL = void 0;
const mappers_1 = require("./mappers");
const connection_1 = require("../../../connections/connection");
const orderItem_1 = require("./mappers/orderItem");
class RepositoryMySQL {
    constructor() {
        this.userMapper = new mappers_1.OrderMapperMySQL();
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (connection_1.Connection.mySQL2Pool == null)
                    return null;
                const [results, fields] = yield connection_1.Connection.mySQL2Pool.query('SELECT * from netamx.Order;');
                const data = Object.values(JSON.parse(JSON.stringify(results)));
                const result = data.map((r) => new mappers_1.OrderMapperMySQL().mapFrom(r));
                return result;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (connection_1.Connection.mySQL2Pool == null)
                    return null;
                const [results, fields] = yield connection_1.Connection.mySQL2Pool.query({
                    sql: `SELECT * from netamx.Order where id=${id};`,
                });
                const data = Object.values(JSON.parse(JSON.stringify(results)));
                const entity = new mappers_1.OrderMapperMySQL().mapFrom(data[0]);
                console.log(entity);
                return entity;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
}
exports.RepositoryMySQL = RepositoryMySQL;
class OrderItemRepositoryMySQL {
    constructor() {
        this.userMapper = new orderItem_1.OrderItemMapperMySQL();
    }
    getAllOrderItem() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (connection_1.Connection.mySQL2Pool == null)
                    return null;
                const [results, fields] = yield connection_1.Connection.mySQL2Pool.query('SELECT * from netamx.OrderItem;');
                const data = Object.values(JSON.parse(JSON.stringify(results)));
                const result = data.map((r) => new orderItem_1.OrderItemMapperMySQL().mapFrom(r));
                return result;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    getByIdOrderItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (connection_1.Connection.mySQL2Pool == null)
                    return null;
                const [results, fields] = yield connection_1.Connection.mySQL2Pool.query({
                    sql: `SELECT * from netamx.OrderItem where id=${id};`,
                });
                const data = Object.values(JSON.parse(JSON.stringify(results)));
                const entity = new orderItem_1.OrderItemMapperMySQL().mapFrom(data[0]);
                console.log(entity);
                return entity;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
}
exports.OrderItemRepositoryMySQL = OrderItemRepositoryMySQL;
