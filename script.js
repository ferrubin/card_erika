document.getElementById('button').addEventListener('click', execCopy);
function execCopy() {
  document.querySelector("#inputmail").select();
  document.execCommand("copy");
}

/* hover button */
let button = document.getElementById('button')
document.getElementById('button').addEventListener('mouseover', hoverbutton);
function hoverbutton(){
  /* ESTE ES EL COLOR DEL BOTON AL HACERLE HOVER*/
  button.style.background ='#121213';
  /*  */
  button.style.pointerEvents = 'auto';
  button.style.transition ='0.2s ease-in-out'
}
document.getElementById('button').addEventListener('mouseleave', hoverbuttonleft);
function hoverbuttonleft(){
  /* ACA PONE EL COLOR ORIGINAL DEL BOTON*/
  button.style.background ='#212A39';
  /*  */
}

/* button click */
let alertModal = document.querySelector('#alert');
document.getElementById('button').addEventListener('click', alertDisplay);
function alertDisplay(){
 alertModal.style.display ="flex";
 setTimeout(desaparecerAlert,1000)

 function desaparecerAlert(){
  alertModal.style.display ="none";
 }
}