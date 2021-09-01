const moreButton = document.querySelector("#show-more-button");
moreButton.addEventListener("click",event => {
  var dots = document.getElementById("dots");
  var more = document.getElementById("more");
  var button = document.getElementById("show-more-button");
  if(dots.style.display === 'none'){
    dots.style.display ="inline";
    button.innerHTML = "Show more &#9660;";
    hide(more);
  }else{
    dots.style.display ="none";
    button.innerHTML = "Show less &#9650;";
    show(more);
  }
});

function hide(elem){
  elem.style.display = 'none';
}
function show(elem){
  elem.style.display = 'block';
}
