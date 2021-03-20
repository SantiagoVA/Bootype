import Discord, { Client, Message } from 'discord.js';
import { Commands } from '../../index';

export default async (client: Client, message: Message, args: string[]) => {
<<<<<<< HEAD
    try {
        const embedInfo = new Discord.MessageEmbed()
            .setAuthor(
                message.author.username,
                message.author.displayAvatarURL(),
                ''
            )
            .setTitle('Info Bootype')
            .setColor('RANDOM')
            .setDescription(
                'Bootype is a discord bot made in typescript of general purposes'
            )
            .setThumbnail(
                'https://cdn.discordapp.com/avatars/821521809882611764/ba266e81738d91bf4301a34955b14b8a.png'
            )
            .setFooter(
                '(Developers) https://github.com/SantiagoVA/Bootype',
                'https://cdn.discordapp.com/avatars/821521809882611764/ba266e81738d91bf4301a34955b14b8a.png'
            );
=======
  const embedInfo = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL(), '')
    .setTitle('Info Bootype')
    .setColor('RANDOM')
    .setDescription('Bootype is a discord bot made in typescript of general purposes')
    .setThumbnail('https://cdn.discordapp.com/avatars/821521809882611764/5d78cef8c4bb5beecfdc722e2eaa7415.png')
    .setFooter('(Developers) https://github.com/SantiagoVA/Bootype', 'https://cdn.discordapp.com/avatars/821521809882611764/ba266e81738d91bf4301a34955b14b8a.png')
>>>>>>> 6d6bf71db110bb77319edc10d41db1f1f018e89f

        for await (const cmd of Commands) {
            embedInfo.addField(
                `${cmd.info.name}(${cmd.info.aliases.join(' | ')})`,
                `> ${cmd.info.description}`
            );
        }
        await message.channel.send(embedInfo);
    } catch (error) {
        console.error(error);
    }
};

export const info = {
    name: 'help',
    aliases: ['help', 'info', 'ayuda'],
    description: 'Preguntale a Bootype, es muy sabio...'
};
