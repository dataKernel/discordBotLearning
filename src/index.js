//get env variables
require("dotenv").config();
//get fundamental features
const   features = require("./features.js");

const   discord = require("discord.js");
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

const   client = new discord.Client(clientIntents);
//cleint connection via token
client.login(process.env.TOKEN);
//checking the client is online by checking his online status
client.on("ready", (cl) => 
{
    console.log(`✅ ${cl.user.tag} is online`);
});

//test des basic commandes
features.read_commands(client);
