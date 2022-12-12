module.exports = {
   data: {
  name: "pause"
 },
   run: async function(Bot, interaction) {
  Bot.music.pause();
  await interaction.reply({ content: `<@${interaction.member.id}>, used ⏸️ to pause the queue`, ephemeral: true }); 
 }
}