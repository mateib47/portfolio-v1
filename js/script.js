const moreButton = document.querySelector("#show-more-button");
moreButton.addEventListener("click",event => {
  const display = document.querySelector('#full-description');
  console.log(display.style);
  if(display.style.display === 'none'){
    show(display);
  }else{
    hide(display);
  }
});

function hide(elem){
  elem.style.display = 'none';
}
function show(elem){
  elem.style.display = 'block';
}
// FIXME: the show more button needs to be double clicked in order to show everything
// TODO: adjust the text; add .. like on w3 page
