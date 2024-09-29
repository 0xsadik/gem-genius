/*
        objective: get base, height of a triangle. calculate the area by using provided formula
        and then display the area, 

        step - 1: get base value of the triangle 
        step - 2: added an i d in the base input field 
        step - 3: use getElementbyId to access the input field 
        step - 4: get value from the input field. (value is string now )
        step - 5 : convert the value to a number ( use parseFloat)


*/


function calcuateTriangeArea() {
    // get triangle base value 
    const trianlgeBaseInput = document.getElementById('triangle-base');
    const tiranlgeBaseText = trianlgeBaseInput.value;
    const base = parseFloat(tiranlgeBaseText);
    

    // get tirangle height 
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);

    // calcualte triangle area

    const area = 0.5 * base * height;
    console.log(`area of triangle is: ${area}`);

    // display triangle area 

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;


}