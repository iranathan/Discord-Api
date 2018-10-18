const config = {
 "ownerID": ['399982462245011456','393093524599603202'],
  // Bot Admins
  "admins": [],

  // Bot Support
  "support": [],
  
  // Your Bot's Token
  "token": process.env.BOT_TOKEN,

  // DO NOT LEAVE ANY OF THESE BLANK, AS YOU WILL NOT BE ABLE TO UPDATE THEM
  // VIA COMMANDS IN THE GUILD.
  
  "defaultSettings" : {
    "**prefix**": ".",
    "**modLogChannel**": "discord-logs",
    "**verifiedrole**": "Ranking Verified",
    "**muteRole**": "Muted",
    "**discordMod**": "---Mod Team---",
    "**discordAdmin**": "---Administration Team---",
    "**discordManager**": "Discord Manager",
    "**HRRole**": "[!] High Rank",
    "**SHRRole**": "[!] Super High Rank",
    "**superAdminRole**": "[!] Server Staff",
    "**helpChannel**": "help",
    "**systemNotice**": "true", // This gives a notice when a user tries to run a command that they do not have permission to use.
  },

  // PERMISSION LEVEL DEFINITIONS.

  permLevels: [
    // This is the lowest permisison level, this is for non-roled users.
    { level: 0,
      name: "User", 
      // Don't bother checking, just return true which allows them to execute any command their
      // level allows them to.
      check: () => true
    },

      { level: 10,
      name: "Discord Moderator",
     check: (message) => {
       try {
         const discordMod = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.discordMod.toLowerCase());
         return (discordMod && message.member.roles.has(discordMod.id));
       } catch(e) {
         return false;
       }
     }
    },
    
    { level: 11,
      // This is the name of the role.
      name: "Discord Administrator",
      // The following lines check the guild the message came from for the roles.
      // Then it checks if the member that authored the message has the role.
      // If they do return true, which will allow them to execute the command in question.
      // If they don't then return false, which will prevent them from executing the command.
      check: (message) => {
        try {
          const modRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.discordAdmin.toLowerCase());
          if (modRole && message.member.roles.has(modRole.id)) return true;
        } catch (e) {
          return false;
        }
      }
    },
    
    { level: 12,
      // This is the name of the role.
      name: "Discord Manager",
      // The following lines check the guild the message came from for the roles.
      // Then it checks if the member that authored the message has the role.
      // If they do return true, which will allow them to execute the command in question.
      // If they don't then return false, which will prevent them from executing the command.
      check: (message) => {
        try {
          const modRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.discordManager.toLowerCase());
          if (modRole && message.member.roles.has(modRole.id)) return true;
        } catch (e) {
          return false;
        }
      }
    },
        // This is your permission level, the staff levels should always be above the rest of the roles.
    { level: 13,
      // This is the name of the role.
      name: "Ocean MR",
      // The following lines check the guild the message came from for the roles.
      // Then it checks if the member that authored the message has the role.
      // If they do return true, which will allow them to execute the command in question.
      // If they don't then return false, which will prevent them from executing the command.
      check: (message) => {
        try {
          const modRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.MRRole.toLowerCase());
          if (modRole && message.member.roles.has(modRole.id)) return true;
        } catch (e) {
          return false;
        }
      }
    },
    // This is your permission level, the staff levels should always be above the rest of the roles.
    { level: 14,
      // This is the name of the role.
      name: "Ocean HR",
      // The following lines check the guild the message came from for the roles.
      // Then it checks if the member that authored the message has the role.
      // If they do return true, which will allow them to execute the command in question.
      // If they don't then return false, which will prevent them from executing the command.
      check: (message) => {
        try {
          const modRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.HRRole.toLowerCase());
          if (modRole && message.member.roles.has(modRole.id)) return true;
        } catch (e) {
          return false;
        }
      }
    },

    { level: 15,
      name: "Ocean SHR", 
      check: (message) => {
        try {
          const adminRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.SHRRole.toLowerCase());
          return (adminRole && message.member.roles.has(adminRole.id));
        } catch (e) {
          return false;
        }
      }
    },
    { level: 16,
      name: "Super Administrator",
     check: (message) => {
       try {
         const superAdminRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.superAdminRole.toLowerCase());
         return (superAdminRole && message.member.roles.has(superAdminRole.id));
       } catch(e) {
         return false;
       }
     }
    },
    // This is the server owner.
    { level: 17,
      name: "Server Owner", 
      // Simple check, if the guild owner id matches the message author's ID, then it will return true.
      // Otherwise it will return false.
      check: (message) => message.channel.type === "text" ? (message.guild.owner.user.id === message.author.id ? true : false) : false
    },

    // Bot Support is a special inbetween level that has the equivalent of server owner access
    // to any server they joins, in order to help troubleshoot the bot on behalf of owners.
    { level: 18,
      name: "Bot Support",
      // The check is by reading if an ID is part of this array. Yes, this means you need to
      // change this and reboot the bot to add a support user. Make it better yourself!
      check: (message) => config.support.includes(message.author.id)
    },

    // Bot Admin has some limited access like rebooting the bot or reloading commands.
    { level: 19,
      name: "Bot Admin",
      check: (message) => config.admins.includes(message.author.id)
    },

    // This is the bot owner, this should be the highest permission level available.
    // The reason this should be the highest level is because of dangerous commands such as eval
    // or exec (if the owner has that).
    { level: 20,
      name: "Bot Owner", 
      // Another simple check, compares the message author id to the one stored in the config file.
      check: (message) => message.client.config.ownerID.includes(message.author.id)
    }
  ]
}

module.exports = config