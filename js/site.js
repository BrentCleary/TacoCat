
// Get user input from form
function getValues()
{
  userInput = document.getElementById("userInput").value;

  isPalindrome = checkPalindrome(userInput);

  stringReversed = reverseString(userInput)

  returnResult(isPalindrome, stringReversed);

}

// Test to see if it is a Palindrome
function checkPalindrome(userInput)
{
  // Set all elements to the same case
  lowerCaseInput = userInput.toLowerCase();

  // Remove all symbols and spaces


  for (let i = 0; i < userInput.length/2; i++) {
    
    if(userInput[i] === userInput[userInput.length-1-i])
    {
      i++;
    }
    else
    {
      return "false"
    }

    return true;
  }
}

// Reverse user String for display
function reverseString(userInput)
{

  resultArray = [];

  for (let i = userInput-1; i >=0 ; i--)
  {
    resultArray.push(userInput[i])
  }

  return resultArray;

}


// Return reversed string and result to user
function returnResult(reversedInput)
{
  resultDisplay = document.getElementById("successMsg").innerHTML;

  resultDisplay = reversedInput;

}