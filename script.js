//This code Validates the Input 

function validateInput(input) {
    if (/^pet_\d{4}/.test(input)) {
        return "Input Is Valid 🟢";
    } else {
        return "Input is Invalid 🔴";
    }
}

function validateSyntax() {
    //We got the id of the input so that we know what has been written inside of it.
    let input = document.getElementById('petInput').value;

    //i created a variable for my
    const validatedOutput = validateInput(input); //created a variable to contain or store the funtion for testing if our input is correct

    //Now we use
    const result = document.getElementById('result');

    result.textContent = validatedOutput;


}

