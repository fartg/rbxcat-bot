import serveTo from '../../modules/utility/serve-to.js';

export const command = {
    name: "message",
    description: "Sends a message to a servers chat as [\"SYSTEM\"]",
    options: [
        {
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
            name: "message",
            description: "Message",
            required: true,
        }
    ],
    exec: async function(interaction) {

        await interaction.reply("loading");

        let message = interaction.options.getString('message', true);
        let server_id = interaction.options.getString('server_id', true);
        let data = {
            "rbx_ocm_apikey": interaction.options.getString('ocm_key', true),
            "body": {
                "event": "message",
                "arguments": {
                    "message": message,
                    "type": "system"
                }
            }
        };

        let request = await serveTo(server_id, data);

        await interaction.editReply("```"+JSON.stringify(request.data.response, null, 2)+"```");
    }
}