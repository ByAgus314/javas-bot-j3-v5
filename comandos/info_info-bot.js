const Discord = require('discord.js');
const moment = require('moment');
require('moment-duration-format');

module.exports = {
  name: "info-bot", 
  alias: ["ib"], 

execute (client, message, args){


  
  const actividad = moment.duration(client.uptime).format(' D [dias], H [hrs], m [mins], s [secs]');
  
  const embed = new Discord.MessageEmbed()
    .setColor(0x66ff66)
    .setTitle("Informacion del bot")
    .setAuthor(`Información del bot`, client.user.displayAvatarURL({ size: 1024, dynamic: true}))
    .addField(`Dueño`, `epic?#3749`, true)
    .addField(`Version`, `5.6.2`, true)
    .addField(`Libreria`, Discord.version, true)
    .addField(`Memoria`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
    .addField(`Uptime`, `${actividad}`, true)
    .addField(`Servidores`, `${client.guilds.cache.size}`, true)
    .addField(`Usuarios`, `${client.users.cache.size}`, true)
    .addField(`Canales`, `${client.channels.cache.size}`, true);
  
    message.channel.send(embed)

 }

} 

