(function(window) {
    var helloSpeaker = new Object();
    var speakWord = "Hello";
    helloSpeaker.bye = function(name) {
        console.log(speakWord + " " + name);
    };
    window.helloSpeaker = helloSpeaker;
})(window);