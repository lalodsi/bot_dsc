const Discord = require('discord.js');
const bot = new Discord.Client();

const languajes = ['js','py','c','java',]


bot.on('ready', () => {
    console.log(`Bot ready as ${bot.user.tag}`);
});

//Tipo de instrucción: !lenguaje:código
/*
1. Revisar que se encuentre el operador !
2. Revisar que la instrucción termine con ':'
3. leer el lenguaje a utilizar y verificar que sea soportado
4. Imprimir el algoritmo hecho
*/
bot.on('message', (mensaje)=>{
    //1.
    if(mensaje.content.charAt(0) ==="!"){
        var languaje = "";
        //2.
        Array.from(mensaje.content).forEach( (element, index) => {
            if(element === ':'){
                console.log(index);
                break;
            }
            languaje.concat(element);
        });
        //

        for(let i = 0; i <5; i++){
            if(!mensaje.content.charAt(i+1) === ':'){
                languaje.concat(mensaje.content.charAt(i+1));
            }
            else{
                break;
            }
        }
        mensaje.reply('Lenguaje a utilizar: '.concat(languaje));
        languajes.forEach(element => {
            if(languaje === "element"){
                console.log(`EL lenguaje ${element} se encuentra disponible`)
            }
        });
    }
    if(mensaje.content.substring(0,9) === "!Solucion"){
        mensaje.reply('Tu solución fue: \n'.concat(mensaje.content.substring(9)));
    }
});


bot.login('ODIxMTA2NDk0MjIwMDA5NTYz.YE-5Aw.oP564_t51k1ftnCW8kOgBvBuMYE');