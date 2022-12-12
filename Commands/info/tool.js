let Discord = require("discord.js");

module.exports = {
   data: new Discord.SlashCommandBuilder()
      .setName("tool")
      .setDescription("This command gave You developers tools")
      .addStringOption((option) => 
         option.setName("type")
            .setDescription("Choose a option to get the tool")
            .setRequired(true)
            .addChoices(
        {name: "Online IDE", value: "replit"},
        {name: "Application host", value: "heroku"},
        {name: "Code storage", value: "github"},
        {name: "Discord bot list", value: "topgg"},
        {name: "Website host", value: "robot"}
            )),
   run: async function(Bot, interaction) {
  let getting = interaction.options.getString("type");

  switch(getting)
  {
   case "replit":
    var replit = new Discord.EmbedBuilder()
        .setTitle("Online Compiler")
        .setDescription("**[Replit](https://replit.com)** is the best online IDE")
        .setColor(Discord.Colors.Blue)

    var rawReplit = new Discord.ActionRowBuilder()
        .addComponents(
         new Discord.ButtonBuilder()
            .setLabel("Replit")
            .setStyle(Discord.ButtonStyle.Link)
            .setURL("https://replit.com")
        )

    await interaction.reply({ embeds: [replit], components: [rawReplit] });
   break;
   case "heroku":
    var heroku = new Discord.EmbedBuilder()
        .setTitle("Host and Deploy website")
        .setDescription(`**[Heroku](https://heroku.com)** is the best host and deploy server`)
        .setColor(Discord.Colors.Purple)

    var rawHeroku = new Discord.ActionRowBuilder()
        .addComponents(
         new Discord.ButtonBuilder()
            .setLabel("Heroku")
            .setStyle(Discord.ButtonStyle.Link)
            .setURL("https://heroku.com")
        )

    await interaction.reply({ embeds: [heroku], components: [rawHeroku] });
   break;
   case "github":
    var github = new Discord.EmbedBuilder()
        .setTitle("Code Storage")
        .setDescription("**[GitHub](https://github.com)** is the best for store projects and import in any online IDE")
        .setColor(Discord.Colors.Yellow)

    var rawGithub = new Discord.ActionRowBuilder()
        .addComponents(
         new Discord.ButtonBuilder()
            .setLabel("GitHub")
            .setStyle(Discord.ButtonStyle.Link)
            .setURL("https://github.com")
        )

    await interaction.reply({ embeds: [github], components: [rawGithub] });
   break;
   case "topgg":
    var topgg = new Discord.EmbedBuilder()
        .setTitle("Publish Your with this website")
        .setDescription("**[Top.gg](https://top.gg)** is a discord bot publish website")
        .setColor(Discord.Colors.Aqua)

    var rawTopgg = new Discord.ActionRowBuilder()
        .addComponents(
         new Discord.ButtonBuilder()
            .setLabel("Top.gg")
            .setStyle(Discord.ButtonStyle.Link)
            .setURL("https://top.gg")
        )

    await interaction.reply({ embeds: [topgg], components: [rawTopgg] });
   break;
   case "robot":
    var uptime = new Discord.EmbedBuilder()
        .setTitle("Website Monetize")
        .setDescription("**[UpTimeRobot](https://uptimerobot.com)** is the best website monetizer website")
        .setColor(Discord.Colors.Green)

    var robot = new Discord.ActionRowBuilder()
        .addComponents(
         new Discord.ButtonBuilder()
            .setLabel("UpTimeRobot")
            .setStyle(Discord.ButtonStyle.Link)
            .setURL("https://uptimerobot.com")
        )

    await interaction.reply({ embeds: [uptime], components: [robot] });
   break;
  }
 }
}