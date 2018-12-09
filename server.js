const request = require('request');
const bot = {}
bot.token = null
this.token = bot.token
this.endpoints = require('./endpoints.js')
this.request = request;
this.getToken = require('./src/token/token.js').getToken;
bot.endpoints = this.endpoints;
var EventEmitter = require('events');
bot.events = new EventEmitter();

bot.this = this;


async function bind() {
/* BIND GET */
require('./src/function/GET/bind.js').bind(bot);
require('./src/function/POST/bind.js').bind(bot);
/*  POST  */
const POST = require('./src/function/POST/bind.js');
bot.createMessage = POST.createMessage;
bot.createChannel = POST.createChannel;
bot.typing = POST.typing;
/* PATCH */
bot.changeNickname = POST.changeNickname;
/*  GET  */
const GET = require('./src/function/GET/bind.js');
bot.getUser = GET.getUser;
bot.getMessages = GET.getMessages;
bot.getGuildRoles = GET.getGuildRoles;
bot.getGuildMembers = GET.getGuildMembers
bot.add = GET.login;
  
}


bind()




function client() {
return "Version 1.0"
}

client.Client = function() {
 return bot; 
}

module.exports = client;