import { Client, Message, MessageEmbed } from 'discord.js'

export default async (client: Client, message: Message, args: string[]) => {
  const randomGif = [{
    title: 'MONKEY SIMP',
    image: 'https://media1.tenor.com/images/65ae98987d9e68067f6f264d254ee35d/tenor.gif?itemid=20356254'
  }, {
    title: 'MONKEY SKATER',
    image: 'https://media1.tenor.com/images/b7aefff4a342278e6abd4482e77a0b1e/tenor.gif?itemid=18408691'
  }, {
    title: 'MONKEY FLIP',
    image: 'https://media1.tenor.com/images/d02d12805ec78a267e3af06523161221/tenor.gif?itemid=18149687'
  }, {
    title: 'MONKEY DANCE',
    image: 'https://media.tenor.com/images/f0b1a35ddf2ebf446388cc971fc76040/tenor.gif'
  }, {
    title: 'MONKEY FUCK',
    image: 'https://media1.tenor.com/images/6a5b3ed1cafc633d472435b39c4be99e/tenor.gif?itemid=20293734'
  }]

  const randomAnswer = Math.floor(Math.random() * randomGif.length)

  const embed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${randomGif[randomAnswer].title}`)
    .setImage(`${randomGif[randomAnswer].image}`)

  await message.channel.send(embed)
}

export const info = {
  name: 'monkey',
  aliases: ['monki', 'mono'],
  description: 'Monos por allí y monos por aca'
}
