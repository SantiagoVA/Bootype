import {config} from 'dotenv';
config();
import {Client} from 'discord.js';
import {prefix} from './config.json'

const client: Client = new Client();

client.on('ready', () => {
    console.log('OK the bot is ready :)')
});

client.on('message', (message) => {
    const id = message.member?.user.id; 
    const embedAvatar = {
        color: "RANDOM",
        title: "Your avatar",
        image: {
            url: `${message.author.displayAvatarURL()}`,
        },
    }
    const embedInfo = {
        color: "RANDOM",
        title: "Info Bootype",
        description: "***Comandos***",
        thumbnail: {
            url: 'https://discord.com/assets/322c936a8c8be1b803cd94861bdfa868.png',
        },
        fields:[
            {
                name: '->info',
                value: '> Información acerca del bot',
            },
            {
                name: '->surprise',
                value: '> Sorpresa ¿?',
                inline: false,
            },
            {
                name: '->avatar',
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
    
    if(message.content.startsWith('Hola Bootype')){
        message.reply(`Hola!`)
    }

    if(message.content.startsWith(`${prefix}avatar`)){
        message.channel.send({ embed: embedAvatar })
    }

    if(message.content.startsWith(`${prefix}info`)){
        message.channel.send({ embed: embedInfo })
    }

    if(message.content.startsWith(`${prefix}roll`)){
        const randomNum:number = Math.random() * 10;
        console.log(randomNum)
        if(randomNum < 3.33){

            const embedNo = {
                color: "RANDOM",
                Title: "No...",
                Image: "https://media.tenor.com/videos/083986f9772a1f81826dc34bad540ba6/mp4"
            }

            message.channel.send({ embed: embedNo })
        } else if(randomNum >= 3.33 && randomNum <= 6.65){
            const embedMaybe = {
                color: "RANDOM",
                Title: "Tal vez si tal vez no, la verdad no sé",
                Image: "https://media.tenor.com/videos/c05cd4089127b4f35891c729cbc39a08/mp4"
            }
            message.channel.send({ embed: embedMaybe })
        } else if (randomNum >= 6.66 && randomNum <= 10){
            const embedYes = {
                color: "RANDOM",
                Title: "Definitivamente si",
                Image: "https://media.tenor.com/videos/50ade06892a0b5822b28140f830a5294/mp4"
            }
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