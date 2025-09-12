//Document Object Module(DOM) is a Programming interface or the HTML element that the browser renders when a webpage loads.
//It provides a structured representation of the document, allowing developers to manipulate the content, structure, and style of web pages dynamically using JavaScript.

//DOM Manipulation refers to the process of using JavaScript to interact with and modify the elements, attributes, and content of a web page in real-time.
//This allows developers to create dynamic and interactive web applications by changing the appearance and behavior of web pages based on user interactions or other events.    

const text = document.getElementById("change");
const btn = document.getElementById("btn");
const car = document.getElementById("car");
const btn2 = document.getElementById("btn2");

btn.addEventListener("click", function() {
    car.src = "car.jpg";
});

btn2.addEventListener("click", function() {
    car.remove();
});

const newElement = document.createElement("h2");
newElement.innerHTML = "This is a new element created using JavaScript";
document.body.appendChild(newElement);      

const newimg = document.createElement("img");
newimg.src = "car.jpg";
newimg.style.width = "50%";
document.body.appendChild(newimg);  

const eventbtn = document.getElementById("eventbtn");
eventbtn.addEventListener("click", function() {
    alert("You clicked the button");  
});

const box = document.getElementById("box");
const close = document.getElementById("close"); 
close.addEventListener("click", function() {
    box.style.display = "none"; 
});


// btn.addEventListener("click", function() {   
//     text.innerHTML = "The text has changed";
//     text.style.color = "blue";
//     text.style.backgroundColor = "maroon ";
//     text.style.fontSize = "60px";
//     text.style.textAlign = "center";
// });

// btn.addEventListener("mouseover", function() {
//     btn.innerHTML = "you are hovering over me";
//     btn.style.backgroundColor = "blue"; 
//     btn.style.fontSize = "20px";
// });
// btn.addEventListener("mouseout", function() {
//     btn.innerHTML = "Click Here";
//     btn.style.backgroundColor = "white";
//     btn.style.color = "black";      
// });
// btn.addEventListener("click", function() {
//     btn.style.backgroundColor = "green";      
// });