//get env variables
require("dotenv").config();
//get fundamental features
const   features = require("./features.js");

const   discord = require("discord.js");
//giving to the client the different authorizations
const   clientIntents =
{
    intents:
    [
        discord.IntentsBitField.Flags.Guilds,
        discord.IntentsBitField.Flags.GuildMembers,
        discord.IntentsBitField.Flags.GuildMessages,
        discord.IntentsBitField.Flags.MessageContent
    ]
};
//associative array to manage all basics static commands
const arrayCommands =
{
    "!commands": "liste de commandes:\n !alive\n!dead\n!everyone\n!info_bot\n!version\n!race",
    "!alive": "oui tout fonctionne je suis en vie",
    "!everyone": "@everyone Ecoutez moi c'est important.. euh en fait, j'ai oublié :/ (calixe changed)",
    "!info_bot": `Bot_id: (en cours.. some bugs)`,
    "!race": "Protoss are OP, Zergs are brainDead, Humans are unskilled",
    "!test": "je suis un test de ce qu'il y a de plus basique.. :/"
};
//array to manage all slash commands
//penser a refacto avec des obj
const arraySlashCommands = [["add", "sub", "mul", "div", "mod"], "embed"];


const   client = new discord.Client(clientIntents);
//client connection via token
client.login(process.env.TOKEN);
//checking the client is online by checking his online status
client.on("ready", (cl) => 
{
    console.log(`✅ ${cl.user.tag} is online`);
});

//reading all basic commands from array via features
features.read_commands(client, arrayCommands);
//reading all slash commands from array via features
features.read_slash_commands(client, arraySlashCommands);