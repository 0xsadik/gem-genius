
function pentaArea() {
    const p = getInputValueByID('penta-p');
    // console.log("base valuse: ", base);
    const b = getInputValueByID('penta-b');
    // console.log("height value", height);

    // calcuation 
    const area = p * b;
    setInnerTextById('penta-area', area);

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