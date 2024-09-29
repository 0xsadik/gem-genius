
function parallelogramArea() {
    const base = getInputValueByID('para-base');
    // console.log("base valuse: ", base);
    const height = getInputValueByID('para-height');
    // console.log("height value", height);

    // calcuation 
    const area = base * height;
    setInnerTextById('para-area', area);

}

function getInputValueByID(inputfieldid) {
    const inputField = document.getElementById(inputfieldid);
    const inputvalueText = inputField.value;
    const inputvalue = parseFloat(inputvalueText);
    // console.log(inputvalue);
    return inputvalue;
}

function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}