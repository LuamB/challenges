
// Change the appearance of the box according to the values of the sliders (color, border radius, rotation)
const box = document.querySelector('.box');
// – [ ] Add an event listener for each input element.
const colorInput = document.querySelector("[data-js=input-color]");
const radiusInput = document.querySelector("[data-js=input-radius]");
const rotationInput = document.querySelector("[data-js=input-rotation]");
// – [ ] When the slider control of inputColor is moved, change the background color of the box. Hint: You need to work with the hsl() functional notation for colors.
colorInput.addEventListener('input', () => {
	console.log('color')
	const color = colorInput.value
	box.style.backgroundColor = `hsl(${color}, 100%, 50%)`	
})
// – [ ] When the slider control of inputRadius is moved, change the border radius of the box. If the control reaches the right end, make the box look like a circle.
radiusInput.addEventListener('input', () => {
	console.log('radius', radiusInput.value)
	box.style.borderRadius = `${radiusInput.value}%` 
})
// – [ ] When the slider control of inputRotation is moved, rotate the box. Hint: You may need to work with the CSS property "transform" and a value that contains "rotate" and "deg".
rotationInput.addEventListener('input', () => {
	console.log(rotationInput.value)
	box.style.transform = `rotate(${rotationInput.value}deg)`
})

// Hint: You can work with the property "style", just like you worked with the property "classList".


// For further information check MDN:
// - about inputs of type="range": https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
// - about hsl(): https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
// - about transform & rotate: https://developer.mozilla.org/en-US/docs/Web/CSS/transform
// - about CSS declarations with "style": https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
