const Discord = require('discord.js');

module.exports = {
  name: "say", 
  alias: ["s"], 

execute (client, message, args){


const texto = args.join(` `)

message.channel.send(texto)

 }

} 