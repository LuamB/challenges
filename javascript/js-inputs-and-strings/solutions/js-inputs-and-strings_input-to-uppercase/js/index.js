console.clear();

// Convert the input value to uppercase when clicking the button

// [ ] – Assign the input element to a variable
const input = document.querySelector('input')
// [ ] – Assign the button element to a variable
const button = document.querySelector('button')
// [ ] – Add an event listener to the button, so the input value turns into uppercase when the button is clicked
button.addEventListener('click', () => {
	let inputValue = input.value 
	console.log(inputValue)
	// console.log(inputValue.toUpperCase())	
	const upperCasedValue = input.value.toUpperCase() 
	// inputValue = input.value.toUpperCase()  
	input.value = upperCasedValue
})
// Hint: Access the value by using `.value` on the input element

