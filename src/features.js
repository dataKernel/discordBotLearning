require('discord.js');

const   discord = require("discord.js");
//associative array to manage all basics static commands
const arrayCommands =
{
    "!commands": "liste de commandes:\n !alive\n!dead\n!everyone\n!info_bot\n!version\n!race",
    "!alive": "oui tout fonctionne je suis en vie",
    "!dead": "laen ne pense qu'a tuer f2 a click toss...",
    "!everyone": "@everyone Ecoutez moi c'est important.. euh en fait, j'ai oublié :/ (calixe changed)",
    "!info_bot": `Bot_id: (en cours.. some bugs)`,
    "!version": `Bot_version: ${discord.version}`,
    "!race": "Protoss are OP, Zergs are brainDead, Humans are unskilled"
};

//function to generate all basic commands
function    read_commands(client)
{
    client.on("messageCreate", (msg) => {
        //secure that the bot doesn't reply to himeself recursively
        if (msg.author.bot)
            return;
        for (var key in arrayCommands) {
            if (msg.content == key)
                msg.reply(arrayCommands[key]);
        }
    });
}

//functionalities export with module
module.exports = {read_commands};