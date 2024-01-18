import { createRequire } from 'node:module';
import axios, { Axios } from 'axios';
const require = createRequire(import.meta.url);

const config = require('./config.json');

export const command = {
    name: "findplayer",
    description: "oh so Now you want to stalk him huh",
    options: [{
        type: 3, // string
        name: "rbx_ocm_apikey",
        description: "your short alias rbx_ocm_apikey",
        required: true,
        },
        {
            type: 3, // string
            name: "player",
            description: "player to find",
            required: true,
        }],
    exec: async function(interaction) {
        let request_link = config.webserver + "/database/player/" + interaction.options.getString('player', true);
        console.log(request_link);

        await interaction.reply("loading");

        let request = await axios({
            url: request_link,
            headers: {"authorization": config.auth_header},
            method: "post",
            data: {"rbx_ocm_apikey": interaction.options.getString('rbx_ocm_apikey', true)}
        });

        await interaction.editReply("```"+JSON.stringify(request.data.response)+"```");
    }
}