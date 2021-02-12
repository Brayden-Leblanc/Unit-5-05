let number = 0
let sentence = 'hello, this is the number 3.'

document.getElementById('calculate').addEventListener('click', addition)

function addition () {
  number = document.getElementById('input').value
  number = parseInt(number)
  number = number * number
  alert(number)
}