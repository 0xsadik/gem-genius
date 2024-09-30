
function ellipseArea() {
    const a = getInputValueByID('ellipse-a');
    // console.log("base valuse: ", base);
    const b = getInputValueByID('ellipse-b');
    // console.log("height value", height);

    // calcuation 
    const area = 3.1416 * a * b;
    setInnerTextById('ellipse-area', area);

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