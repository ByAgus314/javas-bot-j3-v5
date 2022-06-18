const Discord = require('discord.js');

module.exports = {
  name: "stone-paper-scissors", 
  alias: ["sps"], 

execute (client, message, args){

    const moves = { piedra: 0, papel: 1, tijera: 2 };
  
    
    function wrapIndex(i, i_max) {
      return ((i % i_max) + i_max) % i_max;
    }
  
  
    function determine_win(inputs) {
      let i = moves[inputs[0]],
        j = moves[inputs[1]];
  
      return wrapIndex(i + -j, 3);   
    }
    
    
    function uppercase_first(string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    
    if (!args[0]) return message.reply("Eliga una entre piedra, papel o tijera.");
    
    if (!args[0] in moves)
      return message.reply("Elige una opcion valida");
  
    let machineInput = Object.keys(moves)[Math.floor(Math.random() * 3)];
    
    let winner = determine_win([args[0], machineInput]);
  
    const embed = new Discord.MessageEmbed()
      .setTitle("Piedra, papel o tijera.")
      .addFields(
        {
          name: `${message.author.username} eligió`,
          value: uppercase_first(args[0]),
          inline: true
        },
        {
          name: "Computadora eligió",
          value: uppercase_first(machineInput), 
          inline: true
        }
      )
      .setColor(message.guild.me.displayColor)
    
    if (winner == 0) {
      embed.setDescription("¡Vaya, hubo un empate!");
      return message.channel.send({ embed });
    } else if (winner == 1) {
      embed.setDescription("¡Has ganado, felicidades!");
      return message.channel.send({ embed });
    } else if (winner == 2) {
      embed.setDescription("¡La computadora ha ganado, suerte para la proxima!");
      return message.channel.send({ embed });
    }

 }

} 
