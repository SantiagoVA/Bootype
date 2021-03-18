"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const discord_js_1 = require("discord.js");
const config_json_1 = require("./config.json");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const client = new discord_js_1.Client();
const Commands = [];
const root = path.resolve(`./src/commands`);
console.log(root);
const paths = fs.readdirSync(root);
if (paths.length) {
    for (const pathF of paths) {
        const pathRute = path.resolve(root, pathF);
        const pathInfo = fs.statSync(pathRute);
        if (pathInfo.isDirectory()) {
            const files = fs.readdirSync(pathRute);
            if (files.length) {
                for (const file of files) {
                    if (!file.endsWith('.ts')) {
                        continue;
                    }
                    const CommandFunction = require(`${__dirname}/commands/${pathF}/${file}`).default;
                    console.log(CommandFunction);
                    if (CommandFunction) {
                        Commands.push(CommandFunction());
                    }
                }
            }
        }
    }
}
client.on('ready', () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.user.setActivity('-info | Developement me', {
        type: "PLAYING"
    });
    console.log('OK the bot is ready :)');
}));
client.on('message', (message) => __awaiter(void 0, void 0, void 0, function* () {
    var e_1, _a;
    const args = message.content.slice(config_json_1.prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();
    if (Commands.length) {
        try {
            for (var Commands_1 = __asyncValues(Commands), Commands_1_1; Commands_1_1 = yield Commands_1.next(), !Commands_1_1.done;) {
                const cmd = Commands_1_1.value;
                console.log(cmd);
                if (cmd.info.aliases.includes(command)) {
                    yield cmd(client, message, args);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (Commands_1_1 && !Commands_1_1.done && (_a = Commands_1.return)) yield _a.call(Commands_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    else {
        console.log("No hay comandos");
    }
}));
client.login(process.env.TOKEN_DISCORD);
