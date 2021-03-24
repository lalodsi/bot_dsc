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

//Tipo de instrucción: !palabra
bot.on('message', (mensaje)=>{
    if(mensaje.content ==="!CC-stat"){
        mensaje.reply("Hola!");
        // Array.from(mensaje.content).forEach( (element, index) => {
        //     languaje.concat(element);
        // });
    }
        //
        //
        // for(let i = 0; i <5; i++){
        //     if(!mensaje.content.charAt(i+1) === ':'){
        //         languaje.concat(mensaje.content.charAt(i+1));
        //     }
        //     else{
        //         break;
        //     }
        // }
        // mensaje.reply('Lenguaje a utilizar: '.concat(languaje));
        // languajes.forEach(element => {
        //     if(languaje === "element"){
        //         console.log(`EL lenguaje ${element} se encuentra disponible`)
        //     }
        // });
    // }
    // if(mensaje.content.substring(0,9) === "!Solucion"){
    //     mensaje.reply('Tu solución fue: \n'.concat(mensaje.content.substring(9)));
    // }
});

