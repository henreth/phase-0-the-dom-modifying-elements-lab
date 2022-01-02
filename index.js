//1
const main = document.getElementById('main');
main.remove();

//2
const newHeader = document.createElement("h1");
newHeader.id="victory";
const node = document.createTextNode("YOUR-NAME is the champion");
newHeader.appendChild(node);
document.body.append(newHeader);