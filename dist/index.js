"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const greet_1 = require("./utils/greet");
const logger_1 = require("./utils/logger");
dotenv_1.default.config();
const user = process.env.USER_NAME || "Guest";
(0, logger_1.log)((0, greet_1.greet)(user));
