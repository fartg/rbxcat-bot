import database from "../../modules/utility/database.js";

export const command = {
    name: "player",
    description: "Returns a players' rbxcat variables (and server info)",
    options: [{
        type: 3, // string
        name: "ocm_key",
        description: "Your OCM short-key",
        required: true,
        },
        {
            type: 3, // string
            name: "player",
            description: "Player name",
            required: true,
        }],
    exec: async function(interaction) {
        
        await interaction.reply("loading");
        
        let player = interaction.options.getString('player', true);
        let ocm_key = interaction.options.getString('ocm_key', true);

        let request = await database.Player(player, ocm_key);

        await interaction.editReply("```"+JSON.stringify(request.data.response, null, 2)+"```");
    }
}