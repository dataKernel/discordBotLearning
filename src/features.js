//-------------------------- REGISTERY SLASH COMMANDS ---------------------------------

const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

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
    client.on('messageCreate', (msg) => 
    {
        //secure that the bot doesn't reply to himeself recursively
        if (msg.author.bot)
            return;
        for (const key in arrayCommands) 
        {
            if(msg.content == key && key == "!channel")
                msg.channel.send(arrayCommands[key]);
            else if(msg.content == key)
                msg.reply(arrayCommands[key]);
        }
    });
}

//function to generate args array based on interaction object
function    get_interaction_array_args(interaction)
{
    const   array = new Array();
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
                for(const valEmbed in ObjSlashCommands.embedArray)
                {
                    if(interaction.commandName == valEmbed)
                    {
                        interaction.reply(
                        {
                            embeds: [ObjSlashCommands.embedArray[valEmbed]]
                        });
                        return;        
                   }
                }
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
                        return;
                    }
                }
            }
        }
    });
}

//function to launch basic buttons representing specific roles
function    launch_roles(client)
{
    //define the roles we want to manage
    const   roles =
    [
        {
            id: '1258890977796685964',
            label: "DEBUTANT"
        },
        {
            id: '1258891284517621953',
            label: "INTERMEDIAIRE"
        },
        {
            id: '1258891366730043412',
            label: "EXPERT"
        }
    ];

    function launch_roles(client) {
        //define the roles we want to manage
        const roles =
            [
                {
                    id: '1258890977796685964',
                    label: "DEBUTANT"
                },
                {
                    id: '1258891284517621953',
                    label: "INTERMEDIAIRE"
                },
                {
                    id: '1258891366730043412',
                    label: "EXPERT"
                }
            ];

    client.on('ready', async (client) => 
    {
        //try-catch testing
        try 
        {
            const   channel = await client.channels.cache.get('1231888195373891676')
            if(!channel) return; //check if the channel is valid
            const   row = new ActionRowBuilder();

            for(const val of roles)
            {
                const   buttonBuilder = new ButtonBuilder();
                
                row.components
                .push(buttonBuilder.setCustomId(val.id).setLabel(val.label))
                if(val.label == "DEBUTANT")
                    buttonBuilder.setStyle(ButtonStyle.Primary);
                else if(val.label == "INTERMEDIAIRE")
                    buttonBuilder.setStyle(ButtonStyle.Secondary);
                else if(val.label == "EXPERT")
                    buttonBuilder.setStyle(ButtonStyle.Danger);
            }
            channel.send({
                content: "ADD or REMOVE a role below.",
                components: [row]
            });
        }
        catch (error) 
        {
            console.log(error);
        }
    });
}

//functionalities export with module
module.exports = 
{
    //calc functions
    add_op, sub_op, mul_op, div_op, mod_op,
    //events command generic functions
    read_commands, read_slash_commands,
    //roles management via button in channel
    launch_roles
};