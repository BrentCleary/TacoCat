
// Get user input from form
function getValues()
{
  // make sure the alert is invisible
  document.getElementById("alert").classList.add("invisible");

  let userInput = document.getElementById("userInput").value;
  
  let returnObj = checkPalindrome(userInput);

  displayMessage(returnObj);

}

// Test to see if it is a Palindrome
function checkPalindrome(userInput)
{
  // Set all elements to the same case
  let sanitizedInput = userInput.toLowerCase();

  // Remove all symbols and spaces
  
  // regex includes all characters listed below
  let regex = /[^a-z0-9]/gi;
  // replace(regex, "") will result in  
  sanitizedInput = sanitizedInput.replace(regex, "");

  let revString = [];
  let returnObj = {};

  for (let i = sanitizedInput.length-1; i >= 0 ; i--)
  {
    revString += sanitizedInput[i];
  }

  if(revString == sanitizedInput)
  {
    returnObj.msg = "Well Done! You entered a Palindrome!"
    returnObj.alertClass = "alert alert-success mt-5" 
  }
  else
  {
    returnObj.msg = "Sorry. You did not enter a Palindrome!"
    returnObj.alertClass = "alert alert-danger mt-5" 
  }

  returnObj.reversed = revString;

  return returnObj;
}


// Return reversed string and result to user
function displayMessage(returnObj)
{
  // Write to the page
  document.getElementById("alertHeader").innerHTML = returnObj.msg;
  
  // Show the alert box
  document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
  
  // Remove existing classes to avoid duplication
  let alertElement = document.getElementById("alert");
  alertElement.className = "alert";

  // Split and add each class individually
  let classes = returnObj.alertClass.split(' ');
  classes.forEach(className => {
    alertElement.classList.add(className);
  });

  document.getElementById("alert").classList.remove("invisible");

  // alertElement.classList.remove("invisible"); // First, remove the "invisible" class
  // alertElement.classList.add(`${returnObj.alertClass}`); // Then add the new class

}