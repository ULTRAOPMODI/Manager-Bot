let Discord = require("discord.js");

module.exports = {
   data: new Discord.SlashCommandBuilder()
      .setName("play")
      .setDescription("You play musics on discord voice channel")
      .addStringOption((option) => 
          option.setName("search")
             .setDescription("Enter here the song name")
             .setRequired(true)),
   run: async function(Bot, interaction) {
  let names = interaction.options.getString("search");
  let channel = interaction.member.voice.channel;
  if(!channel) return interaction.reply({ content: "Join voice channel first then You can play music", ephemeral: true });

  await Bot.music.play(channel, names, interaction);
 }
}