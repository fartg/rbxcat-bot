import { REST, Routes, Collection } from 'discord.js';
import * as cc from './modules/utility/create-commands.js';
import 'dotenv/config' // for local testing, remove in prod

const rest = new REST().setToken(process.env.token);

(async () => {
    let commands = await cc.build_commands();

	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		const data = await rest.put(
			Routes.applicationGuildCommands(process.env.client_id, process.env.guild_id),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();