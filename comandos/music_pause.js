const Discord = require('discord.js');

module.exports = {
  name: "pause", 
  alias: [], 

execute (client, message, args){
    if(!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz")

    client.distube.pause(message)   
    message.channel.send("**Cancion pausada**")
    

 }

} 