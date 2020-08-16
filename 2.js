
let validation = () => {

    // accessing the values from input box
    let email = document.querySelector('#InputEmail1').value;
    let password = document.querySelector('#InputPassword1').value;

    // accessing the and cloning of diplay box
    let display = document.querySelector("#inputValues").children[0];
    let displayDiv = display.cloneNode(true);

    // assigning the values of emai and password to created display box
    displayDiv.children[0].innerHTML = email;
    displayDiv.children[1].innerHTML = password;

    // Inserting and display the values to in crated div 
    display.insertBefore(displayDiv, display.firstChild);

    // clearing the input field
    document.querySelector('#InputEmail1').value = "";
    document.querySelector('#InputPassword1').value = "";

};