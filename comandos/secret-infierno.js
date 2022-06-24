const Discord = require('discord.js');

module.exports = {
  name: "infierno", 
  alias: [], 

execute (client, message, args){

    const embed= new Discord.MessageEmbed() 

    .setDescription("El infierno te espera..")
    .setFooter("Hay algunos comandos ocultos que dan recompensas dentro del servidor de Minecraft!")
    .setColor("RED")
    
    
    message.channel.send(embed)

 }

} 
