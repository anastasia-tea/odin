
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
blue.style.color = "blue";

container.appendChild(blue);

//3
const pink = document.createElement("div");
pink.classList.add("pink");
pink.style.border = "solid black";
pink.style = "background-color: pink;";

const hOne = document.createElement("h1");
hOne.classList.add("hOne");
hOne.textContent = "I'm in a div";

const para = document.createElement("p");
para.classList.add("para");
para.textContent = "ME TOO!";

pink.appendChild(hOne);
pink.appendChild(para);

container.appendChild(pink);
