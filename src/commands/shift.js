const Discord = require('discord.js');
var link = ("https://www.roblox.com/games/1573289675/Ocean-Hotel")
exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  var embed = new Discord.MessageEmbed()
  .setTitle("Shift",link)
  .setColor("61FF51")
  .setThumbnail(client.user.displayAvatarURL())
  .setTitle("Shift",link)
  .setDescription('Shift At The Hotel! Feel free to join!' + link);
  await message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Ocean HR"
};

exports.help = {
  name: "shift",
  description: "Shift at the Hotel!",
  usage: "shift",
  category: "Roblox"
};