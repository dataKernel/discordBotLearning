//recup de nos variables d'env
require('dotenv').config();
//recup de l'objet discord -- la base
const   discord = require('discord.js');
const   REST_CLASS = discord.REST; //c'est une classe
const   routes = discord.Routes;
//liste de toutes les commandes à pré-enregistrer
const   commands = 
[
    {
        name: "ma_premiere_slash_cmd",
        description: "dire coucou"
    }
];
//loading rest API for the server
const   rest = new REST_CLASS({version: '10'}).setToken(process.env.TOKEN);
//fonction qui effectue l'enregistrement des commandes 
async function register_cmd()
{
    
    console.log(process.env);
    try 
    {
        console.log("Enregistrement des slash commandes...");
        await rest.put(routes.applicationGuildCommand(process.env.CLIENT_ID, process.env.GUILD_ID),
        {body: commands}
    )
    console.log("Enregistrement des commandes effectuées");
    } 
    catch (error) 
    {
        console.log(`Il y a eu une erreur, info: ${error}`);    
    }
}
register_cmd();