require("dotenv").config();

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
client.login(process.env.TOKEN);
//verification que le client soit en ligne en affichant le nom du bot
client.on("ready", (cl) => 
{
    console.log(`✅ ${cl.user.tag} is online`);
});
//création tableau associatif avec des commandes de bases
const   arrayCommands =
{
    "!commands": "liste de commandes:\n !alive\n!dead\n!everyone\n!info_bot\n!version\n!race",
    "!alive" : "oui tout fonctionne je suis en vie",
    "!dead" : "laen ne pense qu'a tuer f2 a click toss...",
    "!everyone": "@everyone Ecoutez moi c'est important.. euh en fait, j'ai oublié :/ (calixe changed)",
    "!info_bot": `Bot_id: (en cours.. some bugs)`,
    "!version": `Bot_version: ${discord.version}`,
    "!race": "Protoss are OP, Zergs are brainDead, Humans are unskilled"
};

client.on("messageCreate", (msg) =>
{
    //secure that the bot doesn't reply to himeself recursively
    if(msg.author.bot)
        return ;
    for(var key in arrayCommands)
    {
        if(msg.content == key)
            msg.reply(arrayCommands[key]);
    }
});
//execution des commandes slash
client.on('interactionCreate', (interaction) =>
{
    if(!interaction.isChatInputCommand())
        return;

    if(interaction.commandName == "test_cmd_slash")
        interaction.reply(`[CHECK INFOS BOT...]\n bot_name`);
});