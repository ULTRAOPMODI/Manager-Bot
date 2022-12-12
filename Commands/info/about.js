let Discord = require("discord.js");

module.exports = {
   data: new Discord.SlashCommandBuilder()
      .setName("info")
      .setDescription("Get users identity")
      .addUserOption((option) => 
         option.setName("user")
           .setDescription("Choose a user then You can get the info")
           .setRequired(true)),
   run: async function(Bot, interaction) {
  let stuff = interaction.options.getMember("user");
  let date = new Date();
  let h = date.getHours();

  let ampm = h > 12 ? "PM" : "AM";
           
  if(h > 12)
  {
   h = h - 12;
  }
           
  var embed = new Discord.EmbedBuilder()
        .setTitle("Informations")
        .addFields(
          {name: "Username:", value: `${stuff.user.username}`},
          {name: "Time:", value: `**${h}** : **${date.getMinutes()}** : **${date.getSeconds()}** **${ampm}**`},
          {name: "Date:", value: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
        )
        .setColor(Discord.Colors.Blue)
        .setThumbnail(stuff.user.displayAvatarURL())

  await interaction.reply({ embeds: [embed] });
 }
}