let isMoving = false;

function moveDiv() {
  const movingDiv = document.getElementById('movingDiv');
  
  if (!isMoving) {
    // Move to the right
    movingDiv.style.transform = 'translate(calc(50vw - 50px), -50%)';
  } else {
    // Move back to the center
    movingDiv.style.transform = 'translate(-50%, -50%)';
  }

  // Toggle the moving state
  isMoving = !isMoving;
}