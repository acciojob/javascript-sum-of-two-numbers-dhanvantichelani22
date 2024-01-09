let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");

// Write your code here and print the output using alert function
if(a!=undefined && b!=undefined)
         document.getElementById('output').innerText = parseInt(a)+parseInt(b);
	else
		document.getElementById('output').innerText = "Invalid input. Please enter a valid number.";