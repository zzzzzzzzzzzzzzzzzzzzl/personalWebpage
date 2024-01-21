const token =
  'MTExMjA4ODEwOTgwNzU2Njg3OA.GR3DdS.3tYfnmgPTJSWTSfl9CNFDtReAZYkdbAHsZ8IqY'
const { Client, GatewayIntentBits } = require('discord.js')

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
})
client.on('ready', () => {
  console.log("I'm in")
  console.log(client.user.username)
})

client.on('messageCreate', (msg) => {
  if (msg.author.id != client.user.id) {
    msg.channel.send('jere')
  }
})

client.login(token)
