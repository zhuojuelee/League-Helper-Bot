# LeagueBot

Welcome, this is a for fun bot.

## Environment Setup Instructions
- First, make sure you have [node.js](https://nodejs.org/en/) downloaded
- We need a way to manage Node versions, so download `NVM` from [here](https://github.com/nvm-sh/nvm)
- Then, make sure you are using Node 13 or greater with `nvm use 13`, you can check with `node -v`

## Bot Setup
Installs dependencies with the following command
```bash
yarn --frozen-lockfile
```
#### Token Setup
Get your [Discord access token](https://discord.com/developers) and create a file called `config.js` in the root folder. This is where your access token will go.

Setup `config.js` in the following manner:
```js
const config = {
    "DISCORD_TOKEN": "YOUR_DISCORD_TOKEN",
    "RIOT_API_KEY": "YOUR_RIOT_API_KEY"
}

export default config
```

Do NOT commit your token and API key into Git

## Running the Bot
- First create your own server in Discord
- Ask repo owner for client ID and add the bot to your server by following the instructions [here](  https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links)

In the root directory, run the bot with the following command:
```bash
yarn start
```
If successful, you should see an output similar to this:
```bash
yarn run v1.13.0
$ node app.js
Bot is running :)
```

## Development Guide
#### Linting
Run the following command to lint the entire project:
```bash
yarn lint:all
```
Run the following command to lint a specific file
```bash
yarn lint <pathToFile>
```
#### Getting Started
Familiarize yourself with this [Get Started Doc](https://discordjs.guide/creating-your-bot/)

Discord.js API Docs can be found [here](https://discord.js.org/#/docs/main/stable/general/welcome)

Happy Programming :)
