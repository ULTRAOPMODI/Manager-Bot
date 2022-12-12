let Discord = require("discord.js");

module.exports = {
   data: new Discord.SlashCommandBuilder()
      .setName("pause")
      .setDescription("For pause playing queue"),
   run: async function(Bot, interaction) {
  Bot.music.pause();
  await interaction.reply({ content: 'This queue paused by **/pause** slash commands', ephemeral: true });
 }
}