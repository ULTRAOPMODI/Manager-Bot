let Discord = require("discord.js");

module.exports = {
   data: new Discord.SlashCommandBuilder()
      .setName("clear")
      .setDescription("Clear messages for spaming")
      .setDefaultMemberPermissions(Discord.PermissionFlagsBits.ManageMessages)
      .addNumberOption((option) => 
         option.setName("number")
            .setDescription("Enter specify number for delete messages")
            .setRequired(true)),
   run: async function(Bot, interaction) {
  let number = interaction.options.getNumber("number");

  await interaction.channel.bulkDelete(number);
  var embed = new Discord.EmbedBuilder()
        .setTitle("Delete Messages")
        .setDescription(`I have been delete messages!`)
        .setThumbnail(interaction.user.displayAvatarURL())
        .setColor(Discord.Colors.Green)
   
   var raw = new Discord.ActionRowBuilder()
        .addComponents(
         new Discord.ButtonBuilder()
            .setLabel("Delete this message")
            .setStyle(Discord.ButtonStyle.Danger)
            .setCustomId("delete")
        )

  void interaction.reply({ embeds: [embed], components: [raw] });
 }
}