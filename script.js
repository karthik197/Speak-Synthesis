//loader
const type=" Type to Talk";
let index=0;
let letter ="";
(function run(){
    letter=type.slice(0,++index);
    document.querySelector("#animate").textContent=letter;
    if(index===type.length)
    {
        index=0;
    }    
    setTimeout(run,200);
})();


//talk
    function sayItOut(id){
    const message=document.getElementById(id).value;
    var speech=new SpeechSynthesisUtterance();
    speech.lang="en-US";
    speech.text=message;
    speech.volume=1;
    speech.pitch=1;
    speech.rate=1;
    window.speechSynthesis.speak(speech);
}