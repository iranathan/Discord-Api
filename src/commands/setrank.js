const rbx = require('roblox-js')
const Discord = require('discord.js')

exports.run = async (client, message, [Username, ...Rank], level) => {
    const msg = message;
    var Moderator = msg.author;
    Rank = Rank.join(" ");
    rbx.login(process.env.BOT_USERNAME, process.env.BOT_PASSWORD);
    await rbx.login(process.env.BOT_USERNAME, process.env.BOT_PASSWORD);
  
    if (Username) {
      const userid = await rbx.getIdFromUsername(Username);
        if (Rank) {
            rbx.getIdFromUsername(Username.toLowerCase()).then(id => {
                if (userid && Rank) {
                    rbx.getRankNameInGroup(process.env.GROUP_ID, id).then(rankBefore1 => {
                      const rankBefore = rankBefore1;
                    });
                    rbx.setRank({ group: process.env.GROUP_ID, target: id, name: Rank }).then(() => {
                        rbx.follow({userId: id}).catch(e=> {msg.reply(e)}); 
                        rbx.message({ recipient: id, subject: 'Ocean Ranking', body: 'You have been ranked in OCean by ' + msg.member.displayName + ' to ' + Rank + '.\nIf you believe this is an error, feel free to contact an SHR about this.' }).then(() => {
                        rbx.getRankNameInGroup(process.env.GROUP_ID, id).then(rankBefore1 => {
                            var rankBefore = rankBefore1;
                        });
                            MessageEmbed(Moderator, 0X42F47A, 'User has been successfully ranked!');
                            MessageManage(Moderator, 0XFFFC56, 'User has been ranked through Discord.\n\nModerator: `' + Moderator.tag + '`\nROBLOX User: `' + Username + '`\nRanked To: `' + Rank + '`');
                        }).catch(e => {
                            MessageEmbed(Moderator, 0XFFFC56, 'User has been successfully ranked, but unable to be messaged.');
                            MessageManage(Moderator, 0XFFFC56, 'User has been ranked through Discord.\n\nModerator: `' + Moderator.tag + '`\nROBLOX User: `' + Username + '`\nRanked To: `' + Rank + '`');
                        });
                    }).catch(e => {
                        MessageEmbed(Moderator, 0XFF5151, 'Please make sure the user is able to change the mentioned users rank, that the user is in the group, or the rank is spelled exactly!');
                    });
                } else {
                    MessageEmbed(Moderator, 0XFF5151, 'Invalid Arguments Provided.\n\nUsage: `setrank <ROBLOX user/id> <rank name/id>`');
                };
            }).catch(e => MessageEmbed(Moderator, 0XFF5151, 'Error grabbing user ID.\n\n' + e));
        } else {
            MessageEmbed(Moderator, 0XFF5151, 'Please provide the rank name/id to set the rank of the ROBLOX user to.\n\nUsage: `setrank <ROBLOX user/id> <rank name/id>`');
        };
    } else {
        MessageEmbed(Moderator, 0XFF5151, 'Invalid Arguments Provided.\n\nUsage: `setrank <ROBLOX user/id> <rank name/id>`');
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
    guildOnly: true,
    aliases: [],
    permLevel: "Park HR"
};

exports.help = {
    name: "setrank",
    description: "setrank",
    usage: "setrank (username) (rank-name)",
  category: "Roblox"
};