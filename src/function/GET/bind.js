module.exports.bind = (bot) => {
  const inf = bot.this
const request = inf.request;
       const token = bot.token || inf.token;
  const endpoints = bot.endpoints || inf.endpoints;
  
  exports.getMessages = (channelid) => {
        const token = bot.token
    console.log(this)
const endpoints = this.endpoints
  const re = new Promise(function(resolve, reject) {
    this.request({
      method: "GET",
      uri: inf.endpoints.CHANNEL_MESSAGES(channelid),
      headers: {
        Authorization: token
      }
    }, (err, res, data) => {
      resolve(JSON.parse(data))
    });
  });
  return re;
  }
  
  
  
  
  
  exports.getUser = (id) => {
     


return new Promise(function(resolve, reject) {
  request({   method: "GET",
    uri: endpoints.USER(id),
    headers: {
      Authorization: token
    }}, (err, res, data) => {
    data = JSON.parse(data)

    resolve(data)
  });
});
    
    
  }
  
  
  
  
  
  exports.login = (token2) => {
    const re = new Promise(function(resolve, reject) {
    request({
    method: "GET",
      uri: `${bot.endpoints.MAIN}users/@me`,
      headers: {
       Authorization: token2 
      }
    }, (err, response, args) => {
     args = JSON.parse(args);

      if(args.message == "401: Unauthorized") throw new Error('Incorrect login details provided.')

      bot.user = args;
      bot.token = token2 
      require('../../token/token').setToken(token2)

      bot.user.token = token2
      bot.user.tag = `${bot.user.username}#${bot.user.discriminator}`
      bot.events.emit('ready', bot.user)
    });
    });
    return re;
  }
  
  
  
  exports.getGuildRoles = (GuildId) => {
    const re = new Promise(function(resolve, reject) {
      request({
      method: "GET",
      uri: `${endpoints.MAIN}/guilds/${GuildId}/roles`,
         headers: {
     Authorization: token
   },
      }, (err, res, data) => {
        
        resolve(JSON.parse(data))
      });
    });
  return re;
}
  
  
  
  
  

exports.getGuildMembers = (guildid) => {
 
      const re = new Promise(function(resolve, reject) {
  request({  method: "GET", 
    uri: this.endpoints.GUILD_MEMBERS(guildid),
    headers: {
      Autorization: token
  }}, (err, res, data) => {
    resolve(JSON.parse(data))
  });
      });
  return re;
}

  
  
  
}