const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
        let totalSeconds = (bot.uptime / 1000);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;
let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
let boticon = bot.user.avatarURL;
        let botinfo = new Discord.MessageEmbed()
        .setTitle("Bot Information")
        .setColor("#15f153")
        .setThumbnail(boticon)
        .addField("Bot Name", bot.user.username)
        .addField("Channels:", bot.channels.size)
        .addField("Servers", bot.guilds.size)
        .addField("Users", bot.users.size)
        .addField("Ping", bot.ping)
        .addField("Uptime", uptime)
        .addField("Been alive since", bot.user.createdAt)
        message.channel.send(botinfo)
        return;
}

exports.conf = {
  name: 'botinfo',
  description: 'shows the bot info.',
  usage: 'botinfo',
  permLevel: "User"
}

exports.help = {
  name: 'botinfo',
  description: 'Displays information about the bot',
  usage: 'botinfo',
  category: "Misc"
};