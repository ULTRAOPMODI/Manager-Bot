const Discord = require("discord.js");
const fetch = (...args) => import("node-fetch").then(({default: fetch}) => fetch(...args));

module.exports = {
   data: new Discord.SlashCommandBuilder()
      .setName("meme")
      .setDescription("Get random memes"),
   run: async function(Bot, interaction) {
  let data = await fetch("https://www.reddit.com/r/memes/random/.json");
  let file = await data.json();

  var embed = new Discord.EmbedBuilder()
        .setTitle(`${file[0].data.children[0].data.title}`)
        .setURL(`${file[0].data.children[0].data.url}`)
        .setImage(file[0].data.children[0].data.url)
        .setColor(Discord.Colors.Blurple)

  await interaction.reply({ embeds: [embed] });
 }
}