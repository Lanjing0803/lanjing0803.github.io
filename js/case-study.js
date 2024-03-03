


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



document.addEventListener("DOMContentLoaded", function () {
  var scrollElements = document.querySelectorAll('[data-scroll]');

  window.addEventListener('scroll', function () {

    var scrollPosition = window.scrollY;

    // Apply parallax effect to each element
    scrollElements.forEach(function (element) {
      var speed = parseFloat(element.getAttribute('data-scroll')) || 1;
      element.style.transform = 'translateY(' + -(scrollPosition * speed*0.5) + 'px)';
    });
  });
});

