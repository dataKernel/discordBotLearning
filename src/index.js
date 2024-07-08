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
    "!test": "Je suis un test...",
    "!channel": "Je suis un test de reply de channel et non de user (no tag).."
};
//embed object definition
const   embedWhite = new discord.EmbedBuilder()
    .setTitle("--- EMBED_WHITE_v1.0 ---")
    .setDescription("Je suis blanc. Je suis blanc. Je suis blanc. Je suis blanc.")
    .setColor(0xFFFFFF);
const   embedBlack = new discord.EmbedBuilder()
    .setTitle("--- EMBED_BLACK_v1.0 ---")
    .setDescription("Je suis noir. Je suis noir. Je suis noir. Je suis noir. ")
    .setColor(0x000000);
const   embedPink = new discord.EmbedBuilder()
    .setTitle("--- EMBED_PINKY_v1.0 ---")
    .setDescription("Je suis rose. Je suis rose. Je suis rose. Je suis rose. Je suis rose. ")
    .addFields(
    { 
        name: "Intro", 
        value: "Je suis une valeur_field rose qui flash bien sa race", 
        inline: true 
    },
    {
        name: "Desc",
        value: "Je suis une desc_field rose qui flash aussi mais bon, plus boring quoi..",
        inline: true
    })
    .setColor(0xFF33F3);
const   embedBasic = new discord.EmbedBuilder()
    .setTitle("[Just un embed basic fait en JS...]")
    .setColor(0x33FF5B);
//embeds array
const   embedArray = 
{
    embed_white: embedWhite,
    embed_black: embedBlack, 
    embed_pink: embedPink,
    embed_basic: embedBasic
};
//associative array to manage all basics commands

//slash command object to define all the slash commands by category
const ObjSlashCommands =
{
    //--------- MEMBERS -----------
    embedArray, 
    //--------- METHODS ------------
    //methods calc
    //roles: function() { return(featues.launch_roles(client)) },    
    calc:
    {
        add: function (a, b) { return(features.add_op(a, b)) },
        sub: function (a, b) { return(features.sub_op(a, b)) },
        mul: function (a, b) { return(features.mul_op(a, b)) },
        div: function (a, b) { return(features.div_op(a, b)) },
        mod: function (a, b) { return(features.mod_op(a, b)) },
    }
};
//-------------------- END_DEFINITIONS --------------------------

const   client = new discord.Client(clientIntents);
//client connection via token
client.login(process.env.TOKEN);
//checking the client is online by checking his online status
client.on('ready', (cl) => 
{
    console.log(`✅ ${cl.user.tag} is online`);
});

//reading all basic commands from array via features
features.read_commands(client, arrayCommands);
//reading all slash commands from array via features
features.read_slash_commands(client, ObjSlashCommands);
//adding or removing specific roles provided with button interaction
features.launch_roles(client);