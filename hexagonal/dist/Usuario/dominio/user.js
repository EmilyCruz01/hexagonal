"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id_user, nombre, apellido, edad, password) {
        this.id_user = id_user;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.password = password;
    }
}
exports.User = User;
