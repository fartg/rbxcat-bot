// imports
import { Collection } from 'discord.js';
import * as fs from 'fs';
import * as path from 'path';

export async function build_commands() {
    let commands_collection = new Collection();

    const commands_dir = path.join(process.cwd(), 'commands');
    const command_types = fs.readdirSync(commands_dir);

    for (const type of command_types) {
        const type_dir = path.join(commands_dir, type);
        const command_files = fs.readdirSync(type_dir).filter(file => file.endsWith('.js'));

        for (const file of command_files) {
            const file_path = path.join(type_dir, file);
            
            await import("file://"+file_path).then((file) => {
                const command = file.command;
                
                commands_collection.set(command.name, command);
            });

        }
    }
    return commands_collection;
}