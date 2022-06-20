const Discord = require('discord.js');
const ms = require("ms");

module.exports = {
  name: "timer", 
  alias: [], 

execute (client, message, args){


    let tiempo = args[0]; //declaramos que tiempo sera el primer argumento
    if(!tiempo) return message.channel.send("�Error de uso! Los argumentos deben ir as�:\n `tiempo` `canal` `nota` (el canal es opcional)") //si no se introduce el primer argumento entonces retorna un mensaje
 
    let tiempoMS = ms(tiempo) //convertimos el primer argumento en ms para que los usuarios no puedan ponerlo mal, por ejemplo: /temp asdasdad. Sino que pongan una cantidad en ms
    if(!tiempoMS) return message.channel.send("Define el tiempo en ms, no se permiten simbolos.")
  if (args.length < 2) return message.channel.send("Te falt� algo... `Canal` o `nota`"); //hacemos que si los args son menor que 2 entonces retorne, esto es opcional si solo pondran tiempo y no un recordatorio o canal
  //Si ustedes no van a ocupar canales para el comando, entonces omitan esta parte
  let match = args[1].match(/<#(\d{17,19})>/); //con esto obtenemos la id del canal mencionado como segundo argumento
  let canal = message.guild.channels.resolve((match || []).pop()); //si el canal existe, entonces sera el segundo argumento, de lo contrario no estaremos mencionando el canal 
   if (!canal) { //si no mencionaron un canal entonces pasaremos de tercer argumento hacia segundo argumento a <recordatorio>, ademas de que el bot le mandara el mensaje al DM cuanto el tiempo termine
       let recordatorio = args.slice(1).join(" "); //aca declaramos <recordatorio> como segundo argumento (ya que no hay canal)
       if (!recordatorio) return message.channel.send("Debes poner un recordatorio.") //esto devolvera si no pusieron el recordatorio 
       const exitosoDM = new Discord.MessageEmbed()//creamos embed para que nos verifique que todo esta listo y el temporizador inicio
        .setDescription("�El temporizador inici�!")
        .addField("Recordatorio", recordatorio)
        .setColor("GREEN")
        message.channel.send(exitosoDM);//lo mandamos al canal donde se ejecut� el comando como se�al de que ya esta todo listo
       setTimeout(function(){ //hacemos un temporizador con la ayuda de setTimeout()
           const tempDM = new Discord.MessageEmbed() //creamos el embed que nos mandara cuando el tiempo haya acabado
            .setDescription("�El temporizador termin�!")
            .addField("Recordatorio:", recordatorio)
            .setColor("BLUE")
           message.author.send(tempDM).catch((err) => message.channel.send(message.author, alarmaDM)) //ponemos .catch para que mande el mensaje a el canal donde se ejecut� el comando + mencion. (El .catch para evitar que nos d� un error en consola diciendo que no se puede mandar mensajes a el message.author)
       }, ms(tiempo))//hacemos que esto se haga para cuando termino el tiempo definido como primer argumento
   }else{ //de lo contrario, s� si mencionaron canal entonces:
       if (!canal.permissionsFor(message.author).has("SEND_MESSAGES")) return message.channel.send("No tienes permiso de hablar en el canal mencionado") //esto se enviara s� el message.author intent� poner el temporizador en un canal en el cual no tiene permiso de enviar mensajes.
       let recordatorio = args.slice(2).join(" "); //como hay canal entonces <recordatorio> pasar� a ser el tercer argumento y <canal> el segundo
        if (!recordatorio) return message.channel.send("Debes poner un recordatorio.")
       const exitosoCH = new Discord.MessageEmbed() //embed que nos madar� cuando todo est� listo
        .setDescription("�El temporizador inici�!")
        .addField("Recordatorio", recordatorio)
        .addField("Canal:", canal)
        .setColor("GREEN")
        message.channel.send(exitosoCH)//mandamos el embed donde se ejecut� el comando
       setTimeout(function(){//hacemos otro temporizador
           const tempCH = new Discord.MessageEmbed()//haremos un embed que mandara al canal mencionado
            .setDescription("�El temporizador termin�!")
            .addField("Recordatorio:", recordatorio)
            .addField("Canal:", canal)
            .setColor("BLUE")
           canal.send(message.author, tempCH)//mandamos el embed al canal mencionado + una mencion al autor del mensaje
       }, ms(tiempo))//lo ponemos para que se ejecute cuando el tiempo acab�
   
    } 
}

} 