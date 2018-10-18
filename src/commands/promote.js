const Discord = require('discord.js');
const rbx = require('roblox-js');

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
                  if (Rank != null && Rank + 1 < 255 && Rank != 0) {
                    rbx.promote({group: process.env.GROUP_ID, target: id}).then(async () => {
                        const RankAfter = await rbx.getRankInGroup({group: process.env.GROUP_ID, userId: id});
                        rbx.follow({userId: id}).catch(e=> {msg.reply(e)}); 
                        rbx.message({ recipient: id, subject: 'Ocean Ranking', body: 'You have been promoted in Ocean by ' + msg.member.displayName + ' to ' + Rank + '.\nIf you believe this is an error, feel free to contact an SHR about this.' }).then(() => {
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
                  
                  };
                  }).catch(e=> {msg.reply(e)});
                } else {
                  MessageEmbed(Moderator, 0XFF5151, 'Invalid Arguments Provided.\n\nUsage: `promote <ROBLOX user/id> <reason>`');
                };
          }).catch(e => {msg.reply(e)});
        } else {
            MessageEmbed(Moderator, 0XFF5151, 'Please provide the reason of why you want to promote the ROBLOX user.\n\nUsage: `promote <ROBLOX user/id> <reason>`');
        };
    } else {
        MessageEmbed(Moderator, 0XFF5151, 'Invalid Arguments Provided.\n\nUsage: `promote <ROBLOX user/id> <reason>`');
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
        msg.author.send({ embed });
    }; 
  
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "Ocean HR"
};

exports.help = {
    name: "promote",
    description: "Promotes?",
    usage: "promote (name)",
    category: "Roblox"
};