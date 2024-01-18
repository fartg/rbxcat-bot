import { createRequire } from 'node:module';
import axios, { Axios } from 'axios';
const require = createRequire(import.meta.url);

const config = require('./config.json');

export const command = {
    name: "server",
    description: "OK FINE take the server information",
    options: [{
        type: 3, // string
        name: "rbx_ocm_apikey",
        description: "your short alias rbx_ocm_apikey",
        required: true,
        },
        {
            type: 3, // string
            name: "server",
            description: "server id or \"all\"",
            required: true,
        }],
    exec: async function(interaction) {
        let request_link = config.webserver + "/database/server/" + interaction.options.getString('server', true);
        
        await interaction.reply("loading");

        let request = await axios({
            url: request_link,
            headers: {"authorization": config.auth_header},
            method: "get",
            data: {"rbx_ocm_apikey": interaction.options.getString('rbx_ocm_apikey', true)}
        });

        await interaction.editReply("```"+JSON.stringify(request.data.response)+"```");
    }
}