const Discord = require('discord.js');

module.exports = {
  name: "help", 
  alias: [], 

execute (client, message, args){

    const embed = new Discord.MessageEmbed()
    .setTitle("Comandos disponibles:")
    .setDescription("Diversion: \n \n Avatar (usuario): ver el avatar de un usuario. \n \n say (mensaje): el bot mande un mensaje a eleccion. \n \n Administracion: \n \n kick (usuario): expulsar a un usuario. \n \n ban (usuario): banear a un usuario. \n \n clear (cantidad): eliminar una cantidad de mensajes. \n \n Informacion: \n \n estado: ver el estado del servidor de Minecraft. \n \n info-bot: ver la informacion del bot. \n \n Musica: \n \n play (cancion): reproducir una cancion. \n \n stop: detener una cancion. \n \n skip: saltar una cancion. \n \n pause: pausar una cancion (AUN NO SE PUEDE REPRODUCIR UNA VEZ PAUSADA).")
    .setFooter(`Solicitado por: ${message.author.tag}`)
    .setColor("GREEN")

    message.channel.send(embed)

 }

} 