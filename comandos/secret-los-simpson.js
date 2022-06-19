const Discord = require('discord.js');

module.exports = {
  name: "Los-simpson", 
  alias: [], 

execute (client, message, args){

    const embed = new Discord.MessageEmbed()
    .setTitle("QUE RICA ES MAGGIE")
    .setDescription("Los simpsonnn, los simpson musica* ~~~~~ bart atropella a un viejo con cancer caLvo*")
    .setFooter("Hay algunos comandos ocultos que dan recompensas dentro del servidor de Minecraft!")
    .setColor("GREEN")

    message.channel.send(embed)

 }

} 