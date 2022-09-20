const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })
})


/*/scss/*/

// http://ahrengot.com/tutorials/greensock-javascript-animation

var $cursor = $('.cursor');

function moveCursor(e) {
  $cursor.addClass('is-moving');
  
  TweenLite.to($cursor, 0.23, {
    left: e.pageX,
    top: e.pageY,
    ease: Power4.easOut
  });
  
  clearTimeout(timer);

   var timer = setTimeout(function() {
       $cursor.removeClass('is-moving');
   }, 300);
}

$(window).on('mousemove', moveCursor);