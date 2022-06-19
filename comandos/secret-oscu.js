const Discord = require('discord.js');

module.exports = {
  name: "oscu", 
  alias: ["oscu"], 

execute (client, message, args){

    const embed = new Discord.MessageEmbed()
    .setTitle("Viva oscu")
    .setDescription("Hace cuanto no te veo \n Te extrañaba pero bueno \n Diez 14 de Febrero cada año alguien nuevo \n Y aunque sé que el tiempo pasó\n Y lo nuestro término te veo\n Y vuelven los recuerdos\n Y me parece que al final terminamos todo mal\n Tal vez no era nuestro momento\n Si empezamos de nuevo\n Y avivamos el fuego\n Si es por vos me puedo quema\n Desde abajo te veo todo juegan tu juego\n Hoy voy a llegar al final\n Dicen que tienes los papeles de la disco\n Y quiero ver si vas a dejarme entrar\n En el pasado me mareaba con tu ritmo\nQuizás ahora te guste un poco más\n Quizás ahora te guste un poco más\n Quizás ahora te guste un poco más\n Justo te pienso y te encuentro diferente mucho más sincero\n Quizás hoy voy a salir, puedo invitarte a dormir\n Nos olvidamos el mundo entero\n Y si empezamos de nuevo\n Y avivamos el fuego\n Si es por vos me puedo quema-a-ar\n Yo también lo deseo quiero tocar el cielo\n Nadie va a podernos parar\n Dicen que tienes los papeles de la disco\n Y quiero ver si vas a dejarme entrar\n En el pasado me mareaba con tu ritmo\n Quizás ahora te guste un poco más\n Dicen que tienes los papeles de la disco\n Es que tengo ganas de salir a bailar\n En el pasado me mareaba con tu ritmo \n Quizás ahora te guste un poco más \n Quizás ahora te guste un poco má\n Hace cuanto no te veo\n Te extrañaba pero bueno")
    .setFooter("Encontrados: 0/8")
    .setColor("GREEN")

    message.channel.send(embed)

 }

} 