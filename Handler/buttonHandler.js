let fs = require("fs");

function loadButtons(Bot)
{
 let buttonFolder = fs.readdirSync("./Buttons");
 for(let folder of buttonFolder)
 {
  let buttonFiles = fs.readdirSync(`./Buttons/${folder}`).filter(file => file.endsWith(".js"));
  for(let file of buttonFiles)
  {
   let button = require(`../Buttons/${folder}/${file}`);
   Bot.buttons.set(button.data.name, button);
  }
 }
}

module.exports = {loadButtons}