const scrollThreshold = 280; // Adjust this value for scrolling distance

let isScrolling = false;
let currentScroll = window.scrollY;

window.addEventListener('wheel', (event) => {
    const intensity = Math.abs(event.deltaY); // Measure the scrolling intensity
    const scrollStep = scrollThreshold + intensity * 0.1; // Adjust this value for sensitivity

    if (event.deltaY > 0) {
        smoothScroll(currentScroll + scrollStep);
    } else {
        smoothScroll(currentScroll - scrollStep);
    }
});

function smoothScroll(targetY) {
    if (isScrolling) return;
    isScrolling = true;

    const scrollStep = (targetY - currentScroll) / 10; // Adjust this value for smoothness
    function scroll() {
        if ((scrollStep > 0 && currentScroll < targetY) || (scrollStep < 0 && currentScroll > targetY)) {
            currentScroll += scrollStep;
            window.scrollTo(0, currentScroll);
            requestAnimationFrame(scroll);
        } else {
            currentScroll = targetY;
            isScrolling = false;
        }
    }

    scroll();
}


 // Scroll to the top when the page loads -- NOT WORKING WHEN FIRST REFRESH


window.addEventListener('unload', function () {
    window.scrollTo(0, 0);
});



$(function(){
    $('.carousel-item').eq(0).addClass('cactive');
    var total = $('.carousel-item').length;
    var current = 0;
    $('#moveRight').on('click', function(){
      var next=current;
      current= current+1;
      setSlide(next, current);
    });
    $('#moveLeft').on('click', function(){
      var prev=current;
      current = current- 1;
      setSlide(prev, current);
    });
    function setSlide(prev, next){
      var slide= current;
      if(next>total-1){
       slide=0;
        current=0;
      }
      if(next<0){
        slide=total - 1;
        current=total - 1;
      }
             $('.carousel-item').eq(prev).removeClass('cactive');
             $('.carousel-item').eq(slide).addClass('cactive');
        setTimeout(function(){
  
        },800);
      
  
      
      console.log('current '+current);
      console.log('prev '+prev);
    }
  });


  
  $(document).ready(function () {
    $('a[data-toggle="tab"]').on('click', function (e) {
        e.preventDefault();

        var href = $(this).attr('href');
        var $curr = $(".process-model a[href='" + href + "']").parent();

        $('.process-model li').removeClass('pactive visited');
        $curr.addClass("pactive").prevAll().addClass("visited");

        $('.tab-content .tab-pane').hide();
        $(href).show();
    });
});


