export const command = {
    name: "ping",
    description: "dont pong me bro",
    exec: async function(interaction) {
        await interaction.reply(`pong!!!`);
    }
}