const Discord = require('discord.js');
const bot = new Discord.Client();

//Lectura del token para la conexión del bot
const fs = require("fs"),
    NOMBRE_ARCHIVO = "token.txt";
fs.readFile(NOMBRE_ARCHIVO, 'utf8', (error, datos) => {
    if (error) throw error;
    console.log("Token leído exitosamente");
    bot.login(datos);
})

bot.on('ready', () => {
    console.log(`Bot ready as ${bot.user.tag}`);
});

//Instrucción: !CC-stat
bot.on('message', (mensaje)=>{
    if(mensaje.content ==="!CC-stat"){
        mensaje.reply("Hola!");
    }
});

