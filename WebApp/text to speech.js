function speak(string, rate = 1, pitch = 1) {
    if (window.speechSynthesis){
        var synthUtter = new window.SpeechSynthesisUtterance;
        synthUtter.text = string;
        synthUtter.rate = rate;
        synthUtter.pitch = pitch;
        
        speechSynthesis.cancel();
        window.speechSynthesis.speak(synthUtter);
    }
}
