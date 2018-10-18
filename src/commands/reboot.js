const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  var embed = new Discord.MessageEmbed()
  .setAuthor(client.user.username,client.user.displayAvatarURL())
  .setThumbnail(client.user.displayAvatarURL())
  .setColor(0X2355CF)
  .setDescription('Bot is Restarting...');
  await message.channel.send({ embed }) + client.user.setAvatar("https://media.discordapp.net/attachments/466720366102970389/466734008303091712/40f68aa73278356cbb0de8a4385a0904.png")
  client.commands.forEach( async cmd => {
    await client.unloadCommand(cmd);
  });
  process.exit(1);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "reboot",
  description: "Shuts down the bot, then starts again.",
  usage: "reboot",
  category: "Bot Developers"
};