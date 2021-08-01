const setOfWords = [
    "office necessary payment internal greet crack believe sow enormous summer lacking charge equal nervous same contract cobweb slit jealous rhetorical",
    "snakes migrate short learn surmise clover sulky patch thick abiding window two fly calendar heady peaceful cook decrease heavenly past",
    "disobey moult beetle copper tidy discovery spot quickest phone stir salve converge silk awesome fall lovely beggar pest idolize year",
    "ballet efflux TRUE tissue sail adjust script cup growth scrape mystery conventional self leftovers conviction prove pilot spider carry pluck",
    "plead enlarge cart gaudy feeble typical line have wax test neighborly recollect touch avoid respect outrageous integrate type toys friends"
];

const msg = document.getElementById('msg');

const typeWords = document.getElementById('myWords');

const btn = document.getElementById('btn');

let startTime,endTime,totalTime;

const playgame = () =>{
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Stop";
}

const endPlay = () =>{
    let date = new Date();
    endTime = date.getTime();
    totalTime = ((endTime - startTime)/1000) - 2;
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
    let accuracy = (count / words1.length)*100;
    let accuratewpm = Math.round((count/totalTime)*60);
    return ("‣Correct words "+count+" out of "+words1.length+" words. \n‣Total number of incorrect words are "+incorrect+".\n‣Accuracy is :"+accuracy+"%.\n‣Accurate WPM is :"+accuratewpm);
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