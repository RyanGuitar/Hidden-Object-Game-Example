let hookNames = []
let filteredHooks = []

function filterHooks (num, hooks){
  return hooks.filter(({type}) => type == num);
}

function Loci(num, hooks){
  filteredHooks = filterHooks(num,hooks)
  hookNames = []
  let hookImages ='';
  for(let {image, name} of filteredHooks){
    hookNames.push(name);
    hookImages += `<img src=${image} class="${name}" loading="lazy" alt="${name} ${num}">`;
  }
  return hookImages;
}

export { Loci, hookNames }                                                                    