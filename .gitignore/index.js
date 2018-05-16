const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = ">";

//Ready
bot.on('ready' , function() {
    console.log("I'm Ready !");
});

bot.on('message' , message => {
    if(message.content[0] === PREFIX) {
        if(message.content === '>help') {
            message.author.createDM().then(channel => {
                return channel.send({embed:{
                    color: 124565,
                    description: 
`**Liste des commandes:**
>hello
>Joss
>Anemoz
>Leo
>Honorina
>Gay [@mention]
`
                }});
            }).catch(console.log)
        }
    }
});

bot.on('message' , message => {
    if(message.content[0] === PREFIX) {
        if(message.content === '>hello') {
            message.channel.send('world !');
        }
    }
});

bot.on('message' , message => {
    if(message.content[0] === PREFIX) {
        if(message.content === '>Joss') {
            message.channel.send('Pour la mère patrie !',  {tts: true});
        }
    }
});

bot.on('message' , message => {
    if(message.content[0] === PREFIX) {
        if(message.content === '>Anemoz') {
            message.channel.send("Assistante sociale, j'écoute !" , {tts: true});
        }
    }
});

bot.on('message' , message => {
    if(message.content[0] === PREFIX) {
        if(message.content === '>Leo') {
            message.channel.send('Leo va se faire bannir !', {tts: true});
        }
    }
});

bot.on('message' , message => {
    if(message.content[0] === PREFIX) {
        let splitMessage = message.content.split(" ");
        let rdm = Math.floor(Math.random() * Math.floor(2));
        if(splitMessage.length === 2) {
            if(splitMessage[0] === '>gay') {      
                if(rdm == 1) {
                    message.channel.send(message.mentions.users.first() + " est GAYYYYYYYY !");
                }
                else {
                    message.channel.send(message.mentions.users.first() + " n'est pas GAYYYYYYYY !");
                }
            }
        }
    }
});


bot.on('message' , message => {
    if(message.content[0] === PREFIX) {
        let splitMessage = message.content.split(" ");
        if(splitMessage.length === 2) {
            if(splitMessage[0] === '>play') {      
               if(message.member.voiceChannel){
                    message.member.voiceChannel.join().then(connection => {
                        switch(splitMessage[1]) {
                            case 'sac':
                                dispatcher = connection.playFile('./sons/sac.mp3');
                                dispatcher.on('error', e =>{
                                    console.log(e);
                                });
                                dispatcher.on('end', e =>{
                                    dispatcher = undefined;
                                    message.member.voiceChannel.leave();
                                });
                                break;       
                            default:
                                message.channel.send('son invalide');
                        }      
                    }).catch(console.log);
               }
               else{
                    message.channel.send('Rejoignez un channel vocal');
               }
            }
        }
    }
});


bot.on('message' , message => {
    if(message.content[0] === PREFIX) {
        if(message.content === '>Honorina') {
            message.channel.send('OUESH', {tts: true});
        }
    }
});

bot.login(process.env.TOKEN); //TOKEN
