const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("welcome bot"); 
  client.user.setGame(`.#BloodForEver.`,"http://twitch.tv/nackzosyt")
console.log("log");
});



client.login(process.env.BOT_TOKEN); 
