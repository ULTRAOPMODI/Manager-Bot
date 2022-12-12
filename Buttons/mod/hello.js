module.exports = {
   data: {
  name: "delete"
 },
   run: async function(Bot, interaction) {
  await interaction.channel.bulkDelete(1);
 }
}