var input = document.getElementById("user-text-input");
var message = document.getElementById("assistant-message");
var suggestionDiv = document.getElementById("command-suggestion");

/*function SuggestCommand() {
    oks = [];
    ok = false;
    var i;
    for (i = 0; i < commandsAI.detection.length; i++) {
        oks[i] = 0;
        for (var o = 0; o < commandsAI.detection[i].suggest.length; o++) {
            if (input.value.toLowerCase().includes(commandsAI.detection[i].suggest[o])) {
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


        var reply = commandsAI.detection[suitableItem].suggest[0];
        suggestionDiv.innerText = reply;




    }
}*/



var RunAction = function (Action) {
    if (Action == "GetTime") {
        var is12HrTime = true;
        if (window.localStorage) {
            if (!window.localStorage.getItem("12hrTime")) {
                window.localStorage.setItem("12hrTime", true);
            }
            is12HrTime = window.localStorage.getItem("12hrTime");
        }
        
        var d = new Date();
        var time;

        //Check if we should show 12 hr format or 24 hr
        if (is12HrTime == true) {
            var pmAM = "AM";
            var hour = d.getHours();
            var mins = d.getMinutes();

            if (d.getHours() > 12) {
                pmAM = "PM";
                hour = (d.getHours() - 12);
            }

            if (d.getMinutes() < 10) {
                mins = ("0" + d.getMinutes());
            }

            time = hour + ":" + mins + " " + pmAM;


            //24 hour time
        } else {
            var hour = d.getHours();
            var mins = d.getMinutes();

            if (d.getMinutes() < 10) {
                mins = ("0" + d.getMinutes());
            }

            time = hour + ":" + mins;
        }

        message.innerText = time;
        speak(time);
    }
}