const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Senpai");
    console.log("Akumi est bien connecté :3");
});

bot.login("process.env.NDU2NDYwOTg5NTk2OTU4NzMx.DgLOpA.qahlVJmWxdppHSiOiUiqojTRDuM");
