const Discord = require('discord.js');

module.exports = {
  name: "clear", 
  alias: ["purge"], 

execute (client, message, args){

  const botperms = message.guild.me.hasPermission("MANAGE_MESSAGES")
  if (!botperms) return message.channel.send("No tengo los permisos necesarios!")

  var perms = message.member.hasPermission("MANAGE_MESSAGES")
  if(!perms) return message.channel.send("No tienes los permisos necesarios!")

  const valor = parseInt(args[0]);
  if (!valor) return message.channel.send("Debes escribir una cantidad de mensajes para borrar")
  if(valor >= 100) return message.channel.send("No puedo eliminar mas de 99 mensajes al vez")

  message.channel.bulkDelete(valor + 1 );
  message.channel.send(` Se han eliminado **${valor}** mensajes correcmante `)
  
 }

} 