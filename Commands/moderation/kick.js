let Discord = require("discord.js");

module.exports = {
   data: new Discord.SlashCommandBuilder()
      .setName("kick")
      .setDescription("You can kick members from discord servers")
      .setDefaultMemberPermissions(Discord.PermissionFlagsBits.KickMembers)
      .addUserOption((option) => 
         option.setName("member")
            .setDescription("Choose a member to kick")
            .setRequired(true))
      .addStringOption((option) => 
         option.setName("reason")
            .setDescription("Why are You kick this member?")
            .setRequired(false)),
   run: async function(Bot, interaction) {
  let kicker = interaction.options.getMember("member");
  let reason = interaction.options.getString("reason");
  if(!reason) reason = "No reason";

  if(kicker == interaction.user)
  {
   var problem = new Discord.EmbedBuilder()
        .setTitle("Error")
        .setDescription(":x: | You can not kick Yourself")
        .setColor(Discord.Colors.Red)
        .setThumbnail(Bot.user.displayAvatarURL())

   await interaction.reply({ embeds: [problem] });
   return;
  }
  else if(kicker.user.id == Bot.user.id)
  {
   var error = new Discord.EmbedBuilder()
        .setTitle("Error")
        .setDescription(":x: | You can not kick me")
        .setColor(Discord.Colors.Red)
        .setThumbnail(Bot.user.displayAvatarURL())

   await interaction.reply({ embeds: [error] });
   return;
  }
  else if(kicker == interaction.guild.owner)
  {
   var nope = new Discord.EmbedBuilder()
        .setTitle("Error")
        .setDescription(":x: | No one can kick the server owner")
        .setColor(Discord.Colors.Red)
        .setThumbnail(Bot.user.displayAvatarURL())

   await interaction.reply({ embeds: [nope] });
   return;
  }
  else if(interaction.member.roles.highest.position < kicker.member.roles.highest.position)
  {
   var ok = new Discord.EmbedBuilder()
        .setTitle("Error")
        .setDescription(":x: | This member higher than You so You can not kick him")
        .setColor(Discord.Colors.Red)
        .setThumbnail(Bot.user.displayAvatarURL())

   await interaction.reply({ embeds: [ok] });
   return;
  }
  else
  {
   var yes = new Discord.EmbedBuilder()
        .setTitle("Success")
        .setDescription(`<@${kicker.member.id}> kicked by <@${interaction.member.id}>\nReason: **${reason}**`)
        .setColor(Discord.Colors.Green)
        .setThumbnail(interaction.user.displayAvatarURL())

   await kicker.kick({reason: `${reason}`});
   void interaction.reply({ embeds: [yes] });
  }
 }
}