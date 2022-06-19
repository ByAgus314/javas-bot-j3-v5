const Discord = require('discord.js');

module.exports = {
  name: "epic", 
  alias: ["epic"], 

execute (client, message, args){

    const embed= new Discord.MessageEmbed() 

    .setTitle("epic")
    .setDescription("epic")
    .setFooter("Encontrados: 0/8")
    .setColor("RANDOM")
    
    
    message.channel.send(embed)

 }

} 

