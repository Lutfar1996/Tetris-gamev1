import dotenv from "dotenv";
import { greet } from "./utils/greet";
import { log } from "./utils/logger";

dotenv.config();

const user = process.env.USER_NAME || "Guest";
log(greet(user));
