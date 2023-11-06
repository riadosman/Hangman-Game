//letters
const letters = "abcdefghijklmnopqrstuvwxyz.";
let lettersArray = Array.from(letters);
let lettersContainer = document.querySelector(".letters");
lettersArray.forEach(letter=>{
    let span = document.createElement("span");
    let theletter = document.createTextNode(letter);
    span.appendChild(theletter);
    span.className = "letter-box";
    lettersContainer.appendChild(span);
});
fetch('./main.json').then(
(e)=>{
    let data = e.json()
   return data;
}).then(
    (data) =>{
        let allkeys = Object.keys(data);
        let randomPropNumber = Math.floor(Math.random()* allkeys.length);
        let randomPropName = allkeys[randomPropNumber];
        let randomPropValue = data[randomPropName];
        let randomValueNumber = Math.floor(Math.random()* randomPropValue.length);
        let randomValueValue = randomPropValue[randomValueNumber];
        ////////////////////////////////
        document.querySelector(".game-info .catagory span").innerHTML = randomPropName;
        let lettersGuessContainer = document.querySelector(".letters-guess");
        let letterAndSpace = Array.from(randomValueValue);
        letterAndSpace.forEach(letter =>{
        let emptySpan = document.createElement("span");
        if(letter===' '){
        emptySpan.className = 'with-space';
        }
        lettersGuessContainer.appendChild(emptySpan);
})
let guessSpans = document.querySelectorAll('.letters-guess span');

let wrongAttrmps = 0;
let theDraw = document.querySelector(".hangman-draw");
let Arr = [];
document.addEventListener('click',(e)=>{
    let theStatus = false;
    if(e.target.className === 'letter-box'){
        e.target.classList.add("clicked");
        let theCLickedLetter = e.target.innerHTML.toLowerCase();
        letterAndSpace.forEach((wordLetter,WordIndex)=>{
            if(theCLickedLetter==wordLetter){
                theStatus = true; 
                guessSpans.forEach((span,spanIndex)=>{
                    if(WordIndex === spanIndex){
                        span.innerHTML = theCLickedLetter;
                        Arr.push(theCLickedLetter);
                    }
                });
                // console.log(`arr :${Arr}`);
                // console.log(Arr.length);
            }
        });
        letterAndSpace.forEach((e)=>{
            if(e === ' '){
                if (Arr.length+1  === letterAndSpace.length){
                    wingame();
                }
            }else{
                if (Arr.length === letterAndSpace.length){
                    wingame();
                }
            }
        })
        // let wrongCounter = 0;
        if (theStatus !== true ) {
            wrongAttrmps++;
            theDraw.classList.add(`wrong-${wrongAttrmps}`);
            document.getElementById("fail").play();
            // wrongCounter++;
            // console.log(`wrongAttrmps:${wrongAttrmps}`)
            // console.log(`wrongCounter:${wrongCounter}`)
            if (wrongAttrmps === 8) {
                endgame();
                lettersContainer.classList.add("finished");
            }
            }else{
                document.getElementById("success").play();
            }
    }
})
function endgame(){
    document.getElementById("lose").play();
    let div = document.createElement("div");
    let divText = document.createTextNode(`GAME OVER , THE WORD IS "${randomValueValue}"`);
    let divWrong = document.createElement("div");
    let divWrongText = document.createTextNode(`\nThe Wrong Counter is ${wrongAttrmps}`);
    divWrong.classList.add("wrong-counter");
    // console.log(`the wrong counter is ${wrongAttrmps}`);
    let button = document.createElement("button");
    button.classList.add("reset-button");
    let buttonText = document.createTextNode("RESTART");
    div.appendChild(divText);
    divWrong.appendChild(divWrongText);
    div.appendChild(button);
    button.addEventListener("click",()=>{
       location.reload();
    })
    button.add
    button.appendChild(buttonText);
    div.className = 'popop';
    document.body.appendChild(div);
    document.body.appendChild(divWrong);
}
function wingame(){
    document.getElementById("winner").play();
    let div = document.createElement("div");
    let divText = document.createTextNode(`YOU WIN, THE WORD IS ${randomValueValue}`);
    let divWrong = document.createElement("div");
    let divWrongText = document.createTextNode(`\nThe Wrong Counter is ${wrongAttrmps}`);
    divWrong.classList.add("wrong-counter");
    let button = document.createElement("button");
    button.classList.add("reset-button");
    let buttonText = document.createTextNode("RESTART");
    div.appendChild(divText);
    divWrong.appendChild(divWrongText);
    div.appendChild(button);
    button.addEventListener("click",()=>{
       location.reload();
    })
    button.add
    button.appendChild(buttonText);
    div.className = 'win';
    document.body.appendChild(div);
    document.body.appendChild(divWrong);
}});
var randomColor = Math.floor(Math.random()*16777215).toString(16);
document.body.style.backgroundColor = `#${randomColor}`; 
// console.log(text)
