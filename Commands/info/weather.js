let weather = require("weather-js");
let Discord = require("discord.js");

module.exports = {
   data: new Discord.SlashCommandBuilder()
      .setName("weather")
      .setDesciption("Get the current weather for a location.")
      .addStringOption((option) => 
         option.setName("location")
            .setDescription("The location to get the weather for.")
            .setRequired(true)),
   run: async function(Bot, interaction) {
  let opt = interation.options.getString("location");

  weather.find({search: `${opt}`, degreeType: "C"}, async function(error, result) {
    if(error) return interaction.reply({ content: "No location found with your **Input!**", ehemeral: true });

    let location = result[0].loctation;
    let current = result[0].current;

    var embed = new Discord.EmbedBuilder()
          .setTitle("Location Weather")
          .addFields(
           {name: "Location Name:", value: `${loctation.name}`},
           {name: "Degree Type:", value: `${location.degreeType}`},
           {name: "Sky Text:", value: `${current.skytext}`},
           {name: "Temperature:", value: `${current.temperature}°`},
           {name: "Humidity:", value: `${current.humidity}%`},
           {name: "Wind:", value: `${current.winddisplay}`},
           {name: "Feels Like:", value: `${current.feelslike}°`}
          )
          .setColor(Discord.Colors.Blurple)
          .setImage(current.imageUrl)

   void interaction.reply({ embeds: [embed] });
  });
 }
}