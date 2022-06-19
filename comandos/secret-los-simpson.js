const Discord = require('discord.js');

module.exports = {
  name: "los-simpson", 
  alias: [], 

execute (client, message, args){

    const embed = new Discord.MessageEmbed()
    .setTitle("QUE RICA ES MAGGIE")
    .setDescription("Los simpsonnn, los simpson musica* ~~~~~ bart atropella a un viejo con cancer caLvo*")
    .setFooter("Encontrados: 0/8")
    .setColor("GREEN")

    message.channel.send(embed)

 }

} 