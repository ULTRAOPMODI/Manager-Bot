let Discord = require("discord.js");

module.exports = {
   data: new Discord.SlashCommandBuilder()
      .setName("unban")
      .setDescription("You can banned members to unban in server")
      .setDefaultMemberPermissions(Discord.PermissionFlagsBits.BanMembers)
      .addStringOption((option) => 
         option.setName("id")
            .setDescription("Enter here the banned user ID")
            .setRequired(true))
      .addStringOption((option) => 
         option.setName("reason")
            .setDescription("Why are You unban this member?")
            .setRequired(false)),
   run: async function(Bot, interaction) {
  let kicker = interaction.options.getString("id");
  let reason = interaction.options.getString("reason");
  if(!reason) reason = "No reason";

  if(kicker == interaction.user)
  {
   var problem = new Discord.EmbedBuilder()
        .setTitle("Error")
        .setDescription(":x: | You are already unbanned")
        .setColor(Discord.Colors.Red)
        .setThumbnail(Bot.user.displayAvatarURL())

   await interaction.reply({ embeds: [problem] });
   return;
  }
  else if(kicker.user.id == Bot.user.id)
  {
   var error = new Discord.EmbedBuilder()
        .setTitle("Error")
        .setDescription(":x: | I am already unbanned")
        .setColor(Discord.Colors.Red)
        .setThumbnail(Bot.user.displayAvatarURL())

   await interaction.reply({ embeds: [error] });
   return;
  }
  else if(kicker == interaction.guild.owner)
  {
   var nope = new Discord.EmbedBuilder()
        .setTitle("Error")
        .setDescription(":x: | Server owner already unbanned")
        .setColor(Discord.Colors.Red)
        .setThumbnail(Bot.user.displayAvatarURL())

   await interaction.reply({ embeds: [nope] });
   return;
  }
  else
  {
   var yes = new Discord.EmbedBuilder()
        .setTitle("Success")
        .setDescription(`<@${kicker.member.id}> unbanned by <@${interaction.member.id}>\nReason: **${reason}**`)
        .setColor(Discord.Colors.Green)
        .setThumbnail(interaction.user.displayAvatarURL())

   try {
    await interaction.guilds.members.unban(kicker, {reason: `${reason}`});
    void interaction.reply({ embeds: [yes] });
   } catch (error) {
    var ok = new Discord.EmbedBuilder()
        .setTitle("Error")
        .setDescription(":x: | This member is already unbanned")
        .setColor(Discord.Colors.Red)
        .setThumbnail(Bot.user.displayAvatarURL())

    if(error) interaction.reply({ embeds: [ok] });
    return;
   }
  }
 }
}