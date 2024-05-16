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
//création tableau associatif avec des commandes de bases
const   arrayCommands =
{
    "!everyone": "@everyonne Ecoutez moi c'est important.. euh en fait, j'ai oublié :/",
    "!info_bot": `Bot_id: (en cours.. some bugs)`,
    "!version": `Bot_version: ${discord.version}`,
    "!bot de merde" : ":(",
    "!race": "Protoss are OP, Zergs are brainDead, Humans are unskilled"
}

client.on("messageCreate", (msg) =>
{
    for(var key in arrayCommands)
    {
        if(msg.content == key)
            msg.reply(arrayCommands[key]);
    }
});
