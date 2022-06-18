const Discord = require('discord.js');

module.exports = {
  name: "leave", 
  alias: [], 

execute (client, message, args){
    if(!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz")

    client.distube.skip(message) 
     message.channel.leave("**Cancion saltada**")

 }

} 

