import {config} from 'dotenv';
config();
import {Client} from 'discord.js';
import {prefix} from './config.json'

const client: Client = new Client();

client.on('ready', () => {
    console.log('OK the bot is ready :)')
});

client.on('message', (message) => {
    const messageReplace = message.content.replace('- ', '-'); 
    const messageEdited = messageReplace.toLowerCase();
    const embedAvatar:object = {
        color: "RANDOM",
        title: "Your avatar",
        image: {
            url: `${message.author.displayAvatarURL()}`,
        },
    }
    const embedInfo:object = {
        color: "RANDOM",
        title: "Info Bootype",
        description: "***Comandos***",
        thumbnail: {
            url: 'https://discord.com/assets/322c936a8c8be1b803cd94861bdfa868.png',
        },
        fields:[
            {
                name: '-info o -help',
                value: '> Información acerca del bot',
            },
            {
                name: '-surprise',
                value: '> Sorpresa ¿?',
                inline: false,
            },{
                name: '-8ball',
                value: '> Pregunta cosas, Bootype te respondera',
                inline: false,
            },
            {
                name: '-avatar',
                value: '> Mira tu avatar',
                inline: false,
            },
            {
                name: 'Hola Bootype',
                value: '> Bootype te saludara :)',
                inline: false,
            },
            { name: '\u200B', value: '\u200B' },
        ],
        footer: {
            text: 'Creado por https://github.com/SantiagoVA',
            icon_url: 'https://cdn.discordapp.com/avatars/327969317822005249/cd4c3191714fd6f76c239bf0be90f7a4.png?size=128',
        }
        
    }

    const embedNo:object = {
        color: "RANDOM",
        title: "No 100%",
        description: "Mmmmm NO!",
        thumbnail: {
            url: "https://media.tenor.com/images/83d3b6d69d66da8e4f9bb93c4ca17621/tenor.gif"
        },
    }

    const embedMaybe:object = {
        color: "RANDOM",
        title: "Tal vez si tal vez no, la verdad no sé",
        description: "Ni la mas remota idea",
        thumbnail:{
            url: "https://media.tenor.com/images/e8cf962fcac36034e26d119b180f383d/tenor.gif"
        },
    }

    const embedYes:object = {
        color: "RANDOM",
        title: "Definitivamente si",
        description: "Claro que si... 😏",
        thumbnail:{
            url: "http://media.tumblr.com/tumblr_li62tmsdbS1qf991p.gif"
        },
    }

    
    if(messageEdited.startsWith('Hola Bootype')){
        message.reply(`Hola!`)
    }

    if(messageEdited.startsWith(`${prefix}avatar`)){
        message.channel.send({ embed: embedAvatar })
    }

    if(messageEdited.startsWith(`${prefix}info`) || messageEdited.startsWith(`${prefix}help`)){
        message.channel.send({ embed: embedInfo })
    }

    if(messageEdited.startsWith(`${prefix}8ball`)){
        const randomNum:number = Math.random() * 10;
        console.log(randomNum)
        if(randomNum < 3.33){

            message.channel.send({ embed: embedNo })
        
        } else if(randomNum >= 3.33 && randomNum <= 6.65){

            message.channel.send({ embed: embedMaybe })
        
        } else if (randomNum >= 6.66 && randomNum <= 10){
            
            message.channel.send({ embed: embedYes })
        
        }
    }

    if(message.content.startsWith(`${prefix}surprise`)){
        for(let i = 0; i <= 100; i++){
            setTimeout(function(){
                message.author.send("Vaya... una mala sorpresa jaja")
            }, 10);
        }
    }
});


client.login(process.env.TOKEN_DISCORD);