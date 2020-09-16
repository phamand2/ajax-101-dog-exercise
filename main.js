
const button = document.querySelector('button')


button.addEventListener('click', function(event){
  event.preventDefault()

  button.textContent = 'Generating Doggo'

  fetch('https://dog.ceo/api/breeds/image/random').then((response) =>{
    return response.json()
  })

  .then((data)=>{
    console.log(data);
    let img = document.getElementById('img');
    if(!img){
      img = document.createElement('img');
      img.setAttribute('id', 'img')
      document.body.appendChild(img);
    }

    img.setAttribute('src', data.message);
    button.textContent = 'Submit'
  })


} )

// Assign a new variable for the 'Select' element
const dropdown = document.querySelector('#dog')
// Get the API
fetch('https://dog.ceo/api/breeds/list').then((response) =>{
  return response.json()
})

// Loop through the Breed API Array
.then((data) => {
  data.message.forEach(element => {
    // For each element, create an option tag
    const option = document.createElement('option');
    // Input the element(value of the array) to the option tag
    option.textContent = element;
    // Add options into the dropdown ('select' tag)
    dropdown.appendChild(option)
    
  });
})


// Create a new event lister for the dropdown menu
dropdown.addEventListener('change', function(event){
  event.preventDefault()

  // Get the value ('breed') from the dropdown menu ('select' tag)
  fetch(`https://dog.ceo/api/breed/${dropdown.value}/images/random`).then((response) =>{
    return response.json()
  })
  .then((data)=>{
    console.log(data);
    let img = document.getElementById('img');
    if(!img){
      img = document.createElement('img');
      img.setAttribute('id', 'img')
      document.body.appendChild(img);
    }

    img.setAttribute('src', data.message);
    button.textContent = 'Submit'
  })


})


