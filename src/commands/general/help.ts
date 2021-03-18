import Discord, {Client, Message, MessageEmbed} from 'discord.js'
import { Commands } from '../../index.ts'
export default async(client: Client, message: Message, args: string[]) => {
  
  const embedInfo = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL(), '')
    .setTitle("Info Bootype")
    .setColor("RANDOM")
    .setDescription(`Bootype is a discord bot made in typescript of general purposes`)
    .setThumbnail('https://cdn.discordapp.com/avatars/821521809882611764/ba266e81738d91bf4301a34955b14b8a.png')
    .setFooter('(Developers) https://github.com/SantiagoVA/Bootype', 'https://cdn.discordapp.com/avatars/821521809882611764/ba266e81738d91bf4301a34955b14b8a.png')

    for await (let cmd of Commands) {
      embedInfo.addField(`${cmd.info.name}(${cmd.info.aliases.join(" | ")})`, `> ${cmd.info.description}`)
    }
    await message.channel.send(embedInfo)
}

export const info = {
  "name": "help",
  "aliases": ["help", "info", "ayuda"],
  "description": "Preguntale a Bootype, es muy sabio..."
}