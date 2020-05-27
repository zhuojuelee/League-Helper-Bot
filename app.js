import config from './config.js'
import discordConfig from './discord/config.js'
import fs from 'fs'
import { Client, Collection } from 'discord.js'

// Instantiate Discord client
const client = new Client();

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

// const commandFiles = fs.readdirSync('./discord/commands').filter(file => file.endsWith('.js'));
// for (const file of commandFiles) {
//     const command = `./discord/commands/${file}`)
//     client.commands.set(command.name, command)
// }

client.on('message', (message) => {
    // Make sure that non command messages and bot messages are not processed
    if (!message.content.startsWith(discordConfig.commandPrefix) || message.author.bot) return

    console.log(`Received Message: ${message}`)
    message.reply('Test Reply')
    try {
        if (message.content.startsWith(discordConfig.commandPrefix)) {
        }
    } catch(error) {
        console.error(error)
        message.reply('Invalid command, use !help to see list of available commands.')
    }
})

client.login(config.DISCORD_TOKEN)