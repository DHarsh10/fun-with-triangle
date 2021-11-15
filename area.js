const inputs = document.querySelectorAll (".input");
const button = document.querySelector("#btn");
const outputOnDOM = document.querySelector("#output");

function areaCalculation (base, height) {
    const area = (base * height) / 2;
    return area;
}

function clickHandler () {
    const base = Number(inputs[0].value);
    const height = Number(inputs[1].value);

    const finalArea = areaCalculation(base, height);

    if (base && height) {
        outputOnDOM.innerText = `Area of a Triangle is: ${finalArea} cm²`
    } else {
        outputOnDOM.innerText = "Please Enter both the inputs 🤷‍♂️"
    }
}


button.addEventListener("click", clickHandler)