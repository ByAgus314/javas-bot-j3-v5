const mongoose = require('mongoose');
const db = require('../database/models/warns.js')
const Discord = require('discord.js');


module.exports = {
  name: "warns", 
  alias: [], 

execute (client, message, args){

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('No tienes los permisos suficientes')
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!user) return message.channel.send('Usuario no encontrado')
    const reason = args.slice(1).join(" ")
    db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
        if(err) throw err;
        if(data) {
            const embed = new Discord.MessageEmbed()
                .setTitle(`${user.user.tag}'s warns`)
                .setDescription(
                    data.content.map(
                        (w, i) => 
                        `\`${i + 1}\` | Moderator : ${message.guild.members.cache.get(w.moderator).user.tag}\nReason : ${w.reason}`
                    )
                )
                .setColor("BLUE")
            
                message.channel.send(embed)

        } else {
            message.channel.send('User has no data')
        }

    })

 }

} 
