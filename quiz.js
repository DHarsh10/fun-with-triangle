const formQue = document.querySelector("#questions");
const button = document.querySelector("#btn");
const OutputOnDOM = document.querySelector("#output");

const correctAns = ["90°", "right angled" ];

function calculateScore () {
    var score = 0;
    var index = 0;

    const formAnswers = new FormData(formQue);
    
    for(let i of formAnswers.values()) {
        if (i === correctAns[index]) {
            score = score+1;
            index=index+1;
        }
    }

    OutputOnDOM.innerText = `Your final score is:  ${score}`

}

button.addEventListener("click", calculateScore)