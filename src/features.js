//-------------------------- REGISTERY SLASH COMMANDS ---------------------------------
//function to add 2 numbers
function    add_op(interaction, a, b)
{
    let     res;
    let     str;
    if(interaction.commandName == "add")
        res = a + b;
    str = `(ADD_OP) -> Result:${res}`;
    return(str);
}
//function to sub 2 numbers
function    sub_op(interaction, a, b)
{
    let     res;
    let     str;

    if(interaction.commandName == "sub")
        res = a - b;
    str = `(SUB_OP) -> Result: ${res}`;
    return(str);
}

//function to generate all basic commands
function    read_commands(client, arrayCommands)
{
    client.on("messageCreate", (msg) => 
    {
        //secure that the bot doesn't reply to himeself recursively
        if (msg.author.bot)
            return;
        for (const key in arrayCommands) 
        {
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
        if (!interaction.isChatInputCommand())
            return;
        
    });
}

//functionalities export with module
module.exports = 
{
    add_op,
    sub_op,
    read_commands, 
    read_slash_commands
};