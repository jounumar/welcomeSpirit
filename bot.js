﻿const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
      if(member.guild.id !== '640308810795319307') return;
    setTimeout(function() {
    member.guild.channels.find(r => r.id === '683035809858977927').send('**ولكم تو سيرفر هز ..**');
},3000);
});



client.login(process.env.BOT_TOKEN);
