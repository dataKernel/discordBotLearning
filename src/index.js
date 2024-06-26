//------------------ CONFIG ---------------------------
//get env variables
require("dotenv").config();
const   discord = require("discord.js");
//get fundamental features
const   features = require("./features.js");
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
//----------------- END_CONDIFG ----------------------

//----------------- DEFINITIONS ---------------------
//embed object definition
const   embed = new discord.EmbedBuilder()
.setTitle("Embed title")
.setDescription("Emebed description(...).");
//associative array to manage all basics commands
const arrayCommands =
{
    "!commands": "liste de commandes:\n !alive\n!dead\n!everyone\n!info_bot\n!version\n!race",
    "!alive": "oui tout fonctionne je suis en vie",
    "!everyone": "@everyone Ecoutez moi c'est important.. euh en fait, j'ai oublié :/ (calixe changed)",
    "!info_bot": `Bot_id: (en cours.. some bugs)`,
    "!race": "Protoss are OP, Zergs are brainDead, Humans are unskilled",
    "!test": "je suis un test de ce qu'il y a de plus basique.. :/"
};

//slash command object to define all the slash commands by category
const ObjSlashCommands =
{
    embeds: [embed],//embed needs an array of objects
    calc:
    {
        add: function (a, b) { return (features.add_op(a, b)) },
        sub: function (a, b) { return (features.sub_op(a, b)) },
        mul: function (a, b) { return (features.mul_op(a, b)) },
        div: function (a, b) { return (features.div_op(a, b)) },
        mod: function (a, b) { return (features.mod_op(a, b)) }
    },
};
//-------------------- END_DEFINITIONS --------------------------

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
features.read_slash_commands(client, ObjSlashCommands);