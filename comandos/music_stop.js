const Discord = require('discord.js');

module.exports = {
  name: "stop", 
  alias: [], 

execute (client, message, args){
    if(!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz")

    client.distube.stop(message)   
    message.channel.send("**Cancion eliminada**")
    

 }

} 

