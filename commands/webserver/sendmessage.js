import { createRequire } from 'node:module';
import axios, { Axios } from 'axios';
const require = createRequire(import.meta.url);

const config = require('./config.json');

export const command = {
    name: "sendmessage",
    description: "wow wow you want to send a message to a server WOAH",
    options: [{
        type: 3, // string
        name: "server_id",
        description: "the server id",
        required: true,
    },
    {
        type: 3, // string
        name: "message",
        description: "message to send",
        required: true,
    },
    {
        type: 3, // string
        name: "type",
        description: "message type",
        choices: [{name: "system", value: "system"},
        {name: "info", value: "info"}],
        required: true,
    }],
    exec: async function(interaction) {
        let request_link = config.webserver + "/serveto/?server=" + interaction.options.getString('server_id', true);

        let json_build = {
            "rbx_ocm_apikey": config.rbx_ocm_apikey,
            "body": {
                "event": "message",
                "arguments": {
                    "message": interaction.options.getString('message', true),
                    "type": interaction.options.getString('type', true)
                }
            }
        };

        let request = await axios({
            url: request_link,
            headers: {"authorization": config.auth_header},
            method: "post",
            data: json_build,
        });

        await interaction.reply("```"+JSON.stringify(request.data.response)+"```");
    }
}