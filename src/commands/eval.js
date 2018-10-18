const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  const evalEmbed = new Discord.MessageEmbed();
  const code = args.join(' ');
  String.prototype.replaceAll = function (search, replacement) {
    return this.replace(RegExp(search, 'gi'), replacement);
  
};
  client.clean = text => {
    if (typeof text !== 'string') {
        text = require('util')
            .inspect(text, { depth: 0 });
    }
    text = text
        .replace(/`/g, '`' + String.fromCharCode(8203))
        .replace(/@/g, '@' + String.fromCharCode(8203))
        .replaceAll(client.token, 'WOW, YOU ACTUALLY TRIED TO GET MY TOKEN UR EVIL')
    return text;
};
  try {
      const evaled = client.clean(eval(code));
      evalEmbed.addField('**Input:**', `\`\`\`\n${code}\n\`\`\``);
      evalEmbed.setColor('0x42f468');
          evalEmbed.addField('***Output:***', `\`\`\`xl\n${evaled}\n\`\`\``);

      message.channel.send(evalEmbed);
  } catch (err) {
      evalEmbed.setColor('0xff0000');
      evalEmbed.addField('ERROR', `\`\`\`xl\n${err}\n\`\`\``);
      message.channel.send(evalEmbed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "eval",
  description: "Evaluates Code.",
  usage: "eval <code>",
  category: "Bot Developers"
};