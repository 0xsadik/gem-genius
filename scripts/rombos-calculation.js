
function rombosArea() {
    const d1 = getInputValueByID('rombos-d1');
    // console.log("base valuse: ", base);
    const d2 = getInputValueByID('rombos-d2');
    // console.log("height value", height);

    // calcuation 
    const area = 0.5 * d1 * d2;
    setInnerTextById('rombos-area', area);
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