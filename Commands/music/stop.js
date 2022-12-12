let Discord = require("discord.js");

module.exports = {
   data: new Discord.SlashCommandBuilder()
      .setName("stop")
      .setDescription("For stop the current queue"),
   run: async function(Bot, interaction) {
  Bot.music.stop();
  await interaction.reply({ content: 'This queue stoped by **/stop** slash commands', ephemeral: true });
 }
}