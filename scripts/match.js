import {
  hookNames,
  getId,
  nextLevel,
  removeAddClasses,
  removeAnimation,
  addListener,
} from './aggregator.js'

let shuffled = false;
 let shuffleHook = []
 
function shuffle(){
   return hookNames.sort(() => Math.random() - 0.5)
 }

function showToMatch(){
  getId('match').innerText = shuffleHook.pop()
  shuffled = true;
}

function clearMatch(){
  getId('match').innerText = ""
  shuffled = false
}

function getToMatch(){
  if(!shuffled){
    shuffleHook = shuffle()
  }
   if(shuffleHook.length > 0){
     showToMatch()
   } else {
     clearMatch()
     nextLevel()
   }
}

function checkMatch(e){
  let matchWith = getId("match").textContent
  let clicked = e.target.classList[0]
  if(matchWith == clicked){
    getToMatch()
    e.target.classList.add('fade')
  } else {
    removeAddClasses("overlay", "hide", "animate-zoom")
    setTimeout(removeAnimation, 1000);
  }
}

function getClicked(){
  document.querySelectorAll('#loci img').forEach((hook) => {
   addListener(hook, 'click', checkMatch)
  })
}

export {
  getToMatch,
  checkMatch,
  getClicked,
}