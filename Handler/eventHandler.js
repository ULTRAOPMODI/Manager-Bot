function loadEvents(Bot)
{
 let fs = require("fs");
        
 let eventFolder = fs.readdirSync("./Events");
 for(let folder of eventFolder)
 {
  let eventFiles = fs.readdirSync(`./Events/${folder}`).filter((file) => file.endsWith(".js"));
  for(let file of eventFiles)
  {
   let event = require(`../Events/${folder}/${file}`);
   if(event.once)
   {
    Bot.once(event.name, (...args) => event.execute(...args, Bot));
   }
   else
   {
    Bot.on(event.name, (...args) => event.execute(...args, Bot));
   }
  }
 }
}

module.exports = {loadEvents}