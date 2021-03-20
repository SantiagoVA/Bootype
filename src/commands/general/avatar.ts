import { Client, Message, MessageEmbed } from 'discord.js';

export default async (client: Client, message: Message, args: string[]) => {
    try {
        const user = message.mentions.users.first() || message.author;
        const embedAvatar = new MessageEmbed()
            .setTitle('Your Avatar')
            .setColor('RANDOM')
            .setImage(
                `${user.displayAvatarURL({ dynamic: true, format: 'png' })}`
            );

        await message.channel.send(embedAvatar);
    } catch (error) {
        console.error(error);
    }
};

export const info = {
    name: 'avatar',
    aliases: ['avatar'],
    description: 'Obten tu avatar'
};
