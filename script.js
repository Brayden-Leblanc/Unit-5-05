let number = 0

document.getElementById('calculate').addEventListener('click', addition)

function addition () {
  number = document.getElementById('input').value
  number = parseInt(number)
  number = number * number
  alert(number)
}
