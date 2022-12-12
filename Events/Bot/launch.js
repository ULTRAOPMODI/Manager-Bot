let colour = require("colors");
let Discord = require("discord.js");

module.exports = {
   name: "ready",
   once: true,
   async execute(Bot) {
  console.log(`${colour.bold.brightGreen("[STATUS]:")} ${colour.brightGreen(`${Bot.user.tag} has been deployed!`)}`);
 }
}