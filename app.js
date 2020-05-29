import config from './config.base.js'
import discordConfig from './discord/config.js'
import fs from 'fs'
import { Client, Collection } from 'discord.js'
import path from 'path'

// Instantiate Discord client
const client = new Client();

// Useful vars
const prefix = discordConfig.commandPrefix

// Bot startup indicator
client.once('ready', () => {
    console.log('Bot is running :)')
})

/**
 * === Command Handling ===
 * To handle commands dynamically, we need to get all the available commands in /discord/commands
 * and map the message command to the correct command file
 */

 // Create a new command property that holds a collection of commands
client.commands = new Collection()

// Get all the commands available
const commandFiles = fs.readdirSync('./discord/commands').filter(file => file.endsWith('.js'));

// Mapping commands to their module
for (const file of commandFiles) {
    const commandName = path.parse(file).name
    import(`./discord/commands/${file}`).then(moduleObj => {
        const command = moduleObj[commandName]
        client.commands.set(command.name, command)
    })
}

client.on('message', (message) => {
    // Return if non command messages and bot messages are sent
    if (!message.content.startsWith(prefix) || message.author.bot) return

    // Get the message args and command
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    console.log(`Received command: ${command}`)
    console.log(`Received the following command arugments: ${args}`)

    // Return if the command does not exist
    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args)
    } catch(error) {
        console.error(error)
        message.reply('Invalid command, use !help to see list of available commands.')
    }
})

// Login to discord
client.login(config.DISCORD_TOKEN)