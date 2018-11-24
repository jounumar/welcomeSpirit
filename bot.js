const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
      if(member.guild.id !== '474567474940084234') return;
    setTimeout(function() {
    member.guild.channels.find(r => r.id === '507233340751872001').send('*Welcome To* ***Fèarless*** *Server*..');
},3000);
});



client.login("MzUwODA5MDM2MzM5MjgxOTIx.Dtq98w.04l6-Gp5OGpWOEEVH7ShX2B4nrY");