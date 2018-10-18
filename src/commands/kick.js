const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    var naughtyperson = message.mentions.members.first()
    if(naughtyperson.hasPermission('MANAGE_MESSAGES')){
        message.channel.send('They cannot be kicked.')
        return;
    }
    if(!naughtyperson){
        message.reply("Tag someone to be kicked.")
        return;
    }
    if(naughtyperson === message.author.id){
        message.channel.send("You can't kick yourself!")
    }
    var reasonforban = args.slice(1).join(" ")
    if(!reasonforban){
        message.reply("Please specify a reason.")
        return;
    }
    await naughtyperson.kick(reasonforban) //bai
        .catch(error => message.reply(`I couldn't kick them because of : ${error}`)); return; //c;
        naughtyperson.send(`You have been kicked from Nova for ${reasonforban}`)
    message.channel.send(`${naughtyperson.user.tag} has been kicked by ${message.author.tag} because: ${reasonforban}`) + naughtyperson.send(`You have been kicked from Nova for ${reasonforban}`);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Moderator"
};

exports.help = {
  name: 'kick',
  category: 'Moderation',
  description: 'kicks the mentioned user.',
  usage: 'kick [mention] [reason]'
};
