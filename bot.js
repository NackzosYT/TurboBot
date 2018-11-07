const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("welcome bot"); 
  client.user.setGame(`SmooTH,ForEver`,"http://twitch.tv/nackzos")
console.log("log");
});


client.login(process.env.BOT_TOKEN); 
