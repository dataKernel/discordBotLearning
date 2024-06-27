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
const arrayCommands =
{
    "!commands": "liste de commandes:\n !alive\n!dead\n!everyone\n!info_bot\n!version\n!race",
    "!alive": "oui tout fonctionne je suis en vie",
    "!everyone": "@everyone Ecoutez moi c'est important.. euh en fait, j'ai oublié :/ (calixe changed)",
    "!race": "Protoss are OP, Zergs are brainDead, Humans are unskilled",
    "!test": "Je suis un test..."
};
//embed object definition
const   embed_white = new discord.EmbedBuilder()
    .setTitle("---EMBED_WHITE_v1.0---")
    .setDescription("Je suis blanc. Je suis blanc. Je suis blanc. Je suis blanc.")
    .setColor(0xFFFFFF);
const   embed_black = new discord.EmbedBuilder()
    .setTitle("---EMBED_BLACK-v1.0---")
    .setDescription("Je suis noir. Je suis noir. Je suis noir. Je suis noir. ")
    .setColor(0x000000);
const   embed_pinky = new discord.EmbedBuilder()
    .setTitle("---EMBED_PINKY_v1.0")
    .setTitle("Je suis rose. Je suis rose. Je suis rose. Je suis rose. Je suis rose. ")
    .setColor(0xFC0C0F);
//embeds array
const   embedArray = {embed_white, embed_black, embed_pinky};
//associative array to manage all basics commands

//slash command object to define all the slash commands by category
const ObjSlashCommands =
{
    //--------- MEMBERS -----------
    embedArray,
    //--------- METHODS ------------
    //methods calc
    calc:
    {
        add: function (a, b) { return (features.add_op(a, b)) },
        sub: function (a, b) { return (features.sub_op(a, b)) },
        mul: function (a, b) { return (features.mul_op(a, b)) },
        div: function (a, b) { return (features.div_op(a, b)) },
        mod: function (a, b) { return (features.mod_op(a, b)) },
    }
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