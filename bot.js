const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("welcome bot"); 
  client.user.setGame(`Blood,ForEver`,"http://twitch.tv/nackzos")
console.log("log");
});


client.on('message',function(message) {
    let prefix = "!SB";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`${args}`); 
}
});

client.login(process.env.BOT_TOKEN); 
