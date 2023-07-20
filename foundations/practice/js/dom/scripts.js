
// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//1
const red = document.createElement("p");
red.classList.add("red");
red.textContent = "Hey I'm red!";
red.style.color = "red";

container.appendChild(red);

//2
const blue = document.createElement("h3");
blue.classList.add("blue");
blue.textContent = "I'm a blue h3!";

container.appendChild(blue);

//3
const pink = document.createElement("div");
