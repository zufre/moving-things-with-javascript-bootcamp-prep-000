const app = "I don't do much."

var dodger = document.getElementById('dodger');

function moveDodgerLeft() {



  if (parseInt(dodger.style.left.replace('px', ''), 10) > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (dodger.style.right > 0) {
    dodger.style.left = `${left +1}px`
  }
}
document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    moveDodgerRight()
  }else if (e.which === 37 {
    moveDodgerLeft()
  }
})
