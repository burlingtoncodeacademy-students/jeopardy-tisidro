//-----------------GLOBAL VARIABLES FOR JEOPARDY GAME--------------//
//Player variables to let player know it's their turn
let playersTurn = document.getElementById('playerTurn')
let questionBlock = document.getElementsByClassName('question') //Initial error resulted from NOT putting elements as plural. Making a note to remind me of that!
let currentPlayer = 'player1'
let pressToPlay = document.getElementById('pressToPlay')
let pressPlay = document.getElementById('pressPlay')
let guessButton = document.getElementById('guessButton')
let passButton = document.getElementById('passButton')

//-----STORY 1: READY, SET, GO! -----//
//1. Add URL Fragment to the path to let program know it's the multiplayer game

//The way I completed this story is to hard-code a URL fragment into the rel= tag of the link leading to Round1 of the game. I was over-thinking this! In order to add a URL fragment, I simply needed to add  "#" after the rel="/jeopardy1.html" so that it reads: a href="/jeopardy1.html#2-player-game". This is useful, and I noticed the use of a "#" this morning on an e-commerce site!

//----- STORY 2: START THE GAME------//
//1. Upon page load, notify Player 1 that it is their turn to choose--hard coded into HTML.

//2. Disable Guess and Pass buttons
//guess and passButton variables declared above in Global Variables Section
//using the css style (.style) accesses the css and .pointerEvents sets any pointer event as assigned (after the = sign)
guessButton.style.pointerEvents = 'none'
passButton.style.pointerEvents = 'none'

//3. Round timer begins counting down from 5 minutes--STILL need to work on this one!!!
//timer function takes in the total time counter will run and display field

//-------STORY 3: SELECT A QUESTION-------//
//1. user selects card--we will need to iterate over all the questions so we begin by creating a variable called questionBlock(located above in global variables)

//2. score on card that shows on board is replaced by a question of my list of questions
//to track current Player, set up a variable currentPlayer -- located in global variables
//getting array from gameQuestion which is a collection, but needs to be an actual array if we want to iterate over it with forEach method
Array.from(questionBlock).forEach(element => {
  //add event listener for click on question
  element.addEventListener('click', evt => {
    //questionList is a variable containing an array of objects which are all the questions for the round. When a user click on a block, I want the text content of block user clicks to change to the question text. To do this, I target the event's text content and assign it to the item of the question list at a particular index using the name of the array at index zero's key name -- array[0].key name
    evt.target.textContent = questionList[0].question

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

//-------Game Question Array---------//
//array of objects called questionsList that hold all the questions for Round 1 and questionsRd2 for Round 2 (I'll use that one later). Each object contains the question, answer, and which category(a-f) and point value(1-6) the particular object is located in. Since I didn't add specific questions or answers, what I have done will allow me to track if correct question and answer are displaying when user clicks a specific cell.

let questionList = [
  {
    question: 'Round1col1: $100 Question?',
    answer: 'Round1col1: $100 Answer'
  },

  {
    question: 'Round1col1: $200 Question?',
    answer: 'Round1col1: $200 Answer'
  },

  {
    question: 'Round1col1: $300 Question?',
    answer: 'Round1col1: $300 Answer'
  },

  {
    question: 'Round1col1: $400 Question?',
    answer: 'Round1col1: $400 Answer'
  },

  {
    question: 'Round1col1: $500 Question?',
    answer: 'Round1col1: $500 Answer'
  },

  {
    question: 'Round1col2: $100 Question?',
    answer: 'Round1col2: $100 Answer'
  },

  {
    question: 'Round1col2: $200 Question?',
    answer: 'Round1col2: $200 Answer'
  },

  {
    question: 'Round1col2: $300 Question?',
    answer: 'Round1col2: $300 Answer'
  },

  {
    question: 'Round1col2: $400 Question?',
    answer: 'Round1col2: $400 Answer'
  },

  {
    question: 'Round1col2: $500 Question?',
    answer: 'Round1col2: $500 Answer'
  },

  {
    question: 'Round1col3: $100 Question?',
    answer: 'Round1col3: $100 Answer'
  },

  {
    question: 'Round1col3: $200 Question?',
    answer: 'Round1col3: $200 Answer'
  },

  {
    question: 'Round1col3: $300 Question?',
    answer: 'Round1col3: $300 Answer'
  },

  {
    question: 'Round1col3: $400 Question?',
    answer: 'Round1col3: $400 Answer'
  },

  {
    question: 'Round1col3: $500 Question?',
    answer: 'Round1col3: $500 Answer'
  },
  {
    question: 'Round1col4: $100 Question?',
    answer: 'Round1col4: $100 Answer'
  },

  {
    question: 'Round1col4: $200 Question?',
    answer: 'Round1col4: $200 Answer'
  },

  {
    question: 'Round1col4: $300 Question?',
    answer: 'Round1col4: $300 Answer'
  },

  {
    question: 'Round1col4: $400 Question?',
    answer: 'Round1col4: $400 Answer'
  },

  {
    question: 'Round1col4: $500 Question?',
    answer: 'Round1col4: $500 Answer'
  },

  {
    question: 'Round1col5: $100 Question?',
    answer: 'Round1col5: $100 Answer'
  },

  {
    question: 'Round1col5: $200 Question?',
    answer: 'Round1col5: $200 Answer'
  },

  {
    question: 'Round1col5: $300 Question?',
    answer: 'Round1col5: $300 Answer'
  },

  {
    question: 'Round1col5: $400 Question?',
    answer: 'Round1col5: $400 Answer'
  },

  {
    question: 'Round1col5: $500 Question?',
    answer: 'Round1col5: $500 Answer'
  },

  {
    question: 'Round1col6: $100 Question?',
    answer: 'Round1col6: $100 Answer'
  },

  {
    question: 'Round1col6: $200 Question?',
    answer: 'Round1col6: $200 Answer'
  },

  {
    question: 'Round1col6: $300 Question?',
    answer: 'Round1col6: $300 Answer'
  },

  {
    question: 'Round1col6: $400 Question?',
    answer: 'Round1col6: $400 Answer'
  },

  {
    question: 'Round1col6: $500 Question?',
    answer: 'Round1col6: $500 Answer'
  }
]

questionsRd2 = [
  {
    question: 'Round2col1: $100 Question?',
    answer: 'Round2col1: $100 Answer'
  },
  {
    question: 'Round2col1: $200 Question?',
    answer: 'Round2col1: $200 Answer'
  },

  {
    question: 'Round2col1: $300 Question?',
    answer: 'Round2col1: $300 Answer'
  },

  {
    question: 'Round2col1: $400 Question?',
    answer: 'Round2col1: $400 Answer'
  },

  {
    question: 'Round2col1: $500 Question?',
    answer: 'Round2col1: $500 Answer'
  },
  {
    question: 'Round2col2: $100 Question?',
    answer: 'Round2col2: $100 Answer'
  },

  {
    question: 'Round2col2: $200 Question?',
    answer: 'Round2col2: $200 Answer'
  },

  {
    question: 'Round2col2: $300 Question?',
    answer: 'Round2col2: $300 Answer'
  },

  {
    question: 'Round2col2: $400 Question?',
    answer: 'Round2col2: $400 Answer'
  },

  {
    question: 'Round2col2: $500 Question?',
    answer: 'Round2col2: $500 Answer'
  },
  {
    question: 'Round2col3: $100 Question?',
    answer: 'Round2col3: $100 Answer'
  },

  {
    question: 'Round2Col3: $200 Question?',
    answer: 'Round2Col3: $200 Answer'
  },

  {
    question: 'Round2Col3: $300 Question?',
    answer: 'Round2Col3: $300 Answer'
  },

  {
    question: 'Round2Col3: $400 Question?',
    answer: 'Round2Col3: $400 Answer'
  },

  {
    question: 'Round2Col3: $500 Question?',
    answer: 'Round2Col3: $500 Answer'
  },

  {
    question: 'Round2Col4: $100 Question?',
    answer: 'Round2Col4: $100 Answer'
  },
  {
    question: 'Round2Col4: $200 Question?',
    answer: 'Round2Col4: $200 Answer'
  },

  {
    question: 'Round2Col4: $300 Question?',
    answer: 'Round2Col4: $300 Answer'
  },

  {
    question: 'Round2Col4: $400 Question?',
    answer: 'Round2Col4: $400 Answer'
  },

  {
    question: 'Round2Col4: $500 Question?',
    answer: 'Round2Col4: $500 Answer'
  },

  {
    question: 'Round2Col5: $100 Question?',
    answer: 'Round2Col5: $100 Answer'
  },
  {
    question: 'Round2Col5: $200 Question?',
    answer: 'Round2Col5: $200 Answer'
  },

  {
    question: 'Round2Col5: $300 Question?',
    answer: 'Round2Col5: $300 Answer'
  },

  {
    question: 'Round2Col5: $400 Question?',
    answer: 'Round2Col5: $400 Answer'
  },

  {
    question: 'Round2Col5: $500 Question?',
    answer: 'Round2Col5: $500 Answer'
  },

  {
    question: 'Round2Col6: $100 Question?',
    answer: 'Round2Col6: $100 Answer'
  },
  {
    question: 'Round2Col6: $200 Question?',
    answer: 'Round2Col6: $200 Answer'
  },

  {
    question: 'Round2Col6: $300 Question?',
    answer: 'Round2: $300 Answer'
  },

  {
    question: 'Round2Col6: $400 Question?',
    answer: 'Round2: $400 Answer'
  },

  {
    question: 'Round2Col6: $500 Question?',
    answer: 'Round2: $500 Answer'
  }
]

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

//-----------------------------STILL NEED TO COMPLETE THESE STORIES--------------------------------//

//3. Question timer resets (any time new question is chosen or player changes...the question timer should reset)

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
