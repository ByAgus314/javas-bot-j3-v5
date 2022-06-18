const Discord = require('discord.js');

module.exports = {
  name: "8ball", 
  alias: ["8b"], 

execute (client, message, args){

    let rpts = ["Sí", "No", "Tal vez", "No sé", "¡Claro!"]

if (!args[0]) return message.reply('Escriba una pregunta.')
message.channel.send(`${message.author}, a su pregunta **__${args.join(' ')}__** mi respuesta es: ${rpts[Math.floor(Math.random() * rpts.length)]}`);

 }

} 
