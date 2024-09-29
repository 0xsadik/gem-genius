
function calculateRectangleArea() {
    // get rectangle width 
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidth.value;
    const width = parseFloat(rectangleWidthText);

    // get rectangle length 
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLength.value;
    const length = parseFloat(rectangleLengthText);
    
    // calcuation 
    const area =  width * length;
    // calcuate area 
    const displayArea = document.getElementById('rectangle-area');
    displayArea.innerText = area;
}