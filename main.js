const Discord = require("discord.js");
const client = new Discord.Client({Intens: 3276799});
const config = require("./config");
//import {token} from "./config.js"





client.on("ready", () => {
    console.log("feliciter il est en ligne");
});

client.login(config.token);

