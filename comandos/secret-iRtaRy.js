const Discord = require('discord.js');

module.exports = {
  name: "iRtaRyZ", 
  alias: [" iRtaRyZ"], 

execute (client, message, args){

    const embed= new Discord.MessageEmbed() 

    .setTitle("iRtaRyZ")
    .setDescription("Saga de servidores de Minecraft")
    .setFooter("Hay algunos comandos ocultos que dan recompensas dentro del servidor de Minecraft!")
    .setColor("RANDOM")
    
    
    message.channel.send(embed)

 }

} 
