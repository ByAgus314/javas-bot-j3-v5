const Discord = require('discord.js');

module.exports = {
  name: "secret-help", 
  alias: ["sh"], 

execute (client, message, args){

    const embed= new Discord.MessageEmbed() 

    .setTitle("informacion sobre::")
    .setDescription("Hay algunos comandos secretos de Java's BOT, son 8 comandos; cada uno da una recompensa exclusiva dentro del servidor de Minecraft. \n \n \n \n \n \n \n \n 0/8 COMANDOS DESCUBIERTOS")
    .setColor("RANDOM")
    
    
    message.channel.send(embed)

 }

} 

