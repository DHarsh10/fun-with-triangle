const inputs = document.querySelectorAll (".input");
const button = document.querySelector("#btn");
const outputOnDOM = document.querySelector("#output");

function calculateHypotenuese (firstSide, secondSide) {
    const sum = firstSide**2 + secondSide**2;
    const hypotenuese = Math.sqrt(sum);

    return hypotenuese.toFixed(2);

}


function clickHandler () {
    const sideOne = Number(inputs[0].value);
    const sideTwo = Number(inputs[1].value);

    const finalAns = calculateHypotenuese (sideOne, sideTwo);

    if (sideOne && sideTwo) {
        outputOnDOM.innerText = `Hypotenuese of a triangle is : ${finalAns} cm²`
    } else {
        outputOnDOM.innerText = `Please Enter both the inputs 🤷‍♂️`
    }
}


button.addEventListener("click", clickHandler);