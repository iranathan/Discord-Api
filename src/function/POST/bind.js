exports.bind = (bot) => {
const tokenmanage = require('../../token/token')

exports.changeNickname = async (guildid, userid, nickname, reason) => {
 const opt = {
 method: "PATCH", 
  uri: this.endpoints.GUILD_MEMBER(guildid, userid),
   headers: {
     Authorization: tokenmanage.getToken()
   },
   json: {nick: nickname, reason: reason || ''}
 }
   const die = await this.request(opt)
  console.log(die)
}


const request = require("request")
exports.createChannel = (guildid) => {
  const token = tokenmanage.getToken()
const endpoints = this.endpoints
  
 const o_pt = {
  "method": "POST",
  uri: endpoints.GUILD_CHANNELS(guildid),
  headers: {
  Authorization: token
 },
   json: {
     name: "gay2",
     type: 0,
     topic: "ur fat",
     rate_limit_per_user: 0,
     nsfw: true,
     parent_id: "518496185699270687"
   }
 }

}


const request2 = require('axios')

exports.createMessage = async function(channelid, content) {

const http = {
 "method": "POST",
  "url": this.endpoints.CHANNEL_MESSAGES(channelid),
  "headers": {
    Authorization: tokenmanage.getToken()
  },
  data: {
  "content": content,
  }
}
request2(http).then(res => {
  
})
.catch(error => {
  throw new Error('Unable to send message: ' + require('util').inspect(error.response.data))
});


}



///channels/{channel.id}/typing
exports.typing = function(channelid) {
  const opt = {
   method: "POST", 
  uri: `${this.endpoints.MAIN}channels/${channelid}/typing`,
    headers: {
     Authorization: tokenmanage.getToken() 
    },
    json: false
  }
  this.request(opt)
}

}