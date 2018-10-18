const rbx = require('roblox-js')
const Discord = require('discord.js')

exports.run = async (client, message, [...ShoutMessage], level) => {
    const msg = message;
    var Moderator = msg.author;
    ShoutMessage = ShoutMessage.join(" ");
    rbx.login(process.env.BOT_USER, process.env.BOT_PASSWORD);
    await rbx.login(process.env.BOT_USER, process.env.BOT_PASSWORD);
    if (ShoutMessage) {
      rbx.post({group: process.env.GROUP_ID, message: ShoutMessage}).then(promise => { 
      MessageEmbed(Moderator, 0X42F47A, 'Sucessfully shouted to the Group Wall!\n\nMessage: `' + ShoutMessage + '`');
      }).catch(e => {
        MessageEmbed(Moderator, 0XFF5151, 'There was an error in shouting the message.');
      });
    } else {
      MessageEmbed(Moderator, 0XFF5151, 'Please provide a shout message.\n\nUsage: `gpost <message>`');
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
    guildOnly: true,
    aliases: ['sgroupwall'],
    permLevel: "Ocean HR"
};

exports.help = {
    name: "gpost",
    category: "Roblox",
    description: "Shouts a specific message to the groupwall.",
    usage: "gpost <message>"
};