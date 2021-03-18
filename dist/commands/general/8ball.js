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
    const randomNum = Math.random() * 10;
    const answers = [{
            answer: 'Si',
            description: 'Por supuesto que si... 😏',
            image: 'http://media.tumblr.com/tumblr_li62tmsdbS1qf991p.gif'
        }, {
            answer: 'Obvio',
            decription: 'Como dudas eso...',
            image: 'http://www.lasullivan.org/cms/wp-content/uploads/lacasinegratv-resplandor-1.gif'
        }, {
            answer: 'Noooooo!',
            decription: 'Nooooooooo',
            image: 'https://media.tenor.com/images/b9df0c0c41ff93838e8f837ffc54615a/tenor.gif'
        },
        {
            answer: 'No 100%',
            description: 'No, estoy segurisimo!',
            image: 'https://media.tenor.com/images/83d3b6d69d66da8e4f9bb93c4ca17621/tenor.gif'
        }, {
            answer: 'Tal vez si tal vez no',
            decription: 'La verdad no tengo la mas remota idea',
            image: 'https://media.tenor.com/images/e8cf962fcac36034e26d119b180f383d/tenor.gif'
        }, {
            answer: '¿Tu que crees?',
            description: 'Dime tu yo no sé 🤷',
            image: 'https://media.tenor.com/images/ce8dbb2c0cba5fd9ce54a4e436c75625/tenor.gif'
        }];
    const randomAnswer = Math.floor(Math.random() * answers.length);
    const embed = new discord_js_1.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${answers[randomAnswer].answer}`)
        .setDescription(`${answers[randomAnswer].description}`)
        .setImage(`${answers[randomAnswer].image}`)
        .setThumbnail('https://media.tenor.com/images/83d3b6d69d66da8e4f9bb93c4ca17621/tenor.gif');
    yield message.channel.send(embed);
});
exports.info = {
    "name": "8ball",
    "aliases": ['question', 'pregunta'],
    "description": "Preguntale a Bootype, es muy sabio..."
};
