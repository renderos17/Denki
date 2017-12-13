var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
const Cleverbot = require("cleverbot-node");
const client = new Discord.Client();
const clbot = new Cleverbot;
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `#`
    if (message.includes('keyzer') || message.includes('Keyzer')){
            bot.sendMessage({
                to: channelID,
                message: '...'
            });
    }
    if (message.includes('alexis') || message.includes('Alexis')){
            bot.sendMessage({
                to: channelID,
                message: 'Daddy?'
            });
    }
    if (message.substring(0, 1) == '#') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            case 'meat':
                bot.sendMessage({
                    to: channelID,
                    message: '@everyone'
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'https://www.twitch.tv/meateus'
                });
            break;
            case 'alooksis':
                bot.sendMessage({
                    to: channelID,
                    message: 'Come watch Alexis stream!'
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'https://www.twitch.tv/renderos17'
                });
            break;
            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pfft, help? What kind of bot do you think I am?'
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'If you were looking for Rythm, try using "!" instead of "#".'
                });
            break;
            case 'kickoff':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://days.to/6-january/2018'
                });
            case 'clever':
                bot.sendMessage({
                    to: channelID,
                    message: 'Initializing higher thinking...'
                });
                 bot.sendMessage({
                    to: channelID,
                    message: 'Putting on my glasses...'
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'Sweeping up the bugs...'
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'Greetings, I am Denki.'
                });
         }
     }
});