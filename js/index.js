
$(document).ready(function() {

  // Load header
  $("#header").load("header.html", function() {

      // 🔥 INIT MENU AFTER HEADER LOAD
      $("#my-menu").mmenu({
          navbar: {
              title: "VRN CONSTUCTION"
          }
      });

      // Then load footer
      $("#footer").load("footer.html");

  });

});




const cards = document.querySelectorAll('.service-card');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.9;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add('show');
    }
  });
});







$(document).ready(function () {
  $('.card-slide-testimonial').slick({
    dots: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    arrows:true,
    centerMode: true,
    centerPadding: '0px',
    autoplaySpeed: 1500,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 320,
        settings: { slidesToScroll: 1, slidesToShow: 1, centerMode: false }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerMode: false, arrows: false, }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1, centerMode: false }
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 3, slidesToScroll: 1 }
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3, slidesToScroll: 1 }
      }
    ]
  });
});



// $(document).ready(function () {
//   $('.card-slide-testimonial').slick({
//     dots: false,
//     arrows: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: '0px',
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: { slidesToShow: 3 }
//       },
//       {
//         breakpoint: 768,
//         settings: { slidesToShow: 2, centerMode: false }
//       },
//       {
//         breakpoint: 576,
//         settings: { slidesToShow: 1, centerMode: false }
//       }
//     ]
//   });
// });




const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const speed = 50;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(update, 30);
    } else {
      counter.innerText = target;
    }
  };

  update();
});



  $(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});






const images = [
  "images/vrn1.jpeg",
 "images/vrn2.jpeg",
 "images/vrn3.jpeg",
 "images/vrn4.jpeg",
 "images/vrn5.jpeg",
 "images/vrn6.jpeg",
 "images/vrn7.jpeg",
 "images/vrn8.jpeg",
 "images/vrn9.jpeg",
 "images/vrn10.jpeg",
 "images/vrn11.jpeg",
 "images/vrn12.jpeg",
 "images/vrn13.jpeg",
 "images/vrn14.jpeg",
 "images/vrn15.jpeg",
 "images/vrn16.jpeg",
 "images/vrn17.jpeg",
 "images/vrn18.jpeg",
 "images/vrn19.jpeg",
 "images/vrn20.jpeg",
 "images/vrn21.jpeg",
 "images/vrn22.jpeg",
 "images/vrn23.jpeg",
 "images/vrn24.jpeg",
 "images/vrn25.jpeg",
 "images/vrn26.jpeg",
 "images/vrn27.jpeg",
 "images/vrn28.jpeg",
 "images/vrn29.jpeg"
   ];
   
   let currentIndex = 0;
   const modal = new bootstrap.Modal(document.getElementById('galleryModal'));
   const modalImg = document.getElementById("modalImage");
   
   function openModal(index) {
     currentIndex = index;
     modalImg.src = images[currentIndex];
     modal.show();
   }
   
   function nextImage() {
     currentIndex = (currentIndex + 1) % images.length;
     modalImg.src = images[currentIndex];
   }
   
   function prevImage() {
     currentIndex = (currentIndex - 1 + images.length) % images.length;
     modalImg.src = images[currentIndex];
   }
   
   function zoomImage() {
     modalImg.classList.toggle("zoomed");
   }









   