import config from './config.js'
import Discord from 'discord.js'

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Bot is running :)')
})

client.login(config.token)