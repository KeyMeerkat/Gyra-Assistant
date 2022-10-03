var commandsAI = {
  "detection": [
    

    {
      "replies": ["Make sure to type something in the input box below this text first.", "I'm not sure if I can read people's minds yet.. so be sure to type what you want to talk to me about in the input box below this text. :)"],
      "detectionWords": [""],
      "action": "",
    },



    

////   Greetings



    {
      "replies": ["Hello!", "Hi, how can I help?", "Hello, how are you?"],
          "detectionWords": ["hi", "hi", "hi", "hello", "howdy", "hey", "hewo", "hallo"],
      "action": "",
      "suggest": ["Hi", "Hello", "Howdy", "Hey"]
    },
    {
        "replies": ["Hello, one of the creators says hi and has subscribed to your youtube channel, and watches your videos regularly. Please let me know if you need anything, and I can try to help."],
      "detectionWords": ["hi", "i", "markiplier", "who", "you"],
      "action": ""
    },
    {
      "replies": ["I'm good thanks, and you?", "I'm good thanks.", "I'm doing well, you?", "I'm good."],
      "detectionWords": ["how", "are", "do", "r", "you", "ya", "yoo", "u"],
      "action": "",
      "suggest": ["How are you?", "How do you do?"]
    },
    {
      "replies": ["That's great to hear!", "That's good, I'm the same :)", "Nice :)"],
      "detectionWords": ["i", "good", "good", "great", "ok", "happy", "pleased", "satisfied", "exelent", "excited", "thank"],
      "action": "",
      "suggest": ["I'm good", "I'm good, thanks", "I'm feeling great", "I'm satisfied"]
    },
    {
      "replies": ["Good Morning!", "Morning!", "Good morning, hope you slept well!"],
      "detectionWords": ["morning", "good"],
      "action": "",
      "suggest": ["Good morning"]
    },
    {
      "replies": ["Good Afternoon!", "Afternoon"],
      "detectionWords": ["afternoon", "good"],
      "action": "",
      "suggest": ["Good afternoon"]
    },
    {
      "replies": ["Good Evening"],
      "detectionWords": ["evening", "good"],
      "action": "",
      "suggest": ["Good evening"]
    },
    {
      "replies": ["Good Night", "Night!", "Good Night, sleep well.", "Night, hope you have a great nights sleep! :)"],
      "detectionWords": ["night", "good"],
      "action": "",
      "suggest": ["Good night"]
    },





    //   Responsing

    {
      "replies": ["Okay", "Ok"],
      "detectionWords": ["ok", "agree", "sure", "cool"],
      "action": "",
    },
    {
      "replies": ["Oh", "Oh, okay"],
      "detectionWords": ["not ok", "disagree", "dis-agree", "dis agree"],
      "action": "",
      "suggest": ["That's not ok", "I disagree"]
    },
    {
      "replies": [":)", "I'm glad you've taught me something :)"],
      "detectionWords": ["no", "problem", "prob"],
      "action": "",
      "suggest": ["No problem"]
    },
    {
      "replies": ["Ok, just be sure to let me know if you ever need help.", "That's fine, let me know when you do need it."],
      "detectionWords": ["don't", "dont", "do not", "need", "want", "help"],
      "action": "",
      "suggest": ["I don't need help", "No thanks"]
    },
    {
      "replies": ["It is", "It is good"],
      "detectionWords": ["that", "is", "good"],
      "action": "",
      "suggest": ["That's good"]
    },
    {
      "replies": ["Ok", "Sounds like a plan", "Okay"],
      "detectionWords": ["i", "will", "can", "should", "try"],
      "action": "",
      "suggest": ["I will", "I'll try", "I can", "I should"]
    },
    {
      "replies": ["Nice", "Cool", "Great"],
      "detectionWords": ["nice", "awesome", "great", "fabulous", "great", "good"],
      "action": "",
      "suggest": ["Nice", "Awesome", "Great", "Fabulous", "Great", "Good"]
    },
    {
      "replies": ["Yes", "Yeah"],
      "detectionWords": ["yes", "yeah"],
      "action": "",
      "suggest": ["Yes", "Yeah"]
    },
    {
      "replies": ["Haha, what's so funny?", "Haha, I'm only laughing because you are, what's so funny?"],
      "detectionWords": ["lol", "xd"],
      "action": "",
      "suggest": ["LOL", "xD"]
    },
    {
      "replies": ["^-^", ":D"],
      "detectionWords": [":)", ":D", ":-)", ":-D", ":]", ":-]", "^^", "^ ^", "^-^", "^_^"],
      "action": "",
      "suggest": [":)", ":D", ":-)", ":-D", ":]", ":-]", "^^", "^ ^", "^-^", "^_^"]
    },
    {
      "replies": ["So?"],
      "detectionWords": ["so"],
      "action": "",
      "suggest": ["So?"]
    },
    {
      "replies": ["Good", "Great", "Nice", "Ok"],
      "detectionWords": ["i", "know", "understand", "get", "it"],
      "action": "",
      "suggest": ["Ok, I understand", "I know", "I get it"]
    },
    {
      "replies": ["Yeah"],
      "detectionWords": ["i", "guess"],
      "action": "",
      "suggest": []
    },
    {
      "replies": ["Yeah"],
      "detectionWords": ["i", "did", "have"],
      "action": "",
      "suggest": ["I already did", "I already have"]
    },



    ////    Departures
    {
      "replies": ["Alright, bye then", "Ok, bye then", "Alright, bye then, have a good one!", "Ok, bye then, have a good one!"],
      "detectionWords": ["bye", "gtg", "cya", "see", "you", "got", "to", "go"],
      "action": "",
      "suggest": ["Bye", "Got to go", "Got to go now"]
    },
    {
      "replies": ["Thanks", "Aww thanks"],
      "detectionWords": ["you", "to"],
      "action": "",
      "suggest": ["Thanks, you too!"]
    },


    




    ////     Requests/Questions

    {
      "replies": ["Yes, it's all good", "Yes, I think it is all looking good", "Yes, it is all good"],
      "detectionWords": ["are", "is", "all", "good", "great"],
      "action": "",
      "suggest": ["Are we good?", "All good?", "Is it all good?"]
    },
    {
      "replies": ["I believe so", "I think it is", "I'm sure it is"],
      "detectionWords": ["is", "it"],
      "action": "",
      "suggest": ["Is it?"]
    },
    {
      "replies": ["Ok", "Ok, I'm listening", "Ok, what is it?", "Sure", "Sure, I'm listening", "Sure, what is it?"],
      "detectionWords": ["i", "have", "want", "to", "a", "question"],
      "action": "",
      "suggest": ["Is it?"]
    },
    {
      "replies": ["Sorry if I am, you see I am programmed to reply randomly (but still on topic), so I may say something you just said, but it's purely accidental. Thanks for understanding, hopefully in the future my AI will be updated. :D"],
      "detectionWords": ["are", "you", "copy", "me", "i"],
      "action": "",
      "suggest": ["Are you copying me?"]
    },
    {
      "replies": [],
      "detectionWords": ["what", "is", "the", "time"],
      "action": "GetTime",
      "suggest": ["What is the time?", "What's the time?"]
    }
    

    
  ]
}
