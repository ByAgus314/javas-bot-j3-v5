const Discord = require('discord.js');

module.exports = {
  name: "help", 
  alias: [], 

execute (client, message, args){

    const embed = new Discord.MessageEmbed()
    .setTitle("Comandos disponibles:")
    .setDescription("Diversion: \n \n 8ball (pregunta): hacerle una pregunta al bot. \n \n stone-paper-scissors (piedra-papel o tijera): jugar piedra, papel o tijera con el bot. \n \n Avatar (usuario): ver el avatar de un usuario. \n \n say (mensaje): el bot mande un mensaje a eleccion. \n \n Administracion: \n \n warn (usuario): advertir a un usuario. \n \n remove-warn (usuario) (numero de warn): remover una advertencia. \n \n warns (usuario): ver los warns que tiene un usuario. \n \n clear-warns (usuario): borrar el historial de warns de un usuario. \n \n kick (usuario): expulsar a un usuario. \n \n ban (usuario): banear a un usuario. \n \n clear (cantidad): eliminar una cantidad de mensajes. \n \n Informacion: \n \n info-bot: ver la informacion del bot. \n \n estado: ver el estado del servidor de Minecraft. \n \n info-bot: ver la informacion del bot. \n \n Musica: \n \n play (cancion): reproducir una cancion. \n \n stop: detener una cancion. \n \n skip: saltar una cancion. \n \n pause: pausar una cancion. \n \n playp: resumir la cancion pausada \n \n TICKET: \n \n ticket: abrir un ticket de ayuda ")
    .setFooter("Hay algunos comandos ocultos que dan recompensas dentro del servidor de Minecraft!")
    .setColor("GREEN")

    message.channel.send(embed)

 }

} 