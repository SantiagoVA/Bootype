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
exports.info = void 0;
const discord_js_1 = require("discord.js");
exports.default = (client, message, args) => __awaiter(void 0, void 0, void 0, function* () {
    const embedAvatar = new discord_js_1.MessageEmbed()
        .setTitle("Your Avatar")
        .setColor("RANDOM")
        .setImage(`${message.author.displayAvatarURL({ dynamic: true, format: 'png' })}`);
    yield message.channel.send(embedAvatar);
});
exports.info = {
    "name": "avatar",
    "aliases": ["avatar"],
    "description": "Obten tu avatar"
};
