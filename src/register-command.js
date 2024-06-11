//get env variables
require('dotenv').config();
//get dispord object
const   discord = require('discord.js');
const   REST_CLASS = discord.REST; //c'est une classe
const   routes = discord.Routes;
const   OptionTypes = discord.ApplicationCommandOptionType;
//pre-register all slash commands
const   commands = 
[
    {
        name: "test_cmd_slash",
        description: "(?): Ceci est un test (en attente des args pour de vrais slash cmd)."
    },
    {
        name: "add",
        description: "(?): Add two numbers.",
        options: [
            {
                name: "a",
                description: "the first number.",
                type: OptionTypes.Number,
                choices:[
                    {
                        name: "10",
                        value: 10
                    },
                    {
                        name: "100",
                        value: 100
                    },
                    {
                        name: "1000",
                        value: 1000
                    }
                ],
                required: true,
            },
            {
                name: "b",
                description: "the second number.",
                type: OptionTypes.Number,
                required: true,
            }
        ]
    }
];
//API REST loading
const   rest = new REST_CLASS({version: '10'}).setToken(process.env.TOKEN);
//async function to register all the commands  
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