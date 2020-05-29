const ping = {
    name: 'ping',
    description: 'pong',
    execute(message, args) {
        message.channel.send("Pong")
    }
}

export { ping }