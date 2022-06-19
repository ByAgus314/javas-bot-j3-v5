const Discord = require('discord.js');

module.exports = {
  name: "sexo", 
  alias: ["gemido*"], 

execute (client, message, args){

  const embed = new Discord.MessageEmbed()
  .setTitle("SEXO?")
  .setDescription("sexo? donde?")
  .setFooter("Hay algunos comandos ocultos que dan recompensas dentro del servidor de Minecraft!")
  .setColor("GREEN")

  message.channel.send(embed)

 }

} 