import { Client, Collection, GatewayIntentBits, Events } from 'discord.js';

import {build_commands} from "./modules/utility/create-commands.js"
import {handle} from "./modules/utility/command-handler.js"

import 'dotenv/config' // for local testing, remove in prod
import logger from './modules/misc/logger.js';

const bot = new Client({ intents: [GatewayIntentBits.Guilds] });
bot.commands = await build_commands();

bot.on('ready', ready_client => {
    logger.success(`[Client] [${ready_client.user.username}] Ready `);
});

bot.on(Events.InteractionCreate, interaction => {
    if (!interaction.isChatInputCommand()) return;
    handle(interaction);
});

bot.login(process.env.token);