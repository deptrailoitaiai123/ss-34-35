h2 = document.getElementById("h2-id")
button = document.getElementById("button-id")

console.log(h2, button)

button.style.backgroundColor="blue"
button.style.borderRadius="20px"
button.style.height = "50px"
button.style.width = "150px"

button.onclick = function(){
	h2.innerText = "text after change"
}
