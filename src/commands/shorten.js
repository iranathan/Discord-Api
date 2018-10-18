const Discord = require("discord.js");
const shorten = require("isgd");
exports.run = async (client, message, args) => {
 
  if (!args[0]) return message.channel.send('**Proper Usage: !shorten <URL> [title]**')
 
  if (!args[1]) { 
   
    shorten.shorten(args[0], function(res) { 
      if (res.startsWith('Error:')) return message.channel.send('**Please enter a valid URL**'); 
     
      message.channel.send(`**<${res}>**`); 
   
    })
   
  } else {
   
    shorten.custom(args[0], args[1], function(res) { 
     
      
      if (res.startsWith('Error:')) return message.channel.send(`**${res}**`); 
     
     
      message.channel.send(`**<${res}>**`); 
     
     
    }) 
   
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["short", "urlshorten"],
  permLevel: "User"
}

exports.help = {
  name: 'shorten',
  description: 'Shorten a URL using isgd.',
  usage: 'shorten <url>',
  category: "Fun Commands"
};