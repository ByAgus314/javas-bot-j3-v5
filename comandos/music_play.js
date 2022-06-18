const Discord = require('discord.js');
const distube = require('distube')

module.exports = {
  name: "play", 
  alias: ["p"], 

execute (client, message, args){

  const cancion = args.join(" ")
  if(!cancion) return message.channel.send("Debes escribir una cancion para escuchar")

  if(!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz")
    


  client.distube.play(message, cancion) 


 }

} 
