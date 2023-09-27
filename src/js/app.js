let textbox= document.querySelector('#w');
textbox.addEventListener('keydown',function(e){
    if(e.keyCode == 8){
        e.preventDefault();
    }
    else if(e.keyCode == 32){
        e.preventDefault();
        backspace();
    }
})

function backspace()
{
  let ss = textbox.selectionStart;
  let se = textbox.selectionEnd;
  let ln  = textbox.value.length;

  let textbefore = textbox.value.substring( 0, ss );    
  let textselected = textbox.value.substring( ss, se ); 
  let textafter = textbox.value.substring( se, ln );    

  if(ss==se) 
  {
    textbox.value = textbox.value.substring(0, ss-1 ) + textbox.value.substring(se, ln );
    textbox.selectionStart = ss-1;
    textbox.selectionEnd = ss-1;
  }
  else 
  {
    textbox.value = textbefore + textafter ;
    textbox.selectionStart = ss;
    textbox.selectionEnd = ss;
  }

}
const loadingNumber = document.querySelector("#loadingNumber");
const loadingCircle = document.querySelector(".loading-circle");
let load = 0;

let loading = setInterval(updateLoader, 50);

function updateLoader() {
  load += load < 100;
  loadingNumber.innerHTML = load;
  loadingCircle.style.background =
    "conic-gradient(from 0deg at 50% 50%, rgba(111, 123, 247, 1) 0%, rgba(155, 248, 244, 1) " +
    load +
    "%, #101012 " +
    load +
    "%)";
    if(load==100){
        clearInterval(loading);
        document.querySelector(".loading-box").style.display="none";
        textbox.style.display="block";
    }
}
