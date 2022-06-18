const Discord = require('discord.js');

module.exports = {
  name: "secret-help", 
  alias: ["sh"], 

execute (client, message, args){

    const embed= new Discord.MessageEmbed() 

    .setTitle("prueba")
    .setDescription("prueba2")
    .setColor("RANDOM")
    .setImage(`https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/250px-Adobe_XD_CC_icon.svg.png`)
    .setAuthor("prueba4")
    .setTimestamp("prueba5")
    .setURL(`https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/250px-Adobe_XD_CC_icon.svg.png`)
    
    message.channel.send(embed)

 }

} 

