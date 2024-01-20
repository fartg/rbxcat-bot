import database from "../../modules/utility/database.js";

export const command = {
    name: "server",
    description: "Returns server information from your rbxcat-server instance",
    options: [{
        type: 3, // string
        name: "ocm_key",
        description: "Your OCM short-key",
        required: true,
        },
        {
            type: 3, // string
            name: "server",
            description: "Server ID or \"all\"",
            required: true,
        }],
    exec: async function(interaction) {        
        await interaction.reply("loading");
        
        let server_id = interaction.options.getString('server', true);
        let ocm_key = interaction.options.getString('ocm_key', true);

        let request = await database.Server(server_id, ocm_key);

        await interaction.editReply("```"+JSON.stringify(request.data.response)+"```");
    }
}