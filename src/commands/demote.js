const Discord = require('discord.js');
const rbx = require('roblox-js');
var name = ("Ocean Hotels")
exports.run = async (client, message, [Username, ...Reason], level) => {
  Reason = Reason.join(' ');  
  const msg = message;
  var Moderator = msg.author;
  rbx.login(process.env.BOT_USER, process.env.BOT_PASSWORD);
  await rbx.login(process.env.BOT_USER, process.env.BOT_PASSWORD);
  
    if (Username) {
      const userid = await rbx.getIdFromUsername(Username);
        if (Reason) {
            rbx.getIdFromUsername(Username.toLowerCase()).then(id => {
                if (userid && Reason) {
                  rbx.getRankInGroup({group: process.env.GROUP_ID, userId: id}).then(Rank => {
                  if (Rank != null && Rank - 1 != 0) {
                    rbx.demote({group: process.env.GROUP_ID, target: id}).then(async () => {
                        const RankAfter = await rbx.getRankInGroup({group: process.env.GROUP_ID, userId: id});
                        rbx.follow({userId: id}).catch(e=> {msg.reply(e)}); 
                        rbx.message({ recipient: id, subject: + name + 'Demotion', body: 'You have been demoted in'+ name + " " + msg.member.displayName + ' to ' + Rank + '.\nIf you believe this is an error, feel free to contact an SHR about this.' }).then(() => {
                        rbx.getRankNameInGroup(process.env.GROUP_ID, id).then(rankBefore1 => {
                            var rankBefore = rankBefore1;
                        });
                            MessageEmbed(Moderator, 0X42F47A, 'User has been successfully ranked!');
                            MessageManage(Moderator, 0XFFFC56, 'User has been ranked through Discord.\n\nModerator: `' + Moderator.tag + '`\nROBLOX User: `' + Username + '`\nRanked From: `' + Rank + '`\nRanked To: `' + RankAfter + '`\nReason: `' + Reason + '`');
                        }).catch(e => {
                            MessageEmbed(Moderator, 0XFFFC56, 'User has been successfully ranked, but unable to be messaged.');
                            MessageManage(Moderator, 0XFFFC56, 'User has been ranked through Discord.\n\nModerator: `' + Moderator.tag + '`\nROBLOX User: `' + Username + '`\nRanked From: `' + Rank + '`\nRanked To: `' + RankAfter + '`\nReason: `' + Reason + '`');
                        });
                    }).catch(e => {
                        MessageEmbed(Moderator, 0XFF5151, 'Please make sure the user is able to change the mentioned users rank, that the user is in the group, or the rank is spelled exactly!');
                    });
                  } else {
                    MessageEmbed(Moderator, 0XFF5151, 'ROBLOX user is not in the group or is Hotel Guest!\n\nUsage: `demote <ROBLOX user/id> <reason>`')
                  };
                });
                } else {
                    MessageEmbed(Moderator, 0XFF5151, 'Invalid Arguments Provided.\n\nUsage: `demote <ROBLOX user/id> <reason>`');
                };
            }).catch(e => MessageEmbed(Moderator, 0XFF5151, 'Error grabbing user ID.\n\n' + e));
        } else {
            MessageEmbed(Moderator, 0XFF5151, 'Please provide the reason of why you want to demote the ROBLOX user.\n\nUsage: `demote <ROBLOX user/id> <reason>`');
        };
    } else {
        MessageEmbed(Moderator, 0XFF5151, 'Invalid Arguments Provided.\n\nUsage: `demote <ROBLOX user/id> <reason>`');
    };

    function MessageEmbed(Mod1, Color, Description) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(Mod1.tag, Mod1.displayAvatarURL())
            .setColor(Color)
            .setDescription(Description);
        msg.channel.send({ embed });
    };
    function MessageManage(Mod1, Color, Description) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(Mod1.tag, Mod1.displayAvatarURL())
            .setColor(Color)
            .setDescription(Description);
        msg.guild.channels.find('name', 'ranking-logs').send({ embed });
    }; 
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Ocean HR"
};

exports.help = {
    name: "demote",
    description: "Sets the rank of the specified ROBLOX user to the below rank.",
    usage: "demote <ROBLOX user/id> <reason>",
  category: "Roblox"
};