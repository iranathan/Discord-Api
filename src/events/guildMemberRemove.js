var Discord = require('discord.js');

module.exports = (client, member) => {
  // Load the guild's settings
  const settings = client.settings.get(member.guild.id);

  // If welcome is off, don't proceed (don't welcome the user)
  if (settings.goodbyeEnabled !== "true") return;
 
}