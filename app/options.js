var popupBoxOptions = document.getElementById("popup-box-options");
popupBoxOptions.style.display = ""; //("") [to show] and ("none") [to hide]
popupBoxOptions.style.opacity = 0;
popupBoxOptions.style.bottom = "100%";

function closeOptionsPopup() {
  popupBoxOptions.style.opacity = 0;
  popupBoxOptions.style.top = "100%";
}

function openOptionsPopup() {
  popupBoxOptions.style.opacity = 1;
  popupBoxOptions.style.top = "50%";
}

function submitOptionsInfo() {
  closeOptionsPopup();
}

//Buttons
var buttonOptionsCancel = document.getElementById("popup-options-cancel");
var buttonOptionsSubmit = document.getElementById("popup-options-submit-info");

//Variables




//Submit the info given and store on the browsers local storage
function submitOptionsInfo() {
  
  //Close the popup
  closePopup();
};
