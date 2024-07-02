const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 0.5;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        speak("Good Morning Rohtash sir")
    }

    else if(hour>12 && hour<17){
        speak("Good Afternoon Master...")
    }

    else{
        speak("Good Evenining Sir...")
    }

}

window.addEventListener('load', ()=>{
    speak("Personal Assistence");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =  new SpeechRecognition();

recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', ()=>{
    content.textContent = "Listening...."
    recognition.start();
})

function takeCommand(message){
    if(message.includes('hey') || message.includes('who are you')){
        speak(" I'm a personal Assistant of Rohtash Verma.");
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "I'm a personal Assistant of Rohtash Verma.",
            showConfirmButton: false,
            timer: 3500
          });
    }
    else if(message.includes("open google")){
        window.open("https://google.com", "_blank");
        speak("okay Rohtash sir  Opening Google...")
    }
    else if(message.includes("open instagram")){
        window.open("https://instagram.com", "_blank");
        speak("okay Rohtash sir opening instagram...")
    }
    else if(message.includes("founder of you")){
        speak("Mr Rotash vermaa is found me")
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Rohtash Verma is found Me.. ",
            showConfirmButton: false,
            timer: 2500
          });
    }
    else if(message.includes("open facebook")){
        window.open("https://facebook.com", "_blank");
        speak(" okay Rohtash sir opening Facebook...")
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
	    speak(finalText);
       
  
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
       
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
       
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speak(finalText);
    
    }

    else if(message.includes('calculator')) {
        window.open('https://www.google.com/search?q=calculator&rlz=1C5CHFA_enIN1087IN1087&oq=calcu&gs_lcrp=EgZjaHJvbWUqEggAEAAYQxiDARixAxiABBiKBTISCAAQABhDGIMBGLEDGIAEGIoFMgYIARBFGDkyDwgCEAAYFBiHAhixAxiABDIKCAMQABixAxiABDIPCAQQABhDGLEDGIAEGIoFMg0IBRAAGIMBGLEDGIAEMgoIBhAAGLEDGIAEMgoIBxAAGLEDGIAEMgoICBAAGLEDGIAEMgcICRAAGIAE0gEJODQ3OWowajE1qAIIsAIB&sourceid=chrome&ie=UTF-8')
        const finalText = "okay Rohtash sir Opening Calculator";
        speak(finalText);
    
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speak(finalText);
    
    }
}