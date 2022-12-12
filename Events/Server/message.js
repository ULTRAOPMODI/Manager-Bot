let Discord = require("discord.js");
let AntiSwear = require("ez-antiswear");

module.exports = {
   name: "messageCreate",
   async execute(message, Bot) {
  let filterEn = new AntiSwear("en");
  let filterHi = new AntiSwear("hi");

  let owner = await message.guild.fetchOwner();

  if(!message.guild || message.author.bot || !message.content) return;

  if(filterEn.check(message.content) || filterHi.check(message.content)) 
  {
   if(message.guild.ownerId)
   {
    var embed = new Discord.EmbedBuilder()
        .setTitle("⚠️ Warning")
        .setDescription(`**${owner}** if You use bad word then You cannot archive Your owner **achievement!** So don't use bad words!`)
        .setColor(Discord.Colors.Yellow)
        .setThumbnail(Bot.user.displayAvatarURL())

    await message.delete();
    await message.channel.send({ embeds: [embed] });
   }
   else if(message.member.permissions.has(Discord.PermissionFlagsBits.Administrator))
   {
    var error = new Discord.EmbedBuilder()
        .setTitle("⚠️ Warning")
        .setDescription(`**${message.author.username}** do not bad words because You are **administrator** or **head admin** of this server!`)
        .setColor(Discord.Colors.Yellow)
        .setThumbnail(Bot.user.displayAvatarURL())

    await message.delete();
    await message.channel.send({ embeds: [error] });
   }
   else if(message.member.permissions.has(Discord.PermissionFlagsBits.ModerateMembers))
   {
    var tar = new Discord.EmbedBuilder()
        .setTitle("⚠️ Warning")
        .setDescription(`**${message.author.username}** do not use bad word else You lost **Moderator** or **Head Mod** role from this server!\nBecause You are the **moderator** or **head mod** of this server!`)
        .setColor(Discord.Colors.Yellow)
        .setThumbnail(Bot.user.displayAvatarURL())

    await message.delete();
    await message.channel.send({ embeds: [tar] });
   }
   else
   {
    var loggy = new Discord.EmbedBuilder()
        .setTitle("⚠️ Warning")
        .setDescription(`**${message.author.username}** Do not use bad words else You will got ban!`)
        .setColor(Discord.Colors.Yellow)
        .setThumbnail(Bot.user.displayAvatarURL())

    await message.delete();
    await message.channel.send({ embeds: [loggy] });
   }
  }
 }
}