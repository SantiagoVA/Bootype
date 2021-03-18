import { config } from 'dotenv';
config();
import Discord, { Client } from 'discord.js';
import { prefix } from './config.json'
import * as path from 'path';
import * as fs from 'fs';

const client: Client = new Client();
export const Commands: any[] = []

const root: string = path.resolve(`./src/commands`);
console.log(root)
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
  await client.user!.setActivity('-info | Developement me', {
    type: "PLAYING"
  })
  console.log('OK the bot is ready :)')
});

client.on('message', async (message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  let command = args.shift()!.toLowerCase();

  if(Commands.length) {
    for await (const cmd of Commands) {
      //console.log(cmd)
      if(cmd.info.aliases.includes(command) || cmd.info.name.toLowerCase() === command) {
        await cmd.default(client, message, args)
      }
    }
  } else {
    console.log("No hay comandos")
  }

});

client.login(process.env.TOKEN_DISCORD);