import { Client, Message, MessageEmbed } from 'discord.js';

export default async (client: Client, message: Message, args: string[]) => {
  try {
    if (!args.length) {
      await message.channel.send(
        'No te puedo responder, si no me preguntas algo!'
      );
      return;
    }

    const answers = [
      {
        answer: 'Si',
        description: 'Por supuesto que si... 😏',
        image: 'http://media.tumblr.com/tumblr_li62tmsdbS1qf991p.gif'
      },
      {
        answer: 'Obvio',
        description: 'Como dudas eso...',
        image:
                    'http://www.lasullivan.org/cms/wp-content/uploads/lacasinegratv-resplandor-1.gif'
      },
      {
        answer: 'Noooooo!',
        description: 'Nooooooooo',
        image:
                    'https://media.tenor.com/images/b9df0c0c41ff93838e8f837ffc54615a/tenor.gif'
      },
      {
        answer: 'No 100%',
        description: 'No, estoy segurisimo!',
        image:
                    'https://media.tenor.com/images/83d3b6d69d66da8e4f9bb93c4ca17621/tenor.gif'
      },
      {
        answer: 'Tal vez si tal vez no',
        description: 'La verdad no tengo la mas remota idea',
        image:
                    'https://media.tenor.com/images/e8cf962fcac36034e26d119b180f383d/tenor.gif'
      },
      {
        answer: '¿Tu que crees?',
        description: 'Dime tu yo no sé 🤷',
        image:
                    'https://media.tenor.com/images/ce8dbb2c0cba5fd9ce54a4e436c75625/tenor.gif'
      },
      {
        answer: '¿Porque preguntas?',
        description: 'No vuelvas a preguntar eso',
        image:
                    'https://cdn.discordapp.com/emojis/610971207013105734.gif'
      }
    ];
    const randomAnswer = Math.floor(Math.random() * answers.length);

    const embed = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle(`${answers[randomAnswer].answer}`)
      .setDescription(`${answers[randomAnswer].description}`)
      .setImage(`${answers[randomAnswer].image}`);

    await message.channel.send(embed);
  } catch (error) {
    console.error(error);
  }
};

export const info = {
  name: '8ball',
  aliases: ['question', 'pregunta'],
  description: 'Preguntale a Bootype, es muy sabio...'
};
