const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  if (!args || args.length < 1) return message.reply("Must provide a command to reload.");
  
  function MessageEmbed(Color, Eh1, Eh2) { 
  var embed = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.displayAvatarURL())
  .setColor(Color)
  .addField(Eh1, Eh2, true);
  message.channel.send({ embed });
  };

  let response = await client.unloadCommand(args[0]);
  if (response) return MessageEmbed(0XFF5151, 'Error Unloading', response);

  response = client.loadCommand(args[0]);
  if (response) return MessageEmbed(0XFF5151, 'Error Loading', response);
 
  
  return MessageEmbed(0X42F47A, 'Successfully Loaded!', args[0]);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "reload",
  description: "Reloads a command that's been modified.",
  usage: "reload <command>",
  category: "Bot Developers"
};