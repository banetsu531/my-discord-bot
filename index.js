const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content === 'こんにちは') {
    message.reply('やあ！');
  }
});

client.login(process.env.TOKEN);
