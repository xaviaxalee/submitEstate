// Slide Functionality
(function() {
  let slideIndex = 0;
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;
  const navRadios = document.querySelectorAll('.nav-radio');

  slides.style.transform = `translateX(-${slideIndex * 100}%)`;

  function moveSlides(n) {
      slides.style.transition = 'transform 0.5s ease-in-out';
      slideIndex += n;

      if (slideIndex >= totalSlides) {
          slides.style.transform = `translateX(-${slideIndex * 100}%)`;
          setTimeout(() => {
              slides.style.transition = 'none';
              slideIndex = 1;
              slides.style.transform = `translateX(-${slideIndex * 100}%)`;
          }, 500);
      } else if (slideIndex <= 0) {
          slides.style.transform = `translateX(-${slideIndex * 100}%)`;
          setTimeout(() => {
              slides.style.transition = 'none';
              slideIndex = totalSlides - 2;
              slides.style.transform = `translateX(-${slideIndex * 100}%)`;
          }, 500);
      } else {
          slides.style.transform = `translateX(-${slideIndex * 100}%)`;
      }

      updateRadios();
    }

  function updateRadios() {
      navRadios.forEach((radio, index) => {
          if (index === slideIndex - 1) {
              radio.classList.add('active');
          } else {
              radio.classList.remove('active');
          }
      });
  }

  function autoSlide() {
      moveSlides(1);
  }

  setInterval(autoSlide, 4000);

  document.querySelector('.prev').addEventListener('click', () => moveSlides(-1));
  document.querySelector('.next').addEventListener('click', () => moveSlides(1));

  navRadios.forEach((radio, index) => {
      radio.addEventListener('click', () => {
          slideIndex = index + 1;
          slides.style.transition = 'transform 0.5s ease-in-out';
          slides.style.transform = `translateX(-${slideIndex * 100}%)`;
          updateRadios();
      });
  });

  updateRadios();
})();



// Swiper Functionality
(function() {
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  const swiperSlides = document.querySelectorAll('.swiper-slide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentIndex = 0;
  const slideWidth = swiperSlides[0].offsetWidth;
  const slideInterval = 5000;
  let isSwiping = false;
  let startX;

  function updateSwiper() {
      swiperWrapper.style.transition = 'transform 0.5s ease';
      swiperWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

      if (currentIndex >= swiperSlides.length / 2) {
          setTimeout(() => {
              swiperWrapper.style.transition = 'none';
              currentIndex = 0;
              swiperWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
          }, 500);
      } else if (currentIndex < 0) {
          setTimeout(() => {
              swiperWrapper.style.transition = 'none';
              currentIndex = swiperSlides.length / 2 - 1;
              swiperWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
          }, 500);
      }
  }

  prevBtn.addEventListener('click', () => {
      currentIndex--;
      updateSwiper();
  });

  nextBtn.addEventListener('click', () => {
      currentIndex++;
      updateSwiper();
  });

  function autoSlide() {
      currentIndex++;
      updateSwiper();
  }

  setInterval(autoSlide, slideInterval);

  swiperWrapper.addEventListener('touchstart', (e) => {
      isSwiping = true;
      startX = e.touches[0].clientX;
      swiperWrapper.style.transition = 'none';
  });

  swiperWrapper.addEventListener('touchmove', (e) => {
      if (!isSwiping) return;
      const diff = startX - e.touches[0].clientX;
      swiperWrapper.style.transform = `translateX(-${currentIndex * slideWidth + diff}px)`;
  });

  swiperWrapper.addEventListener('touchend', (e) => {
      isSwiping = false;
      const diff = startX - e.changedTouches[0].clientX;
      if (diff > 50) {
          currentIndex++;
      } else if (diff < -50) {
          currentIndex--;
      }
      updateSwiper();
  });
})();


// reponsive design
function toggleMenu() {
    const navUL = document.querySelector('nav ul');
    navUL.classList.toggle('show');
}



// explore
function populateCities() {
    const cities = {
        "Abuja": ["Garki", "Wuse", "Asokoro", "Maitama", "Gwarinpa"],
        "Port Harcourt": ["Diobu", "Trans Amadi", "GRA", "Rumuokoro", "Oyigbo"],
        "Lagos": ["Ikeja", "Victoria Island", "Lekki", "Ikoyi", "Yaba"]
    };

    const locationsSelect = document.getElementById('locations');

    if (locationsSelect.children.length <= 1) { // Ensure cities are only populated once
        Object.keys(cities).forEach(city => {
            const optgroup = document.createElement('optgroup');
            optgroup.label = city;

            cities[city].forEach(location => {
                const option = document.createElement('option');
                option.value = location;
                option.textContent = location;
                optgroup.appendChild(option);
            });

            locationsSelect.appendChild(optgroup);
        });
    }
}

document.addEventListener('DOMContentLoaded', populateCities);






