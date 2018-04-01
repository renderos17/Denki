var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
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
    if (message.substring(0, 1) == '$') {
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
                    message: 'You should watch mateus stream!'
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
                    message: 'If you were looking for Rythm, try using "!" instead of "$".'
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'List of commands: "ping", "meat", "alooksis", "help", "clever", "recyclerush", "civilwar", "vexvideo", "powerup", "alexis", "hockeyjerseys", "katana", "whatarewegoingtodo", "screech".'
                });
            break;
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
            break;
            case 'recyclerush':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://i.imgur.com/bYDhFbQ.jpg'
                });
            break;
            case 'civilwar':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://i.imgur.com/sd5OO1Q.jpg'
                });
            break;
            case 'vexvideo':
                bot.sendMessage({
                    to: channelID,
                    message: 'Check out the latest VEX Video by Alexis! https://youtu.be/LgbIsyNYmNQ'
                });
            break;
            case 'powerup':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://i.imgur.com/h9TUEUX.jpg'
                });
            break;
            case 'alexis':
            	bot.sendMessage({
            		to: channelID,
            		message: 'I know that guy! He made me!'
            	});
            break;
            case 'hockeyjerseys':
                bot.sendMessage({
                    to: channelID,
                    message: 'You should check out the new hockey jersey designs Alexis made!'
                });
            break;
            case 'katana':
                bot.sendMessage({
                    to: channelID,
                    message: 'It looks like Keyzer is going to make another Katana. ohboy.'
                });
            break;
            case 'whatarewegoingtodo':
                bot.sendMessage({
                    to: channelID,
                    message: 'WERE GONNA FUCKIN WIN DAMMIT'
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'WEVE GOT THE CODE'
                });
               bot.sendMessage({
                    to: channelID,
                    message: 'WEVE GOT THE KIDS'
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'HELL, WEVE EVEN GOT THE BOT'
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'THIS IS OUR YEAR, AND WERE GONNA WIN'
                });
            break;
            case 'screech':
                bot.sendMessage({
                    to: channelID,
                    message: '*keyeztisic screeching*'
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'https://cdn.discordapp.com/attachments/380230187431886870/424262304436322305/PicsArt_03-16-12.46.44.jpg'
                });
            break;
         }
     }
});