const app = "I don't do much."

var dodger = document.getElementById('dodger');

function moveDodgerLeft() {



  if (parseInt(dodger.style.left.replace('px', ''), 10) > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  if (parseInt(dodger.style.right.replace('px', ''), 10) > 0) {
    dodger.style.right = `${parseInt(dodger.style.right.replace('px', ''), 10) - 1}px`
  }
}
document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    moveDodgerRight()
  }else if (e.which === 37 {
    moveDodgerLeft()
  }
})
