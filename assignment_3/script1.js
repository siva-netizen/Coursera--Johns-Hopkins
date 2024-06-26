(function(window){

    var SpeakHello = {};
    SpeakHello. greeting ="Hello";
    SpeakHello.speak = function(name){
        console.log(SpeakHello.greeting + " "+name);
        return SpeakHello.greeting+ " "+name;
    }


    var SpeakBye = {};
    SpeakBye.speakWord = "Good Bye";
    SpeakBye.speak = function (name) {
        console.log(SpeakBye.speakWord + " " + name);
        return SpeakBye.speakWord+ " "+name;
      }


    var whattospeak =function(name) {
        var FLetter = name.split("")
       // console.log(FLetter[0]);
        if(FLetter[0]==='J'||FLetter[0]=== 'j')
            return SpeakBye.speak(name);
        else
            return SpeakHello.speak(name);
}
window.SpeakHello = SpeakHello;
window.SpeakBye = SpeakBye;
window.whattospeak = whattospeak;
})(window);

function processName() {
    var name = document.getElementById('nameInput').value;
    var message = whattospeak(name);
    document.getElementById('greetingOutput').textContent = message;
}
