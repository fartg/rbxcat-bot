import serveTo from '../../modules/utility/serve-to.js';

export const command = {
    name: "kick",
    description: "Kicks the player from a server (with a message)",
    options: [{
        type: 3, // string
        name: "ocm_key",
        description: "Your OCM short-key",
        required: true,
        },
        {
            type: 3, // string
            name: "server_id",
            description: "Server ID",
            required: true,
        },
        {
            type: 3, // string
            name: "player",
            description: "Player",
            required: true,
        },
        {
            type: 3, // string
            name: "message",
            description: "Kick message",
        }],
    exec: async function(interaction) {
        
        await interaction.reply("loading");

        let message = interaction.options.getString('message');
        let server_id = interaction.options.getString('server_id', true);
        let data = {
            "rbx_ocm_apikey": interaction.options.getString('ocm_key', true),
            "body": {
                "event": "kick",
                "arguments": {
                    "player": interaction.options.getString('player', true),
                    "message": message
                }
            }
        }

        let request = await serveTo(server_id, data);

        await interaction.editReply("```"+JSON.stringify(request.data.response, null, 2)+"```");
    }
}