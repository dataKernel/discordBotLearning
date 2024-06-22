//function to generate all basic commands
function    read_commands(client, arrayCommands)
{
    client.on("messageCreate", (msg) => 
    {
        //secure that the bot doesn't reply to himeself recursively
        if (msg.author.bot)
            return;
        for (const key in arrayCommands) {
            if (msg.content == key)
                msg.reply(arrayCommands[key]);
        }
    });
}

//function to generate all slash commands
//important penser a refacto la fonction avec des objets pr les slash cmd
function    read_slash_commands(client, arraySlashCommands)
{
    client.on('interactionCreate', (interaction) => 
    {
        let     a, b;
        if (!interaction.isChatInputCommand())
            return;
        for(const val of arraySlashCommands[0])
        {
            if(interaction.commandName == val)
            {
                a = interaction.options.get("a").value;
                b = interaction.options.get("b").value;
            }
        }
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
            case "embed":
                interaction.reply("embed fonction détéctée.. (test OK)");
                break;
            default:
                interaction.reply("error refacto switch (test KO)");
        }
    });
}

//functionalities export with module
module.exports = {read_commands, read_slash_commands};