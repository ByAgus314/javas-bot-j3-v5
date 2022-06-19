const mongoose = require('mongoose');
const db = require('../database/models/warns.js')
const Discord = require('discord.js');

module.exports = {
    name : 'clear-warns',
    alias: ["cw"], 

execute (client, message, args){

if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('No tienes los permisos suficientes')
const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(!user) return message.channel.send('Usuario no encontrado')
db.findOne({ guildid : message.guild.id, user: user.user.id}, async(err,data) => {
    if(err) throw err;
    if(data) {
        await db.findOneAndDelete({ user : user.user.id, guildid: message.guild.id})
        message.channel.send(`Borrados ${user.user.tag}'s warns`)
    } else {
        message.channel.send('Este usuario no tiene ningun warn')
    }
})

    }

}