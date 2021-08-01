const setOfWords = [
   /* "I used to live in my neighbor's fishpond, but the aesthetic wasn't to my taste.",
    "He wore the surgical mask in public not to keep from catching a virus, but to keep people away from him.",
    "His ultimate dream fantasy consisted of being content and sleeping eight hours in a row.",
    "The busker hoped that the people passing by would throw money, but they threw tomatoes instead, so he exchanged his hat for a juicer.",
    "Most shark attacks occur about 10 feet from the beach since that's where the people are."*/
];

const msg = document.getElementById('msg');

const typeWords = document.getElementById('myWords');

const btn = document.getElementById('btn');

let startTime,endTime,totalTime;

const playgame = () =>{
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
   // msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Stop";
}

const endPlay = () =>{
    let date = new Date();
    endTime = date.getTime();
    totalTime = ((endTime - startTime)/1000);
    console.log(totalTime);

    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);
    
    let speed = Math.round((wordCount / totalTime)*60);

    let finalMsg = "Your Result:\n";

    finalMsg += checkWords(msg.innerText,totalStr);

    msg.innerText = finalMsg;
}

const checkWords = (str1,str2) =>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");

    let count = 0;

    words1.forEach(function(item,index){
        if (item == words2[index])
        {
            count++;
        }
    })

    let incorrect = (words1.length - count);
    let accuracy = (count / words2.length)*100;
    let accuratewpm = Math.round((words2.length/totalTime)*60);
    
    return ("\n‣Total number of words written: "+words2.length+"\n‣Accurate WPM is :"+accuratewpm);
}

const wordCounter = (str) =>{
    let response = str.split(" ").length;
    console.log(response);
    return response;
}

btn.addEventListener("click", function(){
    console.log(this);
    if(this.innerText == 'Start')
    {
        typeWords.disabled = false;
        playgame();
    }

    else if(this.innerText == "Stop")
    {
        typeWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})