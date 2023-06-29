const Discord = require("discord.js");
const client = new Discord.Client({Intens: 3276799});
const config = require("./config");
//import {token} from "./config.js"



//const token = "MTA4Njk4ODQzNzEzMjk1MTU5Mg.GWbkfk.M4W1vf84gYPB1PrNUVLO5k23egpsjlvQbKIb1o"

client.on("ready", () => {
    console.log("feliciter il est en ligne");
});

client.login(config.token);

