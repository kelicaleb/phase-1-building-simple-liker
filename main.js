// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorMessage = document.querySelector('#modal')
errorMessage.className = "hidden"

const heart = document.querySelectorAll('.like-glyph')

for (const glyph of heart){
  glyph.addEventListener('click', heartFun)
}

function heartFun(e){
  const like = e.target
  mimicServerCall()
  .then (function (res){
    if (res === 'Pretend remote server notified of action!'){
      if (like.className === "activated-heart"){
        like.classList.remove('activated-heart')
        like.innerText = EMPTY_HEART
      }else{
      like.className = "activated-heart"
      like.innerText = FULL_HEART
      }
    }
  })
  .catch(function(error){
     errorMessage.classList.remove('hidden')
     console.log(error)
  setTimeout(function() {
    errorMessage.className = "hidden"
  }, 3000)})
  }

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}