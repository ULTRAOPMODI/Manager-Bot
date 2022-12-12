let Discord = require("discord.js");

module.exports = {
   data: new Discord.SlashCommandBuilder()
      .setName("ping")
      .setDescription("You can watch Your network speed"),
   run: async function(Bot, interaction) {
  await interaction.reply({ content: `<@${interaction.member.id}>, Your current network speed: **${Math.round(Date.now() - interaction.createdTimestamp)}**ms` });
 }
}