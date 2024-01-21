import { join } from 'node:path'
import express from 'express'

const server = express()

server.use(express.static(join(__dirname, 'public')))

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'))
})

require('dotenv').config()

// Discord.js versions ^13.0 require us to explicitly define client intents
const { Client, Intents } = require('discord.js')
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

// Log In our bot
client.login(process.env.CLIENT_TOKEN)

export default server
