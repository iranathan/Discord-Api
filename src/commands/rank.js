const Discord = require('discord.js');
const rbx = require('roblox-js');
const req = require('request');

exports.run = async (client, message, user, level) => {
  const msg = message;
  const Moderator = msg.author;
  user = user.join(' ');
  rbx.login(process.env.BOT_USERNAME, process.env.BOT_PASSWORD);
  
  await rbx.login(process.env.BOT_USERNAME, process.env.BOT_PASSWORD);
  
  if(user) {
    rbx.getIdFromUsername(user).then(id => {
      rbx.getRankNameInGroup({group: process.env.GROUP_ID, userId: id}).then(rank => {
        rbx.getStatus({userId: id}).then(status => {
          rbx.getUsernameFromId({id: id}).then(user1 => {
              var embed = new Discord.MessageEmbed()
              .setAuthor(user1, `https://www.roblox.com/bust-thumbnail/image?userId=${id}&width=420&height=420&format=png`)
              .setThumbnail(`https://www.roblox.com/bust-thumbnail/image?userId=${id}&width=420&height=420&format=png`)
              .setColor(0X2355CF)
              .addField('Username', user1, true)
              .addField('ID', id, true)
              .addField('Group Rank', rank, true);
              msg.channel.send({ embed });
          }).catch(e => {
            MessageEmbed(Moderator, 0XFF5151, 'There was an error grabbing the ROBLOX username from the ID.');
          });
        }).catch(e => {
          MessageEmbed(Moderator, 0XFF5151, 'There was an error grabbing the status of the ROBLOX user.');
        });
      }).catch(e => {
        MessageEmbed(Moderator, 0XFF5151, 'There was an error grabbing the ROBLOX users group rank.');
      });
    }).catch(e => {
      MessageEmbed(Moderator, 0XFF5151, 'There was an error grabbing the ROBLOX user ID.');
    });
  } else {
    MessageEmbed(Moderator, 0XFF5151, 'Please mentino a user to get the ROBLOX information for.\n\nUsage: `robloxinfo <ROBLOX user/id>`');
  };
  
function MessageEmbed(Mod1, Color, Description) {
  var embed = new Discord.MessageEmbed()
  .setAuthor(Mod1.tag, Mod1.displayAvatarURL())
  .setColor(Color)
  .setDescription(Description);
  msg.channel.send({ embed });
};
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "rank",
  category: "Roblox",
  description: "Loads the ROBLOX rank for the specified ROBLOX user.",
  usage: "rank <ROBLOX user/id>"
};