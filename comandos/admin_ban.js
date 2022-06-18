const Discord = require('discord.js');

module.exports = {
  name: "ban", 
  alias: [], 

execute (client, message, args){

var botperms = message.guild.me.hasPermission("BAN_MEMBERS")
if(!botperms) return message.channe.send("No tengo los permisos necesarios")

var perms = message.member.hasPermission("BAN_MEMBERS")
if(!perms) return message.channel.send("No tienes los permisos suficientes")

const usuario = message.mentions.members.first()
if(!usuario) return message.channel.send("Debes mencionar un usuario")
if(usuario.id === message.author.id) return message.channel.send("No puedes banearte a ti mismo")

const razon = args.slice(1).join (' ')
if(!razon) return message.channel.send("Debes escribir una razon")

usuario.ban({ reason: razon })

message.channel.send(`se ha baneado al usuario **${usuario}** correctamente`)

 }

} 