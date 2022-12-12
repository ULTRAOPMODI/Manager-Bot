module.exports = {
   data: {
  name: "resume",
 },
   run: async function(Bot, interaction) {
  Bot.music.resume();
  await interaction.reply({ content: `<@${interaction.member.id}>, used ▶ to resume the queue`, ephemeral: true });
 }
}