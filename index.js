const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const bot = new discord.Client();

bot.on("ready", async () => {

    console.log(`${bot.user.username} is online!`);

    bot.user.setActivity("progres", { type: "PLAYING" });

});


bot.on("message", async message => {

    //als bot bericht stuurt stuur dan return
    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);


    if (command === `${prefix}hallo`) {
        return message.channel.send("hallo server member");

    }

    if (command === `${prefix}botinfo`) {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setDescription("Bot info")
            .setColor("#0037ff")
            .setThumbnail(botIcon)
            .addField("bot naam", bot.user.username)
            .addField("Gemaakt op", bot.user.createdAt)

        return message.channel.send(botEmbed);

    }

    if (command === `${prefix}serverinfo`) {

        var icon = message.guild.iconURL;

        var serverEmbed = new discord.MessageEmbed()
            .setDescription("Server info")
            .setColor("#0037ff")
            .setThumbnail(icon)
            .addField("Je bent gejoint op", message.member.joinedAt)
            .addField("Totaal aantal members", message.guild.memberCount)

        return message.channel.send(serverEmbed)

    }

    if (command === `${prefix}help`) {

        var botEmbed = new discord.MessageEmbed()
            .setDescription("Help")
            .setColor("#0037ff")
            .setThumbnail(botIcon)
            .addField("/helpcommands", "Alle commands")
            .addField("/help", "Hier moet nog wat komen")


        return message.channel.send(botEmbed);
    }

    if (command === `${prefix}helpcommands`) {

        var botEmbed = new discord.MessageEmbed()
            .setDescription("Commands")
            .setColor("#0037ff")
            .setThumbnail(botIcon)
            .addField("/helpcommands", "Dit")
            .addField("/hallo", "laat de bot hallo zeggen")
            .addField("/botinfo", "laat de bot info zien")
            .addField("/serverinfo", "laat server info zien");


        return message.channel.send(botEmbed);

    }

});


bot.login(process.env.token);