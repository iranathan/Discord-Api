exports.run = (client, msg, args) => {
    let avatar = msg.mentions.users.size ? msg.mentions.users.first().displayAvatarURL() : msg.author.displayAvatarURL();
    if (msg.mentions.users.size > 0) {
        msg.channel.send(`Avatar for, **${msg.mentions.users.first().username}:**\n${avatar}`);
    } else {
      msg.channel.send(`Avatar for, **${msg.author.username}:**\n${avatar}`);
    }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: 'avatar',
  category: 'Fun Commands',
  description: 'Shows the avatar of the mentioned user.',
  usage: 'avatar [mention]'
};
