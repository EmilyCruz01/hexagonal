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
exports.AddUserUseCase = void 0;
class AddUserUseCase {
    constructor(userRepositorio) {
        this.userRepositorio = userRepositorio;
    }
    run(id_user, nombre, apellido, edad, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdUser = yield this.userRepositorio.addUser(id_user, nombre, apellido, edad, password);
                return createdUser;
            }
            catch (error) {
                console.log("Error en addUserUseCase", error);
                return null;
            }
        });
    }
}
exports.AddUserUseCase = AddUserUseCase;
