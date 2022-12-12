const Discord = require("discord.js");
const YouTube = require("yt-search");

module.exports = {
   data: new Discord.SlashCommandBuilder()
      .setName("youtube")
      .setDescription("random description")
      .addSubcommand((subcommand) => 
         subcommand.setName("search")
            .setDescription("Search videos from YouTube")
            .addStringOption((option) => 
               option.setName("name")
                  .setDescription("Enter here Your video name")
                  .setRequired(true))),
   run: async function(Bot, interaction) {
  let source = interaction.options.getString("name");
  let r = await YouTube(`${source}`);
  let videos = r.videos.slice(0, 1);

  videos.forEach(function(v) {
   var embed = new Discord.EmbedBuilder()
        .setTitle(`${v.title}`)
        .setURL(v.url)
        .setImage(v.image)
        .setAuthor({name: `${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL()})
        .setColor(Discord.Colors.Red)

   var raw = new Discord.ActionRowBuilder()
        .addComponents(
         new Discord.ButtonBuilder()
            .setLabel("Watch on YouTube")
            .setStyle(Discord.ButtonStyle.Link)
            .setURL(v.url)
        )

   void interaction.reply({ embeds: [embed], components: [raw] });
  });
 }
}