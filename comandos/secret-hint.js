const Discord = require('discord.js');

module.exports = {
  name: "secret-hint", 
  alias: [], 

execute (client, message, args){

    const embed = new Discord.MessageEmbed()
    .setTitle("Pistas de los comandos secretos:")
    .setDescription("Comando Nº1: es el cantante favorito de epic?#3749.\n Nº2: El Barto \n Nº3 epic?#3749")
    .setFooter("Encontrados: 0/8")
    .setColor("GREEN")

    message.channel.send(embed)

 }

} 