<<<<<<< HEAD
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
=======
import Discord, { Client, Message, MessageEmbed } from 'discord.js'
import Canvas from 'canvas'

export default async (client: Client, message: Message, args: string[]) => {
  const canvas = Canvas.createCanvas(600, 250);
	const ctx = canvas.getContext('2d');
  const user = message.mentions.users.first() || message.author

	const background = await Canvas.loadImage('https://image.freepik.com/vector-gratis/fondo-oscuro-hexagonos-minimos_79603-1455.jpg');

	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = '50px sans-serif';
	ctx.fillStyle = '#d6d6d6';
	ctx.fillText(user.username, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	await message.channel.send(attachment);
}

export const info = {
  name: 'avatar',
  aliases: ['avatar', 'profile'],
  description: 'Obten tu avatar'
}
>>>>>>> 6d6bf71db110bb77319edc10d41db1f1f018e89f
