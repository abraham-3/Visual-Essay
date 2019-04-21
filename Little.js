// $(document).ready(function() {
//
//     /* Every time the window is scrolled ... */
//     $(window).scroll( function(){
//
//         /* Check the location of each desired element */
//         $('.para-2').each( function(i){
//
//             var bottom_of_object = $(this).position().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
//
//             /* If the object is completely visible in the window, fade it it */
//             if( bottom_of_window > bottom_of_object ){
//
//                 $(this).animate({'opacity':'1'},500);
//
//             }
//
//         });
//
//     });
//
// });


// stuff with the Scroll library below

// ScrollReveal().reveal('img');

// Cursor trick from aNDRY: https://codepen.io/Andy_Davies/pen/jJqpEJ


const ball = document.querySelector("div.ball")
const ball2 = document.querySelector("div.ball2")

let mouseX = 0
let mouseY = 0

let ballX = 0
let ballY = 0

let speed = 0.05
let speed2 = 0.15

function animate() {
  let distX = mouseX - ballX
  let distY = mouseY - ballY

  ballX = ballX + (distX * speed - 1.43)
  ballY = ballY + (distY * speed - 1.43)

    ballX2 = ballX + (distX * speed2 - 1.43)
  ballY2 = ballY + (distY * speed2 - 1.43)

  ball.style.left = ballX + "px"
  ball.style.top = ballY + "px"
  ball2.style.left = ballX2 + "px"
  ball2.style.top = ballY2 + "px"

  requestAnimationFrame(animate)
}

animate()

document.addEventListener("mousemove", function (event) {
  mouseX = event.pageX
  mouseY = event.pageY
})
