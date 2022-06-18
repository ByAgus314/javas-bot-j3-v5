const Discord = require('discord.js');

module.exports = {
  name: "kick", 
  alias: [], 

execute (client, message, args){

  var botperms = message.guild.me.hasPermission("KICK_MEMBERS")
  if (!botperms) return message.channel.send("No tengo los permisos necesarios")

  var perms = message.member.hasPermission("KICK_MEMBERS")
  if(!perms) return messages.channel.send("No tienes los permisos necesarios")

 const usuario = message.mentions.members.first()
if(!usuario) return message.channel.send("Debes mencionar a un usuario")
 const razon = ars.slice(1).join(' ')
 if(!razon) return message.channel.send("Debes escribir una razon")

 message.guild.member(usuario).kick(razon);

 message.channel.send(`Se ha expulsado a ${usuario} corretamente.\Razon: ${razon} `)

 }

}