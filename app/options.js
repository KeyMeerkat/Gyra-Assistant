var hoverboxBoxOptions = document.getElementById("hoverbox-box-options");
hoverboxBoxOptions.style.display = ""; //("") [to show] and ("none") [to hide]
hoverboxBoxOptions.style.opacity = 0;
hoverboxBoxOptions.style.bottom = "100%";

function closeOptionsHoverbox() {
  hoverboxBoxOptions.style.opacity = 0;
  hoverboxBoxOptions.style.top = "100%";
}

function openOptionsHoverbox() {
  hoverboxBoxOptions.style.opacity = 1;
  hoverboxBoxOptions.style.top = "50%";
}

function submitOptionsInfo() {
  closeOptionsHoverbox();
}

//Buttons
var buttonOptionsCancel = document.getElementById("hoverbox-options-cancel");
var buttonOptionsSubmit = document.getElementById("hoverbox-options-submit-info");

//Variables




//Submit the info given and store on the browsers local storage
function submitOptionsInfo() {
  
  //Close the hoverbox
  closeHoverbox();
};
