let Discord = require("discord.js");
let moment = require("moment");

module.exports = {
   data: new Discord.SlashCommandBuilder()
      .setName("info")
      .setDescription("Get user identity"),
   run: async function(Bot, interaction) {
  var embed = new Discord.EmbedBuilder()
        .setTitle("Informations")
        .addFields(
          {name: "Username:", value: `${interaction.user.username}`},
          {name: "Network speed", value: `${Math.round(Bot.ws.ping)}ms`},
          {name: "Joined on Discord", value: `${moment(member.user.createdAt). format("DD MMM YYYY")}`}
        )
        .setColor(Discord.Colors.Blue)
        .setThumbnail(interaction.user.displayAvatarURL())

  await interaction.reply({ embeds: [embed] });
 }
}