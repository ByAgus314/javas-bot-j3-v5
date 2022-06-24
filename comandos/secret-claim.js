const Discord = require('discord.js');

module.exports = {
  name: "secret-claim", 
  alias: [], 

execute (client, message, args){

    const embed= new Discord.MessageEmbed() 

    .setTitle("Reclamar recompensa:")
    .setDescription("a")
    .setFooter("a")
    .setColor("RANDOM")
    
    
    message.channel.send(embed)

 }

} 

