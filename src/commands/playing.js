exports.run = (client, message, args) => {
  if(!args[0]) return;
  if(args[0] === 'game') return message.reply('Please tell me a game to play!');
  args = args.join(" ");
  message.reply(`I am now playing \`${args}\`.`);
  client.user.setPresence({activity: {type: 'LISTENING', name: args}});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["game"],
  permLevel: "Bot Owner"
};

exports.help = {
  name: 'playing',
  description: 'Changes the "Playing" status (game).',
  usage: 'playing [game name]',
  category: 'Bot Developers'
};
