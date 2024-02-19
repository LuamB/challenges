console.clear();

const saveButton = document.querySelector('[data-js="save-button"]');
const cancelButton = document.querySelector('[data-js="cancel-button"]');
const restoreButton = document.querySelector('[data-js="restore-button"]');
const skipButton = document.querySelector('[data-js="skip-button"]');
const buttonContainer = document.querySelector(
  '[data-js="custom-button-container"]'
);

// anonymous callback
saveButton.addEventListener('click', () => {
  console.log('save')
})

function onCancel() {
  console.log('cancel')
}
// named callback 
cancelButton.addEventListener('click', onCancel)

function Button(text, callback) {
  const button = document.createElement('button') 
  button.textContent = text
  button.addEventListener('click', callback)
  return button
}

const alertButton = Button('alert', () => {
  console.log('clicking alert')
})

const logInButton = Button('log in', onLogIn)
buttonContainer.append(alertButton) 
buttonContainer.append(logInButton) 

function onLogIn() {
  console.log('clicking log in')
}


// map()
// [1, 2, 3, 4] => [2, 4, 6, 8]
function myMap(array, callback) {
  const result = []  
  for (let i = 0; i < array.length; i++) {
    const changed = callback(array[i]) 
    // console.log('changed', changed)
    result.push(changed)
  }
  return result
}

const changedArray = myMap([1, 2, 3, 4], function(number) {
  return number + 2
})

console.log(changedArray) // -> [2, 4, 6, 8]
