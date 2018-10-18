const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    var naughtyperson = message.mentions.members.first()
    if(!naughtyperson){
        message.reply("Tag someone to be banned.")
        return;
    }
    if(naughtyperson.hasPermission('MANAGE_MESSAGES')){
        message.channel.send('They cannot be banned.')
        return;
    }
    var reasonforban = args.slice(1).join(" ")
    if(!reasonforban){
        message.reply("Please specify a reason.")
        return;
    }
    await naughtyperson.ban(reasonforban)
        .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.channel.send(`${naughtyperson.user.tag} has been banned by ${message.author.tag} because: ${reasonforban}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Administrator"
};

exports.help = {
  name: 'ban',
  category: 'Moderation',
  description: 'Bans the mentioned user.',
  usage: 'ban [mention] [reason]'
};
