module.exports ={
  
    /* Main */
    MAIN: "https://discordapp.com/api/v6/",
   
    /* User */
    USER: (userID) => `https://discordapp.com/api/v6/users/${userID}`,
    USER_CHANNELS: (userID) => `https://discordapp.com/api/v6/users/${userID}/channels`,
    USER_GUILD: (guildID) => `https://discordapp.com/api/v6/users/@me/guilds/${guildID}`,
    USERS: `https://discordapp.com/api/v6/users`,

    /* Channels */
    CHANNELS: (channelID) => `https://discordapp.com/api/v6/channels/${channelID}`,
    CHANNEL_INVITES: (channelID) => `https://discordapp.com/api/v6/channels/${channelID}/invites`,
    CHANNEL_MESSAGE: (channelID, messageID) => `https://discordapp.com/api/v6/channels/${channelID}/messages/${messageID}`,
    CHANNEL_MESSAGES: (channelID) => `https://discordapp.com/api/v6/channels/${channelID}/messages`,
    CHANNEL_BULKDELETE: (channelID) => `https://discordapp.com/api/v6/channels/${channelID}/messages/bulk-delete`,
    CHANNEL_PIN_MESSAGES: (channelID, messageID) => `https://discordapp.com/api/v6/channels/${channelID}/pins/${messageID}`,
    CHANNEL_PINNED_MESSAGES: (channelID) => `https://discordapp.com/api/v6/channels/${channelID}/pins`,
    CHANNEL_WEBHOOKS: (channelID) => `https://discordapp.com/api/v6/channels/${channelID}/webhooks`,

    /* Guild */
    GUILDS: (guildID) => `https://discordapp.com/api/v6/guilds/${guildID}`,
    GUILD_BAN: (guildID, userID) => `https://discordapp.com/api/v6/guilds/${guildID}/bans/${userID}`,
    GUILD_BANS: (guildID) => `https://discordapp.com/api/v6/guilds/${guildID}/bans`,
    GUILD_CHANNELS: (guildID) => `https://discordapp.com/api/v6/guilds/${guildID}/channels`,
    GUILD_INVITES: (guildID) => `https://discordapp.com/api/v6/guilds/${guildID}/invites`,
    GUILD_MEMBER: (guildID, userID) => `https://discordapp.com/api/v6/guilds/${guildID}/members/${userID}`,
    GUILD_MEMBERS: (guildID) => `https://discordapp.com/api/v6/guilds/${guildID}/members`,
    GUILD_REGIONS: (guildID) => `https://discordapp.com/api/v6/guilds/${guildID}/regions`,
    GUILD_PRUNE: (guildID) => `https://discordapp.com/api/v6/guilds/${guildID}/prune`,
    GUILD_ROLE: (guildID, roleID) => `https://discordapp.com/api/v6/guilds/${guildID}/roles/${roleID}`,
    GUILD_MEMBER_ROLE: (guildID, userID, roleID) => `https://discordapp.com/api/v6/guilds/${guildID}/members/${userID}/roles/${roleID}`
};