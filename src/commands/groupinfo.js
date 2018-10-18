const Discord = require("discord.js")
const Bloxy = require("bloxy")
const bclient = new Bloxy();

exports.run = async (client, msg, args) => {

try{

let groupID = process.env.GROUP_ID
let group = await bclient.getGroup(groupID);

const info = new Discord.MessageEmbed()
.addField("Group Name:", group.name,group.id)
.setThumbnail(group.logo)
.addField("Description:",group.description)
.addField("Owner:",group.owner.username)
.addField("Members:",group.memberCount)
.addField("Current Shout:",group.shout.body)
.addField("Group Roles:",(await group.getRoles()).map(x=>x.name).join(", "));
msg.channel.send(info)

} catch (e) {

    console.log(e)
const error = new Discord.MessageEmbed()
.setTitle("Error Grabbing information!")
.addField("Made by :", "<@399982462245011456>")
msg.channel.send(error)
  }

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
};
