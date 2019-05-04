var errorText = document.getElementById("email_error").firstChild.nodeValue;
errorText = errorText.toUpperCase();

document.getElementById("email_error").firstChild.nodeValue = "Real text is in HTML file";
