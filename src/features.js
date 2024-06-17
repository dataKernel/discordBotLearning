require('discord.js');

const   discord = require("discord.js");
//associative array to manage all basics static commands
const   arrayCommands =
{
    "!commands": "liste de commandes:\n !alive\n!dead\n!everyone\n!info_bot\n!version\n!race",
    "!alive": "oui tout fonctionne je suis en vie",
    "!dead": "laen ne pense qu'a tuer f2 a click toss...",
    "!everyone": "@everyone Ecoutez moi c'est important.. euh en fait, j'ai oublié :/ (calixe changed)",
    "!info_bot": `Bot_id: (en cours.. some bugs)`,
    "!version": `Bot_version: ${discord.version}`,
    "!race": "Protoss are OP, Zergs are brainDead, Humans are unskilled",
    "!test": "je suis un test de ce qu'il y a de plus basique.. :/"
};

//function to generate all basic commands
function    read_commands(client)
{
    client.on("messageCreate", (msg) => 
    {
        //secure that the bot doesn't reply to himeself recursively
        if (msg.author.bot)
            return;
        for (var key in arrayCommands) {
            if (msg.content == key)
                msg.reply(arrayCommands[key]);
        }
    });
}

//function to generate all slash commands
function    read_slash_commands(client)
{
    client.on('interactionCreate', (interaction) => 
    {
        if (!interaction.isChatInputCommand())
            return;
        const a = interaction.options.get("a").value;
        const b = interaction.options.get("b").value;
        switch(interaction.commandName)
        {
            case "add":
                interaction.reply(`(ADD_OP) -> Result: ${a + b}`);
                break;
            case "sub":
                interaction.reply(`(SUB_OP) -> Result: ${a - b}`);
                break;
            case "mul":
                interaction.reply(`(MUL_OP) -> Result: ${a * b}`);
                break;
            case "div":
                interaction.reply(`(DIV_OP) -> Result: ${a / b}`);
                break;
            case "mod":
                interaction.reply(`(MOD_OP) -> Result: ${a % b}`);
                break;
            default:
                interaction.reply("error refacto switch (test KO)");
        }
    });
}

//functionalities export with module
module.exports = {read_commands, read_slash_commands};




