/*
Name: BELEN, Mariane I.
Course&Section: BSCS 1B
Activity No. Perf2
File: passwordPrompt.js
*/

//Create let variable enterPassword & = it to an empty string
let enterPassword = ' ';
//Create another const variable for the password.
const password = 'Enairam*098';

//Use do while loop in order to know if the password is incorrect or correct.
do {
    //Use the variable above & use prompt to enter the password.
    enterPassword = prompt('Please enter password: '); 
    if(enterPassword !== password){ //if the enterpassword is incorrect then its Incorrect, try again.
        console.log('Incorrect, try again.');
    }
}while(enterPassword !== password);
//If the enterPassword is correct it will execute the console.log below.
console.log('Access granted!');