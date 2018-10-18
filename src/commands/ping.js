const Discord = require("discord.js")
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const msg = await message.channel.send("Pinging...");
    var embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription(':ping_pong: Pong! `' + `${Date.now() - message.createdTimestamp}` + 'ms`' + ' API Latency `' + `${Math.round(client.ping)}` + 'ms`')
    .setColor('RANDOM')
    msg.edit(embed);
    return;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "ping",
  description: "It... like... pings. Then Pongs. And it's not Ping Pong.",
  usage: "ping",
  category: "Misc"
};