//-----------------GLOBAL VARIABLES FOR JEOPARDY GAME--------------//

let questionBlock = document.getElementsByClassName('column')

//-------Array from the questionBlock variable--------------------//
//getting array from gameQuestion which is a collection, and iterate over it with forEach method to address each element in array
Array.from(questionBlock).forEach(element => {
  //add event listener for user click on question
  element.addEventListener('click', evt => {
    //questionData is a variable containing an array of objects which are all the questions for the round. When a user click on a block, I want the text content of block user clicks to change to the question text. To do this, I target the event's text content and assign it to the item of the question list at a particular index using the name of the array at index zero's key name -- array[0].key name
    let questionData = fetch('https://jservice.io/api/random') //store json fetch in variable
      .then(response => response.json()) //fetch the data from the api
      //   .then(response => )
      .then(data => (evt.target.textContent = data[0].question)) //change text content
  })
})
