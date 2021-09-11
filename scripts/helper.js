function getId(id){
  return document.getElementById(id)
}

function addToId(id, add){
  getId(id).innerHTML = add;
}

function addClass(id, name){
  getId(id).classList.add(name)
}

function removeClass(id, name){
  getId(id).classList.remove(name)
}

function removeAddClasses(id, remove, add){
  removeClass(id, remove)
  addClass(id, add)
}

function removeAnimation(){
  removeAddClasses("overlay", "animate-zoom", "hide")
}

function addListener(element, action, fn){
   element.addEventListener(action, fn)
 }

export {
  getId,
  addToId,
  addClass,
  removeClass,
  removeAddClasses,
  removeAnimation,
  addListener,
}