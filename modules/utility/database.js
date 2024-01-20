import axios from 'axios';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const config = require('./config.json');

const database = {};

database.Server = async function(server_id, ocm_key) {
    let request_link = config.webserver + "/database/server/" + server_id;

    return await axios({
        url: request_link,
        headers: {"authorization": config.auth_header},
        method: "get",
        data: {"rbx_ocm_apikey": ocm_key}
    });
}

database.Player = async function(player, ocm_key) {
    let request_link = config.webserver + "/database/player/" + player;

    return await axios({
        url: request_link,
        headers: {"authorization": config.auth_header},
        method: "get",
        data: {"rbx_ocm_apikey": ocm_key}
    });
}

export default database;