import { config } from 'dotenv';
import { Client } from 'discord.js';
import * as path from 'path';
import * as fs from 'fs';

const client: Client = new Client();
// eslint-disable-next-line import/prefer-default-export
export const Commands: any[] = [];
config();
const prefix = process.env.PREFIX;

// command handler
const root: string = path.resolve('./src/commands');
const paths: string[] = fs.readdirSync(root);

if (paths.length) {
  for (const pathF of paths) {
    const pathRute: string = path.resolve(root, pathF);

    const pathInfo: fs.Stats = fs.statSync(pathRute);
    if (pathInfo.isDirectory()) {
      const files: string[] = fs.readdirSync(pathRute);
      if (files.length) {
        for (const file of files) {
          if (!file.endsWith('.ts')) {
            continue;
          }
          // eslint-disable-next-line node/no-path-concat
          const CommandFunction = require(`${__dirname}/commands/${pathF}/${file}`);
          if (CommandFunction) {
            Commands.push(CommandFunction);
          }
        }
      }
    }
  }
}

client.on('ready', async () => {
  await client.user!.setActivity(`${prefix}info | Developement me`, {
    type: 'PLAYING'
  });
  console.log('OK the bot is ready :)');
});

client.on('message', async (message) => {
  if (!message.guild || message.author.bot) {
    return;
  }
  if (!message.content.startsWith(prefix as string)) {
    return;
  }

  const args = message.content.slice(prefix?.length).trim().split(/ +/g);
  const command = args.shift()!.toLowerCase();

  if (Commands.length) {
    for await (const cmd of Commands) {
      // console.log(cmd)
      if (
        cmd.info.aliases.includes(command) ||
                cmd.info.name.toLowerCase() === command
      ) {
        await cmd.default(client, message, args);
      }
    }
  }
});

client.login(process.env.TOKEN_DISCORD);
