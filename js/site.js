
// Get user input from form
function getValues()
{
  
  let userInput = document.getElementById("userInput").value;
  
  let isPalindrome = checkPalindrome(userInput);
  
  let stringReversed = reverseString(userInput);
  
  document.getElementById("alert").classList.add("invisible");

  returnResult(isPalindrome, stringReversed);

}

// Test to see if it is a Palindrome
function checkPalindrome(userInput)
{
  // Set all elements to the same case
  let sanitizedInput = userInput.toLowerCase();

  // Remove all symbols and spaces


  for (let i = 0; i < Math.floor(sanitizedInput.length/2); i++)
  {
    if(sanitizedInput[i] === sanitizedInput[sanitizedInput.length-1-i])
    {
      i++;
    }
    else
    {
      return "false"
    }
  }

  return true;
}

// Reverse user String for display
function reverseString(userInput)
{

  let resultString = "";

  for(let i = userInput.length-1; i >= 0 ; i--)
  {
    resultString += userInput[i];
  }

  return resultString;

}


// Return reversed string and result to user
function returnResult(isPalindrome, reversedInput)
{
  // Write to the page
  document.getElementById("msg").innerHTML = `Success! ${reversedInput} is a Palindrome!`;
  
  // Show the alert box
  document.getElementById("alert").classList.remove("invisible");
  

}