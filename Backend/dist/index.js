"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config/config"));
const db_1 = __importDefault(require("./Database/ConnectionSettings/db"));
const app = (0, express_1.default)();
const port = config_1.default.port;
(0, db_1.default)(); // DataBase Connection is here
app.get("/", (req, res) => {
    res.send("Hello, TypeScript Backend!!");
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
