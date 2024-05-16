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
//connection du client via token

//verification que le client soit en ligne en affichant le nom du bot
client.on("ready", (cl) => 
{
    console.log(`✅ ${cl.user.tag} is online`);
});
//test recup message 
client.on("messageCreate", (msg) =>
{
    if(msg.content == "salut le bot")
        msg.reply("Salut, je suis un noob iron 4 pour l'instant, tu veux koa?");
    else if(msg.content == "bot de merde")
        msg.reply(":(");
});
