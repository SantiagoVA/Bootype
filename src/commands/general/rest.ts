import { Client, Message, MessageEmbed } from 'discord.js';
import axios from 'axios';
import * as path from 'path';

export default async (client: Client, message: Message, args: string[]) => {
    try {
        const ReqMethod: any = args[0];
        const ReqUrl = args[1];
        const ReqData = args
            .slice(2)
            .join('```')
            .replace('json', '')
            .replace(/```/g, '');

        if (
            !ReqMethod ||
            !['post', 'get', 'put', 'delete'].includes(ReqMethod.toLowerCase())
        ) {
            return await message.channel.send(
                'Provide the petition method(POST, GET, PUT, DELETE).'
            );
        } else if (!ReqUrl) {
            return await message.channel.send('Provide the URL of the API.');
        } else if (!ReqData) {
            await message.channel.send('The data to send were not provided.');
        } else if (
            !args[2].startsWith('```') ||
            !args[args.length - 1].endsWith('```')
        ) {
            return await message.channel.send(
                'The data provided are not correct, please use tripe cuote (`) at the beginning and at the end, with JSON format.',
                {
                    files: [
                        path.join(__dirname, '../../img/error/bad_data.png')
                    ]
                }
            );
        }

        try {
            JSON.parse(ReqData);
        } catch (error) {
            console.error(error);
            return await message.channel.send(String(new Error(error)));
        }
        const response = await axios({
            method: ReqMethod,
            url: ReqUrl,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            data: ReqData ? JSON.parse(ReqData) : null
        });
        if (typeof response.data !== typeof []) {
            return await message.channel.send(
                'The server did not returned a JSON response.'
            );
        }

        const embedRest = new MessageEmbed()
            .setTitle('Response')
            .setColor('RANDOM')
            .setDescription('```' + JSON.stringify(response.data) + '\r\n``` ')
            .addField('Status: ', response.status)
            .addField('Status Text: ', response.statusText);
        await message.channel.send(embedRest);
    } catch (error) {
        console.error(error);
    }
};

export const info = {
    name: 'rest',
    aliases: ['rest'],
    description: 'Client rest API'
};
