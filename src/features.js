//-------------------------- REGISTERY SLASH COMMANDS ---------------------------------
//function to add 2 numbers
function    add_op(a, b)
{
    let     res;
    let     str;
    
    res = a + b;
    str = `(ADD_OP) -> Result:${res}`;
    return(str);
}
//function to sub 2 numbers
function    sub_op(a, b)
{
    let     res;
    let     str;

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

//function to generate args array based on interaction object
function    get_interaction_args(interaction)
{
    const   array = [];

    array[0] = interaction.options.get("a").value;
    array[1] = interaction.options.get("b").value;

    return(array); 
}

//function to generate all slash commands
function    read_slash_commands(client, arraySlashCommands)
{
    client.on('interactionCreate', (interaction) => 
    {   
        const   interactionArgs = get_interaction_args(interaction);
        if (!interaction.isChatInputCommand())
            return;
        console.log(interactionArgs);
    });
}

//functionalities export with module
module.exports = 
{
    add_op, sub_op,
    get_interaction_args,
    read_commands, read_slash_commands,
};