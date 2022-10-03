var popupBoxOptions = document.getElementById("popup-box-options");
popupBoxOptions.style.display = "none"; //("") [to show] and ("none") [to hide]

function closeOptionsPopup() {
  popupBoxOptions.style.display = "none";
}

function openOptionsPopup() {
  popupBoxOptions.style.display = "";
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
