const Discord = require('discord.js');
const chance = require('chance').Chance();

module.exports = {

    name: "hack",
    alias: [],


    execute (client, message, args){

        let dominios = ["outlook.com","gmail.com","hotmail.com", "yahoo.com"]

        let usuario = message.mentions.users.first()
        let autor = message.author

        var correo = dominios[Math.floor(Math.random() * dominios.length)];

        if (!usuario){
            message.delete({ timeout: 5000 })
            message.channel.send(`No te puedes autohackear`).then( m => {
              m.delete({ timeout: 5000 })
            });
            return;
          }
        
          let ip = chance.ip();
          let numero = chance.phone({ country: 'us', mobile: true });


          let contraseña =  chance.word({ length: 8 });
         

          const hackeo = new Discord.MessageEmbed()
          .setDescription(`${autor} a hackeado a ${usuario}`)
          .addField("Ip: ",ip)
          .addField("Numero: ",numero)
          .addField("Correo: ",correo)  
          .addField("Contraseña: ",contraseña)
          .setImage(usuario.displayAvatarURL({ size: 2048 }))
          .setColor(`RED`)
          .setFooter("Hay algunos comandos ocultos que dan recompensas dentro del servidor de Minecraft!")
          message.channel.send(hackeo);

          
  
  }
    
    }
