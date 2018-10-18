const Discord = require('discord.js');
exports.run = (client, message, args) => {
  var owner = 399982462245011456
  let user = message.mentions.users.first();
  if(!user){
    message.channel.send("Punching the air gets you nowhere :laugh:")
  }
  message.channel.send("Oof! You punched " + args.join(" ") + "!")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: "User"
};

exports.help = {
  name: 'punch',
  category: 'Fun Commands',
  description: 'Punchs the mentioned user.',
  usage: 'punch <mention>'
};
