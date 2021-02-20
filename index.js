// index.js
const dotenv = require('dotenv');
dotenv.config();
const Discord = require('discord.js');
const client = new Discord.Client();

const keyWords = 
[
    "mathpig",
    "silly",
];

const receivedResponseMap = 
{
    "mathpig" : "You Irish S.O.B",
    "silly": "No U!"
};

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.TOKEN);

client.on('message', message => {
    console.log("Received: %s", message.content);
    
    if(isKeyWord(message.content)){ 
        console.log("Keyword received master!");
        // message.channel.send(getResponse(message.content));
    }
});

function isKeyWord(received){ 
    return (keyWords.indexOf(received) >= 0);
}

function compare(strOne, strTwo){ 
    return (strOne === strTwo);
}

function bruteSearch(ar, el){ 
    ar.forEach(arEl => {
        if(compare(el, arEl)){ 
            return true;
        }
    });
    return false;
}

function binarySearch(ar, el, compare_fn) {
    var m = 0;
    var n = ar.length - 1;
    while (m <= n) {
        var k = (n + m) >> 1;
        var cmp = compare_fn(el, ar[k]);
        if (cmp > 0) {
            m = k + 1;
        } else if(cmp < 0) {
            n = k - 1;
        } else {
            return k;
        }
    }
    return -m - 1;
}

function getResponse(received){ 
    return receivedResponseMap.received;
}