const Discord = require('discord.js');

module.exports = {
  name: "gato", 
  alias: [], 

execute (client, message, args){

    const embed = new Discord.MessageEmbed()
    .setTitle("Gato👌")
    .setDescription("Gato👌")
    .setFooter("Hay algunos comandos ocultos que dan recompensas dentro del servidor de Minecraft!")
    .setColor("GREEN")

    message.channel.send(embed)

 }

} 