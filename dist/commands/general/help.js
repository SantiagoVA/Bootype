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
exports.info = void 0;
const discord_js_1 = __importDefault(require("discord.js"));
exports.default = (client, message, args) => __awaiter(void 0, void 0, void 0, function* () {
    const embedInfo = new discord_js_1.default.MessageEmbed()
        .setAuthor('Created by', message.author.displayAvatarURL(), 'https://github.com/SantiagoVA/Bootype/graphs/contributors')
        .setTitle("Info Bootype")
        .setDescription("**Comandos**")
        .setThumbnail('https://cdn.discordapp.com/avatars/821521809882611764/ba266e81738d91bf4301a34955b14b8a.png')
        .addField("-info o help", '> Información acerca del bot')
        .addField('-8ball', '> Pregunta cosas, Bootype te respondera')
        .addField('-avatar', '> Mira tu avatar o el de alguien mas')
        .setFooter("https://github.com/SantiagoVA");
    yield message.channel.send(embedInfo);
});
exports.info = {
    "name": "help",
    "aliases": ["help", "info", "ayuda"],
    "description": "Preguntale a Bootype, es muy sabio..."
};
