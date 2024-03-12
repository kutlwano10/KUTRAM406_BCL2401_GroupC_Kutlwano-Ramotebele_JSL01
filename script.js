//This code Validates the Input First , then we are going to add an argument to it later on when we check what have been written inside an inputfield.

function validateInput(input) {
    // 
    if (/^pet_\d{4}[a-zA-Z]/.test(input)) {
        return "Input Is Valid 🟢";
    } else {
        return "Input is Invalid 🔴";
    }
}

function validateSyntax() {
    //We got the id of the input so that we know what has been written inside of it.
    let input = document.getElementById('petInput').value; //we need to put this var inside a validateInput. So that it can see what has been written and what to validate (simply its our argument).

    // const validatedOutput = validateInput(input); //created a variable to contain or store the funtion for testing if our input is correct.

    //we are getting the results id so that we can call it to display our output 
    const result = document.getElementById('result');

    result.textContent = validateInput(input); //this 'input' is from the real Input value.


}

