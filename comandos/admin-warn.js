const mongoose = require('mongoose');
const db = require('../database/models/warns.js')
const Discord = require('discord.js');

module.exports = {
  name: "warn", 
  alias: [], 

execute (client, message, args){

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`No tienes los permisos suficientes`)
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!user) return message.channel.send(`No se encuentra al usuasrio`)
    

    const reason = args.slice(1).join(" ") ? args.slice(1).join(" ") : "No hay motivo" 
    db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
        if(err) throw err;
        if(!data) {
            data = new db({
                guildid: message.guild.id,
                user : user.user.id,
                content : [
                    {
                        moderator : message.author.id,
                        reason : reason 
                    }
                ]
            })
        } else {
            const obj = {
                moderator: message.author.id,
                reason : reason
            }
            data.content.push(obj)
        }
        data.save()
    });

    const embed = new Discord.MessageEmbed()
        .setDescription(`${user} Fue advertido por: *__${reason}__*`)
        .setColor('BLUE')                
    
        message.channel.send(embed)






 }

} 

