//-------------------------- REGISTERY SLASH COMMANDS ---------------------------------
//function to additionate 2 numbers
function    add_op(a, b)
{
    let     res;
    let     str;
    
    res = a + b;
    str = `(ADD_OP) -> Result: ${res}`;
    return(str);
}
//function to substract 2 numbers
function    sub_op(a, b)
{
    let     res;
    let     str;

    res = a - b;
    str = `(SUB_OP) -> Result: ${res}`;
    return(str);
}
//function to multiply 2 numbers
function    mul_op(a, b)
{
    let     res;
    let     str;

    res = a * b;
    str = `(MUL_OP) -> Result: ${res}`;
    return(str);
}
//function to divide 2 numbers
function    div_op(a, b)
{
    let     res;
    let     str;

    res = a / b;
    str = `(DIV_OP) -> Result: ${res}`;
    return(str);
}
function    mod_op(a, b)
{
    let     res;
    let     str;

    res = a % b;
    str = `(MOD_OP) -> Result: ${res}`;
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
function    get_interaction_array_args(interaction)
{
    const   array = [];

    array[0] = interaction.options.get("a").value;
    array[1] = interaction.options.get("b").value;

    return(array); 
}

//function to generate all slash commands
function    read_slash_commands(client, ObjSlashCommands)
{
    client.on('interactionCreate', (interaction) => 
    {   
        if (!interaction.isChatInputCommand())
            return;
        //generic object iteration
        for (const val in ObjSlashCommands)
        {
            if(val == "embedArray")
            {
                interaction.reply(".");
                return;
            }
            else if(val == "calc")
            {
                //iteration trough calc associative array to get the right function
                for (const valCalc in ObjSlashCommands.calc)
                {
                    if(interaction.commandName == valCalc)
                    {
                        const   args = get_interaction_array_args(interaction);
                        interaction.reply(ObjSlashCommands.calc[valCalc](args[0], args[1]));
                    }
                }
            }
        }
    });
}
//functionalities export with module
module.exports = 
{
    //calc functions
    add_op, sub_op, mul_op, div_op, mod_op,
    //events command generic functions
    read_commands, read_slash_commands
};