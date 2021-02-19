// index.js
const dotenv = require('dotenv');
dotenv.config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.TOKEN);

client.on('message', message => {
    console.log(message.content);
    if (message.content === '!silly') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('No U!');
    }
});