const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
if(!args[0]) {
  const errEmbed = new Discord.MessageEmbed()
  .setColor(0xFF0000)
  .setAuthor('ERROR')
  .setTitle(':exclamation: Usage: **.8ball (question)**');
  message.channel.send(errEmbed)
  return;
}

    
var sayings = ["It is certain",
										"It is decidedly so",
										"Without a doubt",
										"Yes, definitely",
										"You may rely on it",
										"As I see it, yes",
										"Most likely",
										"Outlook good",
										"Yes",
										"Signs point to yes",
										"Reply hazy try again",
										"Ask again later",
										"Better not tell you now",
										"Cannot predict now",
										"Concentrate and ask again",
										"Don't count on it",
										"My reply is no",
										"My sources say no",
										"Outlook not so good",
										"Very doubtful"];

			var result = Math.floor((Math.random() * sayings.length) + 0);
      const ballEmb = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setAuthor('8ball', 'https://findicons.com/files/icons/1700/2d/512/8_ball.png')
      .addField(args, sayings[result]);
			message.channel.send(ballEmb)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["8b"],
  permLevel: "User"
}

exports.help = {
  name: '8ball',
  description: 'Shows your destiny ;)',
  usage: '8ball',
  category: "Fun Commands"
};