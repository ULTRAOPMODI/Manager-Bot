let Voice = require("@discordjs/voice");
let Search = require("yt-search");
let ytdl = require("ytdl-core");
let Discord = require("discord.js");

let player = Voice.createAudioPlayer();

class Player
{
 async play(vc, name, message)
 {
  let r = await Search(name);
         
  let video = r.videos.slice(0, 1);
  let connection = Voice.joinVoiceChannel({
   channelId: vc.id,
   guildId: message.guild.id,
   adapterCreator: message.guild.voiceAdapterCreator,
   selfDeaf: true,
   selfMute: false
  });

  video.forEach(async function(v) {
   let stream = ytdl(v.url, {filter: "audioonly"});
   let resource = Voice.createAudioResource(stream, {inlineVolume: true});

   player.play(resource);
   connection.subscribe(player);

   player.resource = resource;

   connection.on(Voice.VoiceConnectionStatus.Ready, function() {
    var embed = new Discord.EmbedBuilder()
        .setTitle("Now Playing")
        .setURL(v.url)
        .setDescription(v.title)
        .setImage(v.image)
        .setColor(Discord.Colors.Blurple)

    var raw = new Discord.ActionRowBuilder()
        .addComponents(
         new Discord.ButtonBuilder()
            .setLabel("▶️ Resume")
            .setStyle(Discord.ButtonStyle.Primary)
            .setCustomId("resume"),

         new Discord.ButtonBuilder()
            .setLabel("⏸️ Pause")
            .setStyle(Discord.ButtonStyle.Primary)
            .setCustomId("pause"),

        new Discord.ButtonBuilder()
            .setLabel("⏹️ Stop")
            .setStyle(Discord.ButtonStyle.Danger)
            .setCustomId("stop"),

         new Discord.ButtonBuilder()
            .setLabel("Watch on YouTube")
            .setStyle(Discord.ButtonStyle.Link)
            .setURL(v.url)
        )
    void message.channel.send({ embeds: [embed], components: [raw] });
   });
   player.on(Voice.AudioPlayerStatus.Idle, function() {
    connection.destroy();
    void message.channel.send({ content: ":x: Queue is ended\nLeaving voice channel..." });
   });
  });
 }
        
 async pause()
 {
  await player.pause();
 }

 async resume()
 {
  await player.unpause();
 }

 async stop()
 {
  await player.stop();
 }

 async setVolume(number)
 {
  await player.resource.volume.setVolume(number);
 }
}

module.exports = {Player}