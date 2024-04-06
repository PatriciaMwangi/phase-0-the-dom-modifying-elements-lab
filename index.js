// Write your code here!
document.getElementById("main").remove('#main')
let newHeader=document.createElement('h1')
document.body.appendChild(newHeader)
newHeader.id='victory'
newHeader.textContent="${YOUR-NAME}is the champion"
