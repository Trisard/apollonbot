const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = ">";

//Ready
bot.on('ready' , function() {
    console.log("I'm Ready !");
});

//Commande d'aide
bot.on('message' , message => {
    if(message.content[0] === PREFIX) {
        if(message.content === '>help') {
            message.author.createDM().then(channel => {
                return channel.send({embed:{
                    color: 124565,
                    description: 
`**Liste des commandes:**
>hello
>roll
>Joss
>Anemoz
>Leo
>Honorina
>Gay [@mention]
>play [sac, tuturu]
`
                }});
            }).catch(console.log)
        }
    }
});


//Commandes textuels simple
bot.on('message' , message => {
    if(message.content[0] === PREFIX) {
        switch(message.content){
            case '>hello':
                message.channel.send('world !');
                break;
            case '>Joss':
                message.channel.send('Pour la mère patrie !',  {tts: true});
                break;
            case '>Anemoz':
                message.channel.send("Assistante sociale, j'écoute !" , {tts: true});
                break;
            case '>Leo':
                message.channel.send('Leo va se faire bannir !', {tts: true});
                break;
            case '>Honorina':
                message.channel.send('OUESH #45°', {tts: true});
                break;
            case '>roll':
                let rdm = Math.floor(Math.random() * Math.floor(101));
                message.channel.send(rdm);
                break;
            default:
        }
    }
});

//Commandes textuels à arg
bot.on('message' , message => {
    if(message.content[0] === PREFIX) {
        let splitMessage = message.content.split(" ");
        if(splitMessage.length === 2) {
            switch(splitMessage[0]){
                case '>gay':
                    let rdm = Math.floor(Math.random() * Math.floor(2));      
                    if(rdm == 1) {
                        message.channel.send(message.mentions.users.first() + " est GAYYYYYYYY !");
                    }
                    else {
                     message.channel.send(message.mentions.users.first() + " n'est pas GAYYYYYYYY !");
                    }
                    break;
                default:
            }
        }
    }
});


//Commandes pour channel vocal
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
                            case 'tuturu':
                                dispatcher = connection.playFile('./sons/tuturu.mp3');
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

bot.login('NDQ1Njk2MDg1MjkwMzg1NDA4.DduPNA.KS1fFQ37sfSClegxXacKEpD7jgg'); //TOKEN
