const Discord = require('discord.js');

module.exports = {
  name: "epic", 
  alias: ["epic"], 

execute (client, message, args){

    const embed= new Discord.MessageEmbed() 

    .setTitle("epic")
    .setDescription("epic")
    .setFooter("Hay algunos comandos ocultos que dan recompensas dentro del servidor de Minecraft!")
    .setColor("RANDOM")
    
    
    message.channel.send(embed)

 }

} 

