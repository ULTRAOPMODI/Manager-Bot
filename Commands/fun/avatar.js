let Discord = require("discord.js");

module.exports = {
   data: new Discord.SlashCommandBuilder()
      .setName("avatar")
      .setDescription("You can get Your logo image")
      .addUserOption((option) => 
         option.setName("user")
            .setDescription("Select a user to get the image")
            .setRequired(true)),
   run: async function(Bot, interaction) {
  let imager = interaction.options.getMember("user");
  let attachment = new Discord.AttachmentBuilder(imager.user.displayAvatarURL({format: 'png', size: 1024, dynamic: true}));

  await interaction.reply({ files: [attachment] });
 }
}