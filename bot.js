const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});


`client.on('message', message => {
 if (message.author.bot) return;
  
  if (message.content === prefix + "help") {
 message.author.send(`**Comming Soon**`)
   message.react(`✅`)
         
  
 

كود هيلب يرسل بلخاص زي برو بوت ازا كان فاتح خاص يحط ايموجي صح وازا كان مقفل خاص يحط ايموجي x
من صنعي كثير نار يقدرون يصنعوه
المبرمج[ @H2   , iiDanger ☬ 🍷] 


client.login(process.env.BOT_TOKEN);
