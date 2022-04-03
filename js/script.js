const moreButton = document.querySelector("#show-more-button");
const fullDescription = ' I have done revolving around computer science provided me with enough reasons for working in this field of science.\n' +
    'I chose to join University of Twente and I am sure this computer science programme is going to help me get relevant teaching that will develop necessary competencies to become a successful programmer and discover what branch of this discipline fits best for me. Also, I joined the Honours programme, an extracurricular broadening programme which ambitious and motivated students are challenged to enrich their knowledge.\n' +
    'Now, for me it is important to continue doing more than needed. I know that going the extra mile and ensuring that I am out of my comfort zone is the only way to get better. That is why I started working on different programming side projects and contributing to open-source ones. I am currently improving my web-development knowledge.\n' +
    'Finally, my aim is to become a high-performance person that is capable of handling large amounts of work because my life’s goal is to have a great positive impact on society and the world.';
const description = 'My name is Matei Bucur and I am in my first year of studying Technical Computer Science at University of Twente. The numerous activities';
const dotsElem = '<span id="dots">...</span>';
let text = document.getElementById("full-description");


moreButton.addEventListener("click",event => {
  let dots = document.getElementById("dots");
  let button = document.getElementById("show-more-button");
  if(!dots){
    button.innerHTML = "Show more &#9660;";
    hide(text);
    text.innerHTML += dotsElem;
  }else{
    button.innerHTML = "Show less &#9650;";
    show(text);
  }
});

function hide(elem){ // fixme dots do not render after description removed
  let array = fullDescription.split(' ');
  const myPromise = new Promise(resolve => {
    for(let i = 0; i < array.length; i++){
    setTimeout(function() {
      elem.innerHTML = elem.innerHTML.split(' ').slice(0,-1).join(' ');
    }, 5 * i);
  }
});
  myPromise.then(() => {elem.innerHTML += dotsElem; console.log("sloboz")});
}
function show(elem){
  let array = fullDescription.split(' ');
  elem.innerHTML = description;
    for(let i = 0; i < array.length; i++){
    setTimeout(function() {
      elem.innerHTML = elem.innerHTML + array[i] + ' ';
    }, 5 * i);
  }
}
window.onclick = function(event){
  let modals = document.getElementsByClassName("modal");
  for(let i=0; i < modals.length; i++){
    if(event.target == modals[i]){
      hide(modals[i]);
    }
  }
}
let menuLinks = document.querySelector("#menu-links").querySelectorAll("a");
for(let x of menuLinks){
  x.onclick = function() { hide(document.getElementById('menu')); };
}

window.onload = () => {
  text.innerHTML = description + dotsElem;
}
