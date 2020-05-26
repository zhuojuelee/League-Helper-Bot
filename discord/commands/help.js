import fs from 'fs'

const files = fs.readdirSync('./')

// Lists all the availabe commands
export default {
    name: 'help',
    description: 'List all the available commands',
    execute(message, args=null) {
        message.channel.send(files)       
    }
}