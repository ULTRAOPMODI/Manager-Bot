let Discord = require("discord.js");

module.exports = {
   name: Discord.Events.InteractionCreate,
   async execute(interaction, Bot) {
  if(interaction.isChatInputCommand()) 
  {
  
   let command = Bot.commands.get(interaction.commandName);
   if(!command) return;

   try
   {
    await command.run(Bot, interaction);
   }
   catch (error)
   {
    if(error) console.error(error);
    await interaction.reply({ content: "There was an **Problem** on this **Command!**", ephemeral: true });
    return;
   }
  }
  else if(interaction.isButton())
  {
   let button = Bot.buttons.get(interaction.customId);
   if(!button) return;

   try 
   {
    await button.run(Bot, interaction);
   } 
   catch (error) 
   {
    if(error) console.error(error);
    void interaction.reply({ content: "There was a **Problem** on this button **Script!**", ephemeral: true });
    return;
   }
  }
 }
}