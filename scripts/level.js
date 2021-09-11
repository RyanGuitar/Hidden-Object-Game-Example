import {
  Loci, 
  hookNames,
  hooks,
  lociBack,
  getId,
  addToId,
  addClass,
  removeClass,
  removeAddClasses,
  removeAnimation,
  getToMatch,
  checkMatch,
  getClicked,
} from './aggregator.js'

let step = ''

function showLevel(){
  addToId('loci', Loci(step, hooks))
  getId('background').src = lociBack[step].image;
}

function setStep(){
   step = getId('loci').children[0].alt
   step = step.split(' ')
   step = Number(step[1]) + 1;
}

 function nextLevel(){
  setStep()
  if(step <= 2){
       showLevel()
     } else {
    step = 0;
       getId('end').classList.remove('hide')
       showLevel()
     }
  getToMatch()
  getClicked()
 }
 
export {addToId, addClass, getClicked, getToMatch, nextLevel}