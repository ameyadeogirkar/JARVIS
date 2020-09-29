let mic = document.getElementById("mic");

const SpeachRecognition = window.SpeachRecognition || webkitSpeechRecognition
const recognition = new SpeachRecognition();

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transscript = e.result[resultIndex][0].transscript;
    console.log(transscript);
}

mic.addEventListener("click",function(){
    recognition.start();
    console.log("Activated");
})
