const Discord = require('discord.js')
const client = new Discord.Client()
const { Client, MessageEmbed, Guild } = require('discord.js');
require('dotenv').config();
const mongoose = require('mongoose');
const config = require('./config.json')
const token = config.token

mongoose.connect('mongodb+srv://ByAgus314:Nunylindo09@cluster0.gsiud.mongodb.net/Data',{
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => 
  console.log("conectado mongoose")


)


const fs = require('fs')
let { readdirSync } = require('fs') 

client.ticketTranscript = mongoose.model('transcripts', 
    new mongoose.Schema({
        Channel : String,
        Content : Array
    })
)

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./comandos/${file}`);
  client.commands.set(command.name, command);
}

client.on('ready', () => {
  function presence() {
    client.user.setPresence({
      status: 'dnd',
      activity: {
        name: 'Programming',
       type: 'PLAYING'
      }
    })
  }
  presence(); 
  console.log(`a`)
})

client.on('message', async(message) => {
  if(message.channel.parentID !== '943696683651448875') return;
  client.ticketTranscript.findOne({ Channel : message.channel.id }, async(err, data) => {
      if(err) throw err;
      if(data) {
         console.log('there is data')
         data.Content.push(`${message.author.tag} : ${message.content}`) 
      } else {
          console.log('there is no data')
          data = new client.ticketTranscript({ Channel : message.channel.id, Content: `${message.author.tag} : ${message.content}`})
      }
      await data.save()
          .catch(err =>  console.log(err))
      console.log('data is saved ')
  })

})


client.on('message', (message) => {

  let prefix = '<'

  if(message.author.bot) return;

  if(!message.content.startsWith(prefix)) return;

  let usuario = message.mentions.members.first() || message.member;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
    if(command === 'estado'){
    
  }
  
    if (command === 'ping') {

    }

  

  let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
  if(cmd){
    cmd.execute(client, message, args)
  }
})


const Distube = require('distube')
client.distube = new Distube(client, {
emitNewSongoly: true, 
searchSong: false,
leaveOnStop: false,
leaveOnFinish: false,
leaveOnEmpty: true
});

client.distube.on("addlist", (message, queue, playlist) => message.channel.send (`Playlist:/n**${playlist.name}** ***${message.author}***`)
)

client.distube.on("addSong", (message, queue, song) => message.channel.send(`Añadido a la cola, **${song.name}** - **${song.formattedDuration}** ***${message.author}`)
)

client.distube.on("playSong", (message, queue, playsong) => message.channel.send(`Reproduciendo ahora: **${playsong.name}** - **${playsong.formattedDuration}** ***${message.author}***`)
)

client.distube.on("playlist", (message, queue, playlist) => message.channel.send(`Reproduciendo playlist: **${playlist.name}** - **${playsong.formattedDuration}** ***${message.author}***`)
)

client.distube.on(`intiQueue`, (queue) => {
  queue.autoplay = false;
  queue.volume = 100
})


client.login(token);



