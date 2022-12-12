/*
 * Require Main modules
 */

const Discord = require("discord.js")
const config = require("./config.json");
const colour = require("colors");
const logs = require("discord-logs");

/*
 * Require Handlers Functions
 */

const { loadEvents } = require("./Handler/eventHandler.js");
const { loadCommands } = require("./Handler/commandHandler.js");
const { loadButtons } = require("./Handler/buttonHandler.js");

/*
 * Require System Modules
 */

const { Player } = require("./System/music.js");
const { logSystem } = require("./System/log.js");

/*
 * Main Coding
 */

let Bot = new Discord.Client({ 
 intents: [Object.keys(Discord.GatewayIntentBits)],
 partials: [Object.keys(Discord.Partials)],
 presence: {
  activities: [{name: "Minecraft", type: Discord.ActivityType.Playing}],
  status: "dnd"
 }
});

let Token = config.TOKEN || process.env.TOKEN;

console.log(colour.bold.white("[*] Setuping project"));
console.log(colour.bold.white("[*] Initialize this project"));            
console.log(colour.bold.white("[*] Setting up..."));

console.log(colour.bold.brightGreen("\t\t ┌───────────────────┐"));
console.log(colour.bold.brightGreen("\t\t │     Launching     │"));
console.log(colour.bold.brightGreen("\t\t └───────────────────┘"));

Bot.commands = new Discord.Collection();
Bot.buttons = new Discord.Collection();
Bot.music = new Player();

logs(Bot, {
 debug: true
});

Bot.login(Token).then(function() {
 void loadEvents(Bot);
 void loadCommands(Bot);
 void loadButtons(Bot);

 void logSystem(Bot);
}).catch((error) => {
 if(error) console.error(`${colour.bold.red("[ERROR]:")} ${colour.red("Please enter Your bot token in config.json file or .env file")}`);
 return;
});