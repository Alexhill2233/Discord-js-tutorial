var Discord = require("discord.js");
var config = require("./config.json");

var bot = new Discord.Client();

bot.on('ready', () => {
	console.log(`Bot has started! ${bot.user.username}`)
	bot.user.setActivity(`!help`)
	bot.user.setStatus('online')
});

bot.on('message', function (message) {
	if(message.author.equals(bot.user)) return;
	if(!message.content.startsWith(config.prefix)) return;
	var args = message.content.substring(config.prefix.length).split(" ");
	var command = args.shift().toLowerCase();

	if(command === "ping") {
		message.channel.send("Pong! :ping_pong: ");
	}

});

bot.login(config.token);