import logger from "./logger.js";

export async function handle(interaction) {
    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        logger.error(`No matching command found for ${interaction.commandName}. Was it deleted?`)
    }

    try {
        await command.exec(interaction);
    } catch (e) {
        logger.error(`Command execution error: ${e}`);

        if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
    }
}