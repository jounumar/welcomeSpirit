const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
      if(member.guild.id !== '507500031994101763') return;
    setTimeout(function() {
    member.guild.channels.find(r => r.id === '516014142860296203').send('**Welcome To Spirrrrrrit Server ..**');
},3000);
});



client.login(process.env.BOT_TOKEN);
