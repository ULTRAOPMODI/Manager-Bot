let Discord = require("discord.js");
let translate = require("@iamtraction/google-translate");

module.exports = {
   data: new Discord.SlashCommandBuilder()
      .setName("translate")
      .setDescription("You can translate Your language to other language")
      .addStringOption((option) => 
         option.setName("text")
            .setDescription("Your input is here")
            .setRequired(true))
      .addStringOption((option) => 
         option.setName("input_language")
            .setDescription("Select your input language for detect your text")
            .setRequired(true)
            .addChoices(
             {name: "Automatic (Detect Language)", value: "auto"},
             {name: "Afrikaans",  value: "af"},
             {name: "Albaniam", value: "sq"},
             {name: "Arabic", value: "ar"},
             {name: "Basque", value: "eu"},
             {name: "Bengali (Bangla)", value: "bn"},
             {name: "Bosnian", value: "bs"},
             {name: "Catalan",  value: "ca"},
             {name: "Cebuano", value: "ceb"},
             {name: "Chinese Traditional", value: "zh-tw"},
             {name: "Dutch", value: "nl"},
             {name: "English",  value: "en"},
             {name: "French", value: "fr"},
             {name: "Germany", value: "de"},
             {name: "Greek", value: "el"},
             {name: "Hindi", value: "hi"},
             {name: "Japanese", value: "ja"},
             {name: "Korean", value: "ko"},
             {name: "Russian", value: "ru"},
             {name: "Indonesian", value: "id"},
             {name: "Urdu", value: "ur"}
            ))
      .addStringOption((option) => 
         option.setName("output_language")
            .setDescription("Select your output language for answer your text")
            .setRequired(true)
            .addChoices(
             {name: "Afrikaans",  value: "af"},
             {name: "Albaniam", value: "sq"},
             {name: "Arabic", value: "ar"},
             {name: "Basque", value: "eu"},
             {name: "Bengali (Bangla)", value: "bn"},
             {name: "Bosnian", value: "bs"},
             {name: "Catalan",  value: "ca"},
             {name: "Cebuano", value: "ceb"},
             {name: "Chinese Traditional", value: "zh-tw"},
             {name: "Dutch", value: "nl"},
             {name: "English",  value: "en"},
             {name: "French", value: "fr"},
             {name: "Germany", value: "de"},
             {name: "Greek", value: "el"},
             {name: "Hindi", value: "hi"},
             {name: "Japanese", value: "ja"},
             {name: "Korean", value: "ko"},
             {name: "Russian", value: "ru"},
             {name: "Indonesian", value: "id"},
             {name: "Urdu", value: "ur"}
            )),
   run: async function(Bot, interaction) {
  let getInputFrom = interaction.options.getString("input_language");
  let postOutputTo = interaction.options.getString("output_language");
  let textInput = interaction.options.getString("text");

  await translate(`${textInput}`, {from: `${getInputFrom}`, to: `${postOutputTo}`})
        .then((res) => {
    var embed = new Discord.EmbedBuilder()
        .setTitle("Google Translate")
        .addFields(
         {name: "Your Input:", value: `${getInputFrom}`},
         {name: "Output Result:", value: `${res.text}`}
        )
  });
 }
}