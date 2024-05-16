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
//verification du client prêt à se connecter en affichant le nom du bot
client.on("ready", (cl) => 
{
    console.log(`✅ ${cl.user.tag} is online`);
});
client.on("messageCreate", (msg) =>
{
    console.log(msg);
});
client
//connection du client via token
