//Load user data
var name = localStorage.getItem("Name");
var birthdayDay = localStorage.getItem("Birthday-Day");
var birthdayMonth = localStorage.getItem("Birthday-Month");
var country = localStorage.getItem("Country");
var state = localStorage.getItem("State");
var town = localStorage.getItem("Town");

//Get user textInput from the DOM
var messageOutputElement = document.getElementById("assistant-message");


 
//Date Suff
var date = new Date();
var time = date.getHours() + ":" + date.getMinutes();


//Open webpage
function openWebpage(url) {
 window.location = url;
}

//Get the DOM elements and set them in variables
var versionElement = document.getElementById("version");
var messageOutputElement = document.getElementById("assistant-message");
var userTextInputElement = document.getElementById("user-text-input");

//Set version
var version = "1.0";
//var versionOutput = versionElement.innerText = "v" + version;


//Random Welcome Message
function welcomeMessage() {
 //Set variables
    var d = new Date();
    hours = d.getHours();
 var randomString;
 var randomStringFinal;
 var timeOfDayGreeting;
 if (hours < 12) {
 timeOfDayGreeting = "Good Morning";
 };

 if (hours < 18 && hours >= 12) {
 timeOfDayGreeting = "Good Afternoon";
 };

 if (hours >= 18) {
 timeOfDayGreeting = "Good Evening";
    };

    //Set the greetings
    randomString = [timeOfDayGreeting + ", how can I help?", "Hi, how are you today?", timeOfDayGreeting + "!"];

    //Chose a random number
    var randomStringFinal = Math.floor(Math.random() * randomString.length);

    //Apply that number to chose a geeting
    messageOutputElement.innerText = randomString[randomStringFinal];
    speechSynthesis.cancel();
    speak(randomString[randomStringFinal]);
}

welcomeMessage();




//Command checking script
function processCommandInput() {
    var input = userTextInputElement;
    var message = messageOutputElement;
    oks = [];
    ok = false;
    var i;
    for (i = 0; i < commandsAI.detection.length; i++) {
        oks[i] = 0;
        for (var o = 0; o < commandsAI.detection[i].detectionWords.length; o++) {
            if (input.value.toLowerCase().includes(commandsAI.detection[i].detectionWords[o])) {
                oks[i]++;
            }
        }
    }

    var s, c, suitableItem;
    c = 0;
    for (s = 0; s < oks.length; s++) {
        if (oks[s] > c) {
            c = oks[s];
        }
    }

    if (c != 0) {
        for (var f = 0; f < oks.length; f++) {
            if (oks[f] === c) {
                suitableItem = f;
                ok = true;
            }
        }
    } else {
        ok = false;
    }

    if (ok === true) {


        
     
        var ranNum = Math.floor(Math.random() * commandsAI.detection[suitableItem].replies.length);
        var reply = commandsAI.detection[suitableItem].replies[ranNum];
        message.innerText = reply;
        speak(reply);
        RunAction(commandsAI.detection[suitableItem].action);
        



    }/* else {
        message.innerText = "Sorry, I can't help you with that, make sure you have no spelling errors.";
        speechSynthesis.cancel();
        speak("Sorry, I can't help you with that, make sure you have no spelling errors.");
        console.log("Unable to find a suitble reply. Err: " + this + ", best guess value (" + c + ") does not match any AI command. Vars: c=" + c + "; s=" + s + "; ok=" + ok + "; suitableItem=" + suitableItem + "; oks=" + oks + ";");
    }*/
}

var form = document.getElementById('inputForm');
form.onsubmit = function (event) {
    event.preventDefault();
    processCommandInput();
}