//-----------------GLOBAL VARIABLES FOR JEOPARDY GAME--------------//
let playersTurn = document.getElementById('playerTurn')
let questionBlock = document.getElementsByClassName('question')
let currentPlayer = 'player1'
let pressToPlay = document.getElementById('pressToPlay')
let pressPlay = document.getElementById('pressPlay')
let guessButton = document.getElementById('guessButton')
let passButton = document.getElementById('passButton')

//---------------Disable Guess and Pass buttons-----------------//
//using the css style (.style) accesses the css and .pointerEvents sets any pointer event as assigned (after the = sign)
guessButton.style.pointerEvents = 'none'
passButton.style.pointerEvents = 'none'

//-------------Open Modal With Question When Game Cell is Clicked-------//
//modal variable
let modal = document.getElementById('modal')
//open modal button variable
let modalButton = document.getElementById('openModal')
let closeModal = document.getElementById('closeModal')

//event listener
modalButton.addEventListener('click', modalOpener)

//function that opens the modal
function modalOpener () {
  console.log('hi modal is clicked')
  //modal.style.display = 'block'
}

//-------Array from the questionBlock variable--------------------//
//getting array from gameQuestion which is a collection, and iterate over it with forEach method to address each element in array
Array.from(questionBlock).forEach(element => {
  //add event listener for user click on question
  element.addEventListener('click', evt => {
    //questionData is a variable containing an array of objects which are all the questions for the round. When a user click on a block, I want the text content of block user clicks to change to the question text. To do this, I target the event's text content and assign it to the item of the question list at a particular index using the name of the array at index zero's key name -- array[0].key name
    let questionData = fetch('https://jservice.io/api/random') //store json fetch in variable
      .then(response => response.json()) //fetch the data from the api
      .then(data => (evt.target.textContent = data[0].question)) //to put on other page, before evt.target.textContent add {}and in it make function to create modal

    //change text content

    //3. submit answer button is enabled so they can submit answer and 4. pass question button is enabled if they want to pass
    //first thing is to enable buttons for submit and pass again--I am using the .style and pointer events again! :)
    guessButton.style.pointerEvents = 'auto'
    passButton.style.pointerEvents = 'auto'

    //----STORY 4: Pass a Question ------//
    //1. Given question is chosen, IF user clicks pass button THEN player 2 may answer AND notification area changes to player 2's turn
    document.getElementById('passButton').addEventListener('click', evt => {
      if (currentPlayer === 'player1') {
        //if currentPlayer is player, it sets currentPlayer to a new value, player2
        currentPlayer = 'player2'

        //this changes the content in the playerTurn id to the specified comment
        document.getElementById('playerTurn').textContent =
          'Player 2 --Your turn!'
      } else {
        //if the current player is already player1, it prints the message specified
        currentPlayer = 'player1'
        //this changes the content in the playerTurn id to the specified comment
        document.getElementById('playerTurn').textContent =
          'Player 1 --Your turn!'
      }
    })
  })
})

//5. Timer begins 5 second countdown -- a work in progress
function countdownMin () {
  //sets interval to 1000s and calls countdown function I will write below
  timer = setInterval(countdownMin, 1000)
  //decrements interval by one each time
  interval = interval - 1

  //sets gameTi
  gameTimer.textContent = interval

  //conditional for when interval is zero...
  if (interval === 0) {
    //textContent is set to display the timer id to give a message
    pressToPlay.textContent = "Your time is up--Player 2 it's your' turn!"
  }
  clearInterval(timer) //clears timer interval so the timer can begin again
  countdownTimer()
}

//timer function that starts counting down from 5 seconds
function countdownTimer () {
  questionTimer = setInterval(() => {
    //decreases the interval by 1
  })
}

//----STORY 5: ANSWER QUESTION CORRECTLY------//
//Given question is chosen, when user Submits Answer AND answer is correct...THEN game awards player amount of points on the card AND card is removed from board AND player does not change

//----STORY 6: ANSWER QUESTION INCORRECTLY------//
//Given question is chosen, when user Submits Answer AND answer is NOT correct...THEN game subtracts point total from player's card AND other player gets a chance to answer the question AND if no one guesses correctly, the original player gets to choose a new question

//----STORY 7: SCORE BOARD ------//
//Given the game has been started, when the score changes THEN the game should display player's current score on the page

//----STORY 8: ONLY ALLOW ONE QUESTION ------//
//Given a card has been selected, WHEN user tries to pick a new card THEN the question does not change AND the game alerts the player they must answer or pass the question

//----STORY 9: END ROUND 1 ------//
//Given the round timer has run out OR the board has been cleared THEN the game automatically routes you to the Double Jeopardy page AND the game scores, and game logic are the same as for round 1

//----STORY 10: FINAL JEOPARDY ------//
//Given Double Jeopardy has ended either by clearing board or time ran out... WHEN user is redirected to final Jeopardy THEN they should be presented with a category AND prompted to make a wager up to their maximum point total

//----STORY 11: LET'S MAKE A WAGER ------//
//Given location is the final jeopardy page, WHEN all players have made a wager THEN the question is revealed AND all players get a chance to answer the question before the answer is revealed

//----STORY 12: WINNING THE GAME ------//
//Given all players have answered the final question WHEN the last answer is submitted THEN the amount wagered is added or subtracted from total score AND the game should notify the users who won based on final score

/*let finalAnswerSubmit = document.getElementById('finalAnswer')
console.log(finalAnswer)
//this variable representing the player final submission is linked in with the submit button

//player1 and 2 will be in global scope and accessible below.

if (
  player1.innerText.finalAnswerSubmit === true &&
  player2.innerText.finalAnswerSubmit === true
) {
  //code for amount wagered being conditionally added or subtracted from final score
  //code for game notifying users who won based on final score
}
*/
