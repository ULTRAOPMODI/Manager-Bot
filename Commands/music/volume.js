let Discord = require("discord.js");

module.exports = {
   data: new Discord.SlashCommandBuilder()
      .setName("volume")
      .setDescription("Set volume for queue")
      .addNumberOption((option) => 
         option.setName("number")
            .setDescription("Enter here specify number of volume")
            .setRequired(true)),
   run: async function(Bot, interaction) {
  let me = interaction.options.getNumber("number");
  if(me < 1)
  {
    void interaction.reply({ content: ":x: | You cannot mute the queue!", ephemeral: true });
    return;
  }
  else if(me > 100)
  {
    void interaction.reply({ content: ":x: | Out of range volume | max volume You can set **100%!**", ephemeral: true });
    return;
  }
  else
  {
   try 
   {
    await Bot.music.setVolume(me);
    await interaction.reply({ content: `Volume set: **${me}%**`, ephemeral: true });
   } 
   catch (error) 
   {
    if(error) interaction.reply({ content: "Here is no queue **playing!**", ephemeral: true });
    console.error(error);
    return;
   }
  }
 }
}