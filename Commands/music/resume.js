let Discord = require("discord.js");

module.exports = {
   data: new Discord.SlashCommandBuilder()
      .setName("resume")
      .setDescription("For paused queue to resume"),
   run: async function(Bot, interaction) {
  Bot.music.resume();
  await interaction.reply({ content: 'This queue resumed by **/resume** slash commands', ephemeral: true });
 }
}