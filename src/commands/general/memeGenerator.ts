import Discord, { Client, Message } from 'discord.js'
import Canvas from 'canvas'

export default async (client: Client, message: Message, args: string[]) => {
  const canvas = Canvas.createCanvas(600, 700);
  const ctx = canvas.getContext('2d');
  const background = await Canvas.loadImage(args[0]);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = '#74037b';
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  ctx.font = '30px sans-serif';
  ctx.fillStyle = args[3];
  if (args[2] === 'bottom') {
    ctx.fillText(args[1].replace(/-/g, ' '), canvas.width / 10, canvas.height / 1.1);
  } else {
    ctx.fillText(args[1].replace(/-/g, " "), canvas.width / 9, canvas.height / 14);
  }

  ctx.beginPath();
  ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.clip();

  ctx.strokeStyle = '#74037b';
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
  message.channel.send(attachment);
}

export const info = {
  name: 'memeGenerator',
  aliases: ['meme', 'generator'],
  description: 'Crea memes desde discord, nunca fue mas facil.\n para hacerlo sigue los siguientes pasos: \n ``` -meme ImagenURL TEXTO-SEPARADO-CON-GUIONES colorEnIngles ```'
}