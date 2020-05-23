import config from './config.js'
import { Client } from 'discord.js'

const client = new Client();

client.once('ready', () => {
    console.log('Bot is running :)')
})

client.login(config.DISCORD_TOKEN)