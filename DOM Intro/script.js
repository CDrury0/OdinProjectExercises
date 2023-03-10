const start = document.querySelector(".start");

const redParagraph = document.createElement("p");
redParagraph.textContent = "Hey I'm Red!";
redParagraph.style.color = "red";

const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue h3!";
blueH3.style.color = "blue";

const pinkDiv = document.createElement("div");
pinkDiv.style.backgroundColor = "pink";
pinkDiv.style.border = "medium solid black";

const innerH1 = document.createElement("h1");
innerH1.textContent = "I'm in a div!";

const innerP = document.createElement("p");
innerP.textContent = "Me too!";

pinkDiv.appendChild(innerH1);
pinkDiv.appendChild(innerP);

start.appendChild(redParagraph);
start.appendChild(blueH3);
start.appendChild(pinkDiv);