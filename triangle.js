const inputs = document.querySelectorAll(".input")
const isTriangleBTN = document.querySelector("#btn")
const sumOnDOM = document.querySelector("#sum")
const isTriOutput = document.querySelector("#output")

function calculateSumOfAngles(ang1, ang2, ang3) {
    const anglesSum = ang1 + ang2 + ang3
    console.log(anglesSum);



    sumOnDOM.innerText = `Sum of 3 angles: ${anglesSum}`;


    if (anglesSum === 180) {
        isTriOutput.innerText = "Yes, The angles form a Triangle 🔥"
    } else {
        isTriOutput.innerText = "Sorry, The angles don't form a Triangle 😑"
    }

}

function isTriangle() {
    const angle1 = Number(inputs[0].value);
    const angle2 = Number(inputs[1].value);
    const angle3 = Number(inputs[2].value);

    if (angle1 && angle2 && angle3) {
        calculateSumOfAngles(angle1, angle2, angle3)
    } else {
        isTriOutput.innerText = "Please Enter all 3 inputs 🤷‍♂️"
    }



}

isTriangleBTN.addEventListener("click", isTriangle)