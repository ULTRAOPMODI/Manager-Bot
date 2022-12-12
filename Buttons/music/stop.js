module.exports = {
   data: {
  name: "stop",
 },
   run: async function(Bot, interaction) {
  Bot.music.stop();
  await interaction.reply({ content: `<@${interaction.member.id}>, used ⏹️ to stop the queue`, ephemeral: true });
 }
}