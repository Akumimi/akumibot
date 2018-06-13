const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = ("/");

bot.on("ready", function() {
    bot.user.setGame("Senpai");
    console.log("Akumi est bien connecté :3");
});

bot.login("NDU2NDYwOTg5NTk2OTU4NzMx.DgLOpA.qahlVJmWxdppHSiOiUiqojTRDuM");

bot.on("message", message => {
    if (message.content === "salut"){
        message.reply("Hey ! :)");
        console.log('Hey salut ! :)')
    }

    if (message.content === prefix + "help"){
        message.channel.sendMessage("\n -/help pour afficher les commandes");
        console.log("commande help demandée !");
    }

    if (message.content === "sava ?"){
        message.reply("Bien bien et toi ? ^^");
        console.log('Sava ? oui et toi ? ^^')
    }
});
