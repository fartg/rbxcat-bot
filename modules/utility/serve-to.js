import axios from 'axios';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const config = require('./config.json');

export default async function serveTo(server_id, data) {
    let request_link = config.webserver + "/serveto/?server=" + server_id

    return await axios({
        url: request_link,
        headers: {"authorization": config.auth_header},
        method: "post",
        data: data
    });
}