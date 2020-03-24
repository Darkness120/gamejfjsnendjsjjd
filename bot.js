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
client.on("message", async message => {
  let emoji = {
    right: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'rightt')}`,
    wrong: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'falsee')}`,
    no: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'no')}`,
    load: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'load')}`
  
}
  if (!message.content.startsWith(prefix) || message.author.bot) return;
	
	if(message.content.toLowerCase().startsWith(prefix + `setrole`)){
	if(!setrole[message.guild.id]) setrole[message.guild.id] = {
    role: "Support Team"
}

		const role = setrole[message.guild.id].role
		let newrole = message.content.split(' ').slice(1).join(' ');
		let thisrole = message.guild.roles.find('name', newrole);
		let permission = message.guild.member(message.author).hasPermissions('ADMINISTRATOR');
		 const d11x1x42x = new Discord.RichEmbed()
     .setDescription(`${emoji.wrong} | You do not have permission for that command! If you believe this is a mistake please add a high role has \`\`ADMINISTRATOR\`\` permission to yourself.`)  
     .setColor(embedFail);
     if(!permission) return message.channel.send(d11x1x42x);
     const NOTX1 = new Discord.RichEmbed()
     .setDescription(`${emoji.load} | Usage: \`\`${prefix}setrole <name>\`\``)  
     .setColor(embedFail);
	if(!newrole) return message.channel.send(NOTX1);
		  const CANT = new Discord.RichEmbed()
     .setDescription(`${emoji.load} | I can't find this role \`\`${newrole}\`\``)  
     .setColor(embedFail);
		if(!thisrole) return message.channel.send(CANT);
	  setrole[message.guild.id].role = newrole	
		  const D1 = new Discord.RichEmbed()
     .setDescription(`${emoji.right} | The tickets role has been set to \`\`${newrole}\`\``)  
     .setColor(embedSuccess);
	message.channel.send(D1);
		fs.writeFile("./setrole.json", JSON.stringify(setrole, null, 4), err => {
        if(err) throw err;
          });
	}
});


client.login(process.env.BOT_TOKEN);
