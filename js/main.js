/* header slider*/

$('.header-row').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 390,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  });


  /* stack sliders */

  //backend-slider

  $('.backend-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 390,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  });


//frontend-slider

  $('.frontend-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 390,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  });

//aq-slider

$('.aq-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 390,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  });


/* experience-sliders */

//marketing-slider

$('.marketing-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  });

//construction-slider

$('.construction-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  });


/* hidden menu   */

let hiddenBtn = document.querySelector('.hidden__btn');
let hiddenMenu = document.querySelector('.menu__hidden-wrap');

hiddenBtn.addEventListener('click' , function(){
    this.classList.toggle('hidden__btn--open');
    hiddenMenu.classList.toggle('menu__hidden--open');
    
});
hiddenMenu.addEventListener('click', function(e) {
    if (e.target.matches('a')) {
      hiddenMenu.classList.remove('menu__hidden--open');
      burgerMenu.classList.remove('hidden__btn--open');
    }  
  });
