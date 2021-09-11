import {
  Loci,
  hooks,
  addToId,
  getClicked,
  getToMatch,
  addListener,
  getId,
} from './scripts/aggregator.js'

if ('virtualKeyboard' in navigator) {
  console.log('virtualKeyboard available')
}



function hideLayer(id){
 /* addToId('loci', Loci(0, hooks))
  getClicked()
  getToMatch()*/
  getId('background').classList.remove('hide')
  getId(id).classList.add('hide')
}

addListener(getId('start'), 'click', () => hideLayer('start'))
addListener(getId('end'), 'click', () => hideLayer('end'))

addToId('loci', Loci(0, hooks))
getClicked()
getToMatch()


/*                                                                        */