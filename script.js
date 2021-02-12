let number = 0
let string = "The area of the square would be "

document.getElementById("alert-client").addEventListener("click", notify)

function notify() {
  number = document.getElementById("input").value

  document.getElementById("input").value = ""

  number = parseInt(number)
  number = number*number
  
  alert(string + number) // Lets go! Lua experience for the win!
}