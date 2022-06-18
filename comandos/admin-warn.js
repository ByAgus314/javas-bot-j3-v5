const mongoose = require('mongoose');
const db = require('../database/models/warns.js')
const Discord = require('discord.js');

module.exports = {
  name: "warn", 
  alias: [], 

execute (client, message, args){

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`no hay permisoss`)
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!user) return message.channel.send(`Y el usuario?`)
    

    const reason = args.slice(1).join(" ") ? args.slice(1).join(" ") : "No hay motivo" 
    db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
        if(err) throw err;
        if(!data) {
            data = new db({
                guildid: message.guild.id,
                user : user.user.id,
                content : [
                    {
                        moderator : message.author.id,//guerdamos en responsable
                        reason : reason //la razon 
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
        data.save() // lo guardamos
    });

    const embed = new Discord.MessageEmbed()
        .setDescription(`${user} Fue advertido por: *__${reason}__*`)
        .setColor('BLUE')                
    
        message.channel.send(embed)






 }

} 

