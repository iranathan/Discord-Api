const Discord = require('./server.js');

const bot = new Discord.Client()





bot.events.on('ready', user => {
console.log(`Logged in as: ${user.tag}`)
bot.createMessage('521379010861727754', 'h')
});




bot.add('Bot <TOKEN>')