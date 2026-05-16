
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
    slidesToShow: 1,
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
        settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: false }
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
  "images/residential-house-construction-chennai-1.jpeg",
 "images/roof-level-brickwork-construction.jpeg",
 "images/slab-reinforcement-construction-work1.jpeg",
 "images/construction-site-materials-bricks-chennai.jpeg",
 "images/commercial-building-construction-chennai1.jpg",
 "images/construction-pillars-base-work-chennai.jpeg",
 "images/construction-workers-site-activity.jpeg",
 "images/commercial-construction-site-work-chennai.jpg",
 "images/bathroom-waterproofing-work-chennai-tamilnadu-vrn-aiswaryam-homes.jpeg",
 "images/interior-brickwork-construction-chennai-tamilnadu-vrn-aiswaryam-homes.jpeg",
 "images/residential-interior-brickwork-wall-construction-chennai-vrn-aiswaryam-homes.jpeg",
 "images/construction-site-land-survey-chennai-vrn-aiswaryam-homes.jpeg",
 "images/road-infrastructure-development-work-tamilnadu-vrn-aiswaryam-homes.jpeg",
 "images/underground-pipeline-installation-work-chennai-vrn-aiswaryam-homes.jpeg",
 "images/soil-testing-borewell-drilling-work-tamilnadu-vrn-aiswaryam-homes.jpeg",
 "images/modern-duplex-house-3d-elevation-design-chennai-vrn-aiswaryam-homes.jpeg",
 "images/modern-luxury-villa-elevation-design-chennai-vrn-aiswaryam-homes.jpeg",
 "images/contemporary-duplex-home-3d-design-tamilnadu-vrn-aiswaryam-homes.jpeg",
 "images/premium-curved-house-elevation-design-chennai-vrn-aiswaryam-homes.jpeg",
 "images/stylish-double-floor-home-exterior-design-tamilnadu-vrn-aiswaryam-homes.jpeg",
 "images/home-renovation-interior-remodeling-chennai-vrn-aiswaryam-homes.jpeg",
 "images/rooftop-waterproofing-repair-chennai.jpeg",
 
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









   