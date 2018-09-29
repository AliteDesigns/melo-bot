const Discord = require ("discord.js");

const PREFIX = "&"

var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "I dont care..."
];

var howgay = [
    "You are 0% gay :gay_pride_flag: ",
    "You are 1% gay :gay_pride_flag: ",
    "You are 3% gay :gay_pride_flag: ",
    "You are 5% gay :gay_pride_flag: ",
    "You are 10% gay :gay_pride_flag: ",
    "You are 14% gay :gay_pride_flag: ",
    "You are 17% gay :gay_pride_flag: ",
    "You are 24% gay :gay_pride_flag: ",
    "You are 37% gay :gay_pride_flag: ",
    "You are 46% gay :gay_pride_flag: ",
    "You are 52% gay :gay_pride_flag: ",
    "You are 58% gay :gay_pride_flag: ",
    "You are 75% gay :gay_pride_flag: ",
    "You are 78% gay :gay_pride_flag: ",
    "You are 83% gay :gay_pride_flag: ",
    "You are 89% gay :gay_pride_flag: ",
    "You are 93% gay :gay_pride_flag: ",
    "You are 96% gay :gay_pride_flag: ",
    "You are 98% gay :gay_pride_flag: ",
    "You are 99% gay :gay_pride_flag: ",
    "You are 100% gay :gay_pride_flag: ",
    "You are 120% gay! :gay_pride_flag: "
];

var bot = new Discord.Client();

bot.user.setGame('&help for help!')

bot.on("message", function(message) {
    console.log(message.content);
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLocaleLowerCase()) {
        case "ping":
            message.channel.sendMessage(":ping_pong: Pong!");
            break;
        case "8ball":
            if (args[1]) {
                message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            } else {
                message.channel.sendMessage("Can't read that");
            }
            break;
        case "howgay":
            message.channel.sendMessage(howgay[Math.floor(Math.random() * howgay.length)]);
            break;
        case "help":
            var embed = new Discord.RichEmbed()
                .setTitle(":sparkles: **Commands list** :sparkles: ")
                .addField("help1", "Fun commands list")
                .addField("help2", "Other commands")
            message.channel.sendEmbed(embed);
            break;
        case "help1":
            var embed = new Discord.RichEmbed()
                .setTitle(":tada: **Fun commands** :tada:")
                .addField("howgay", "Tells you how gay you are")
                .addField("8ball", "The bot will answer your question")
            message.channel.sendEmbed(embed);
            break;
        case "help2":
            var embed = new Discord.RichEmbed()
                .setTitle(":question: **Other commands** :question:")
                .addField("avatar", "Shows your avatar")
                .addField("invite", "Gives you the invite link to invite Melodius")
            message.channel.sendEmbed(embed);
            break;
        case "avatar":
            var embed = new Discord.RichEmbed()
                .setImage(message.author.avatarURL)
                .setFooter("Bam, your profile pic!")
            message.channel.sendEmbed(embed);
            break;
        default:
            message.channel.sendMessage("Invaild command");
        case "invite":
            var embed = new Discord.RichEmbed()
                .setDescription("__**Invite Melodius to your server!**__ https://discordapp.com/oauth2/authorize?client_id=490271978935287818&scope=bot&permissions=2146958847")
            message.channel.sendEmbed(embed);
            break;
    }
});

bot.login(process.env.BOT_TOKEN);
