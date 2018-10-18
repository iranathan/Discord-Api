const roblox = require('roblox-js')
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
     const msg = message;
    var Moderator = msg.author;
  var username = args[0]
  var groupId = process.env.GROUP_ID
    roblox.login({username: process.env.BOT_USER, password: process.env.BOT_PASSWORD});
    await roblox.login({username: process.env.BOT_USER, password: process.env.BOT_PASSWORD});
   roblox.getIdFromUsername(username)
			.then(function(id){
                roblox.getUsernameFromId(id)
                .then(function(username2){
                roblox.getRankNameInGroup(groupId, id)
                .then(function(rank){
                    roblox.getBlurb(id)
                    .then(function (blurb){
                    roblox.getStatus(id)
                     .then(function(status){
                         if(blurb){
                         if(!status){
                            let rickembed = new Discord.MessageEmbed()
                            .setTitle(username2)
                            .setColor("#00FF27")
                            .setImage(`https://www.roblox.com/Thumbs/BCOverlay.ashx?username=${username}`)
                            .setThumbnail(`https://www.roblox.com/headshot-thumbnail/image?userId=${id}&width=100&height=100&format=png `)
                            .addField("Username", username2)
                            .addField("ID", id)
                            .addField("Group Rank", rank);//("Rank", rankname + " (" + rank + ")")
                            message.channel.send({embed: rickembed})
                            return;
                         }
                         let rickembed = new Discord.MessageEmbed()
                            .setTitle(username2)
                            .setColor("#00FF27")
                            .setImage(`https://www.roblox.com/Thumbs/BCOverlay.ashx?username=${username}`)
                            .setThumbnail(`https://www.roblox.com/headshot-thumbnail/image?userId=${id}&width=100&height=100&format=png `)
                            .addField("Username", username2)
                            .addField("ID", id)
                            .addField("Status", status)
                            .addField("About", blurb)
                            .addField("Group Rank", rank);//("Rank", rankname + " (" + rank + ")")
                            message.channel.send({embed: rickembed})
                            return;
                        }
                        if(!status){
                            let rickembed = new Discord.MessageEmbed()
                            .setTitle(username2)
                            .setColor("#00FF27")
                            .setImage(`https://www.roblox.com/Thumbs/BCOverlay.ashx?username=${username}`)
                            .setThumbnail(`https://www.roblox.com/headshot-thumbnail/image?userId=${id}&width=100&height=100&format=png `)
                            .addField("Username", username2)
                            .addField("ID", id)
                            .addField("Group Rank", rank);//("Rank", rankname + " (" + rank + ")")
                            message.channel.send({embed: rickembed})
                            return;
                        }
                    let rickembed = new Discord.MessageEmbed()
                    .setTitle(username2)
                    .setColor("#00FF27")
                    .setImage(`https://www.roblox.com/Thumbs/BCOverlay.ashx?username=${username}`)
                    .setThumbnail(`https://www.roblox.com/headshot-thumbnail/image?userId=${id}&width=100&height=100&format=png `)
                    .addField("Username", username2)
                    .addField("ID", id)
                    .addField("Status", status)
                    .addField("Group Rank", rank);//("Rank", rankname + " (" + rank + ")")
                    message.channel.send({embed: rickembed})
                    .catch(function(err){
                        message.channel.send(`Can't Find ${username}`)
                      });})})})
                   //http://www.roblox.com/Thumbs/Avatar.ashx?x=100&y=100&Format=Png&userId= 
                   //https://www.roblox.com/Thumbs/BCOverlay.ashx?username=${username}
                })
            });



};


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "whois",
    description: "Shows you who the specified user is.",
    usage: "whois <ROBLOX user/id>",
  category: "Roblox"
};