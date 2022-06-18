const Discord = require('discord.js');
const distube = require('distube')

module.exports = {
  name: "playp", 
  alias: ["pyp"], 

execute (client, message, args){

    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.channel.send('¡Debes estar en un canal de voz!')
    
    const permissions = voiceChannel.permissionsFor(message.client.user)
    if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
    return message.channel.send('¡No tengo permisos para conectarme o hablar en el canal de voz!')
    }
    
    
    if(client.voice.connections.get(message.guild.id) && message.member.voice.channel && message.member.voice.channel.id !== client.voice.connections.get(message.guild.id).channel.id) { 
    return message.channel.send('Debes estar en el mismo canal de voz que estoy yo :rage:.')
    }
    
   
    


     client.distube.resume(message)

 }

} 
