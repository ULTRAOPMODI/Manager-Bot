function loadCommands(Bot)
{
 let fs = require("fs");
 let colour = require("colors");

 let commands = [];
 let commandFolder = fs.readdirSync("./Commands");
 for(let folder of commandFolder)
 {
  let commandFiles = fs.readdirSync(`./Commands/${folder}`).filter((file) => file.endsWith(".js"));
  for(let file of commandFiles)
  {
   let command = require(`../Commands/${folder}/${file}`);
   commands.push(command.data.toJSON());

   Bot.commands.set(command.data.name, command);
  }
 }
 Bot.application.commands.set(commands);
 console.log(`${colour.bold.brightBlue("[LOADING]:")} ${colour.brightBlue("Successfully loaded Slash (/) Commands")}`);
}

module.exports = {loadCommands}