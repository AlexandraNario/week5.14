// Start with a JS file linked to an HTML file
//Using JS, create an <img> element 
//Use a method to give it a value for the src attribute


// Create an img element
let myImg = document.createElement("img");

// Set the src attribute
myImg.setAttribute( 
  "src",
"https://th.bing.com/th/id/OIP.JPllmkWBqX_ALvUO_DAnZwHaE7?pid=ImgDet&rs=1"
  );

// Get the div element
let imgContainer = document.createElement("div")

// Append the img element to the div element
document.body.append(imgContainer);
imgContainer.append(myImg);

// Call the remove() method on the img element to remove it from the page
//IMPORTANT!!!delete the 2 slashes BELOW to remove the image form the page 
//myImg.remove();