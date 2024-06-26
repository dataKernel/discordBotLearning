//get env variables
require('dotenv').config();
//get dispord object
const   discord = require('discord.js');
const   REST_CLASS = discord.REST;
const   routes = discord.Routes;
const   OptionTypes = discord.ApplicationCommandOptionType;

//factory functions for loading similar objects (operations)
function    factory_operations(name, description)
{
    const   object =
    {
        name: name,
        description: description,
        options: [
            {
                name: "a",
                description: "the first number",
                type: OptionTypes.Number,
                required: true
            },
            {
                name: "b",
                description: "the second number",
                type: OptionTypes.Number,
                required: true
            }
        ]
    };
    return(object);
}
//pre-register all slash commands
const   commands = 
[
    factory_operations("add", "(?): Add two numbers."),
    factory_operations("sub", "(?): Sub two numbers."),
    factory_operations("mul", "(?): Mul two numbers."),
    factory_operations("div", "(?): Div two numbers."),
    factory_operations("mod", "(?): Mod two numbers."),
    {
        name: "embeds",
        description: "this is an embed test"
    },
    //follow up cmd
];
//API REST loading
const   rest = new REST_CLASS({version: '10'}).setToken(process.env.TOKEN);
//async function to register all the slash commands  
async function register_cmd()
{
    try 
    {
        console.log("Enregistrement des slash commandes...");
        await rest.put(routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), {body: commands});
        console.log("Enregistrement des commandes effectuées");
    } 
    catch (error)
    {
        console.log(`Il y a eu une erreur, info: ${error}`);    
    }
}
register_cmd();