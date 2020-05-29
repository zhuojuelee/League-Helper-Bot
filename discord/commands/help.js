import fs from 'fs'
import path from 'path'

const files = fs.readdirSync('./discord/commands').map(file => path.parse(file).name)

// Lists all the availabe commands
const help = {
    name: 'help',
    description: 'List all the available commands',
    execute(message, args=null) {
        message.channel.send(files)       
    }
}

export { help }