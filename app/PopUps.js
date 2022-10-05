// Popup containers JavaScript source code
var ShowPopUp = function (container = "NO_VALUE") {
	// Setup div
	var popupDIV = document.createElement("div");
	popupDIV.style.display = "hidden";
	popupDIV.style.position = "absolute";
	popupDIV.style.borderStyle = "solid";

	//Add container text
	popupDIV.innerHTML = container;

	//Show Popup
	popupDIV.style.display = "";
	document.getElementsByTagName("body").appendChild(popupDIV);
}

var PopUpContainers = [
	{
		"title": "About",
		"mainHTML": "<p>Gyra Assistant is your personal assistant. She can chat to you and help you with most things, like what the weather is, or maybe you need to know what is on your shopping list. Gyra can do her best to help you.<br><br><h4>Please note that Gyra Assistant is still in development, the AI might not respond correctly, if you have any issues please contact us.</h4></p>"
	}
]

ShowPopUp(PopUpContainers[0].mainHTML+);