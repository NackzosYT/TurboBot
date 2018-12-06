const Discord = require('discord.js');
const client = new Discord.Client();
const convert = require("hh-mm-ss")
const dateFormat = require('dateformat');
const fs = require('fs');
const pretty = require('pretty-ms');
const rn = require('random-number');
const userData = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));
const moment = require('moment');
var Canvas = require('canvas')
var jimp = require('jimp')
        const ms = require("ms");
const dataPro = JSON.parse(fs.readFileSync('./walls.json', 'utf8'));
let done = {};
const prefix = 'B'



















































client.on('guildMemberAdd', member => {
     const welcomer =  member.guild.channels.find('name', 'blood');

const w = ['./w1.png'];
         let Image = Canvas.Image,
            canvas = new Canvas(400, 239),
            ctx = canvas.getContext('2d');
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 239);
             
          

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(``, 300, 130);

                        ctx.font = "bold 26px Arial";
                        ctx.fontSize = '21px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 240, 210);
 
                let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(84, 149, 72, 0, Math.PI*2);
                              ctx.stroke();
                                 ctx.clip();
                                 ctx.drawImage(ava, 12, 77, 149, 149);
                          
                
                             
welcomer.sendFile(canvas.toBuffer())
      
      
                    }  )  
      
                    

})
      });     

    let channel = member.guild.channels.get('520199992762171392');
    if (!channel) {
        console.log("!channel fails");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('made it till here!');
    var guild;
    while (!guild)
        guild = client.guilds.get("491686948130521112")
channel.send(`**.#WeeeelcomeTo___Blood___.** :wine_glass:`)   
        

});

var dat = JSON.parse("{}");
client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.find('name', 'Blood');
    if (!channel) {
        console.log("!channel fails");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('made it till here!');
    var guild;
    while (!guild)
    guild = member.guild
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    console.log(3);
                    console.log(`${member} joined over ${Invite.inviter}'s invite ${Invite.code}`)
 channel.send(`***___InvitedBy___*** ${Invite.inviter} :writing_hand: `)            
 }
            dat[Inv] = Invite.uses;
        })
    })
});





client.login(process.env.BOT_TOKEN); 
