document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });
});


document.addEventListener('DOMContentLoaded', () => {
    const items = [
{
    img: 'images/house(1).png',
    type: 'appartment',
    title: 'grand family house',
    location: 'gwarimpa abuja',
    price: 'N200,000,000',
    rating: '4.8'
},
{
    img: 'images/house(2).png',
    type: 'house',
    title: 'the elements',
    location: 'maitama abuja',
    price: 'N200,000,000',
    rating: '4.8'
},
{
    img: 'images/house(3).png',
    type: 'house',
    title: 'triraksa village 2',
    location: 'wase abuja',
    price: 'N200,000,000',
    rating: '4.8'
},
{
    img: 'images/house(4).png',
    type: 'villa',
    title: 'nuvasa bay',
    location: 'wase abuja',
    price: 'N200,000,000',
    rating: '4.8'
},
{
  img: 'images/house(1).png',
  type: 'appartment',
  title: 'grand family house',
  location: 'gwarimpa abuja',
  price: 'N200,000,000',
  rating: '4.8'
},
{
  img: 'images/house(2).png',
  type: 'house',
  title: 'the elements',
  location: 'maitama abuja',
  price: 'N250,000,000',
  rating: '4.7'
},
{
  img: 'images/house(3).png',
  type: 'house',
  title: 'triraksa village 2',
  location: 'wase abuja',
  price: 'N220,000,000',
  rating: '4.9'
},
{
  img: 'images/house(4).png',
  type: 'villa',
  title: 'nuvasa bay',
  location: 'wase abuja',
  price: 'N300,000,000',
  rating: '4.8'
},
{
  img: 'images/house(1).png',
  type: 'villa',
  title: 'nuvasa bay',
  location: 'wase abuja',
  price: 'N210,000,000',
  rating: '4.8'
},
{
  img: 'images/house(2).png',
  type: 'villa',
  title: 'nuvasa bay',
  location: 'wase abuja',
  price: 'N220,000,000',
  rating: '4.8'
},
{
  img: 'images/house(3).png',
  type: 'villa',
  title: 'nuvasa bay',
  location: 'wase abuja',
  price: 'N230,000,000',
  rating: '4.8'
},
{
  img: 'images/house(4).png',
  type: 'villa',
  title: 'nuvasa bay',
  location: 'wase abuja',
  price: 'N240,000,000',
  rating: '4.8'
},
{
  img: 'images/house(1).png',
  type: 'villa',
  title: 'nuvasa bay',
  location: 'wase abuja',
  price: 'N250,000,000',
  rating: '4.8'
},
{
  img: 'images/house(2).png',
  type: 'villa',
  title: 'nuvasa bay',
  location: 'wase abuja',
  price: 'N260,000,000',
  rating: '4.8'
},
{
  img: 'images/house(3).png',
  type: 'villa',
  title: 'nuvasa bay',
  location: 'wase abuja',
  price: 'N270,000,000',
  rating: '4.8'
},
{
  img: 'images/house(4).png',
  type: 'villa',
  title: 'nuvasa bay',
  location: 'wase abuja',
  price: 'N280,000,000',
  rating: '4.8'
},
{
  img: 'images/house(1).png',
  type: 'apartment',
  title: 'modern city apartment',
  location: 'central abuja',
  price: 'N190,000,000',
  rating: '4.9'
},
{
  img: 'images/house(2).png',
  type: 'house',
  title: 'luxury house',
  location: 'utako abuja',
  price: 'N270,000,000',
  rating: '4.6'
},
{
  img: 'images/house(3).png',
  type: 'villa',
  title: 'spacious villa',
  location: 'jabi abuja',
  price: 'N320,000,000',
  rating: '4.7'
},
{
  img: 'images/house(4).png',
  type: 'apartment',
  title: 'city view apartment',
  location: 'asokoro abuja',
  price: 'N210,000,000',
  rating: '4.8'
},
{
  img: 'images/house(1).png',
  type: 'house',
  title: 'country house',
  location: 'kubwa abuja',
  price: 'N220,000,000',
  rating: '4.5'
},
{
  img: 'images/house(2).png',
  type: 'villa',
  title: 'villa on the hill',
  location: 'garki abuja',
  price: 'N250,000,000',
  rating: '4.9'
},
{
  img: 'images/house(3).png',
  type: 'apartment',
  title: 'luxury penthouse',
  location: 'wuse abuja',
  price: 'N280,000,000',
  rating: '4.7'
},
{
  img: 'images/house(4).png',
  type: 'house',
  title: 'charming cottage',
  location: 'abo lagoon',
  price: 'N230,000,000',
  rating: '4.6'
},
{
  img: 'images/house(1).png',
  type: 'villa',
  title: 'sea view villa',
  location: 'guarimpa abuja',
  price: 'N290,000,000',
  rating: '4.8'
},
{
  img: 'images/house(2).png',
  type: 'apartment',
  title: 'spacious loft',
  location: 'wuse 2 abuja',
  price: 'N210,000,000',
  rating: '4.9'
},
{
  img: 'images/house(3).png',
  type: 'house',
  title: 'urban house',
  location: 'kado abuja',
  price: 'N240,000,000',
  rating: '4.7'
},
{
  img: 'images/house(4).png',
  type: 'villa',
  title: 'luxury estate',
  location: 'jabi abuja',
  price: 'N330,000,000',
  rating: '4.8'
},
{
  img: 'images/house(1).png',
  type: 'apartment',
  title: 'cozy apartment',
  location: 'wuse 2 abuja',
  price: 'N200,000,000',
  rating: '4.8'
},
{
  img: 'images/house(2).png',
  type: 'villa',
  title: 'villa retreat',
  location: 'abaji abuja',
  price: 'N270,000,000',
  rating: '4.6'
},
{
  img: 'images/house(3).png',
  type: 'house',
  title: 'townhouse',
  location: 'wuse abuja',
  price: 'N250,000,000',
  rating: '4.8'
},
{
  img: 'images/house(4).png',
  type: 'apartment',
  title: 'executive suite',
  location: 'maitama abuja',
  price: 'N220,000,000',
  rating: '4.9'
}
// Add all items similarly
];

const itemsPerPage = 12;
const paginationContainer = "#pagination";
let currentView = 'grid-view';

function paginate(items, itemsPerPage, paginationContainer) {
    let currentPage = 1;
    const totalPages = Math.ceil(items.length / itemsPerPage);

    function showItems(page) {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const pageItems = items.slice(startIndex, endIndex);
  
      const menuContainer = document.getElementById("menu");
      menuContainer.innerHTML = "";
      menuContainer.className = currentView;
  
      pageItems.forEach((item, index) => {
          const boxTex = document.createElement("div");
          boxTex.classList.add("box-tex");
          boxTex.innerHTML = `
              <img src="${item.img}" alt="">
              <span>${item.type}</span>
              <h3>${item.title}</h3>
              <p><i class="fa-solid fa-location-dot"></i> ${item.location}</p>
              <div class="amount">
                  <h4>${item.price}</h4>
                  <p><i class="fa-solid fa-star"></i> ${item.rating}</p>
              </div>
          `;
  
          // Add click event listener for redirection
          boxTex.addEventListener('click', () => {
              window.location.href = `details.html?item=${encodeURIComponent(item.title)}`;
          });
  
          menuContainer.appendChild(boxTex);
        });
    }

    function setupPagination() {
        const pagination = document.querySelector(paginationContainer);
        pagination.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
            const link = document.createElement("a");
            link.href = "#";
            link.innerText = i;

            if (i === currentPage) {
                link.classList.add("active");
            }

            link.addEventListener("click", (event) => {
                event.preventDefault();
                currentPage = i;
                showItems(currentPage);

                const currentActive = pagination.querySelector(".active");
                if (currentActive) {
                    currentActive.classList.remove("active");
                }
                link.classList.add("active");
            });

            pagination.appendChild(link);
        }
    }

    showItems(currentPage);
    setupPagination();
}

document.getElementById('search-button').addEventListener('click', function () {
    const location = document.getElementById('location').value.toLowerCase();
    const type = document.getElementById('type').value.toLowerCase();
    const range = document.getElementById('range').value;

    const filteredItems = items.filter(item => {
        const inLocation = !location || item.location.toLowerCase().includes(location);
        const inType = !type || item.type.toLowerCase().includes(type);
        const inRange = !range || (parseFloat(item.price.replace(/N|,/g, '')) >= parseFloat(range.split('-')[0].trim().replace(/N|,/g, '')) && parseFloat(item.price.replace(/N|,/g, '')) <= parseFloat(range.split('-')[1].trim().replace(/N|,/g, '')));

        return inLocation && inType && inRange;
    });

    paginate(filteredItems, itemsPerPage, paginationContainer);
});

document.getElementById('sort-options').addEventListener('change', function () {
    const sortBy = this.value;

    items.sort((a, b) => {
        if (sortBy === 'location') {
            return a.location.localeCompare(b.location);
        } else if (sortBy === 'price') {
            return parseFloat(a.price.replace(/N|,/g, '')) - parseFloat(b.price.replace(/N|,/g, ''));
        } else if (sortBy === 'type') {
            return a.type.localeCompare(b.type);
        } else {
            return 0; // Default sorting
        }
    });

    paginate(items, itemsPerPage, paginationContainer);
});

document.getElementById('grid-view').addEventListener('click', function () {
    currentView = 'grid-view';
    paginate(items, itemsPerPage, paginationContainer);
});

document.getElementById('list-view').addEventListener('click', function () {
    currentView = 'list-view';
    paginate(items, itemsPerPage, paginationContainer);
});

paginate(items, itemsPerPage, paginationContainer);

// Responsive Navbar Toggle
document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelector('.menu ul').classList.toggle('active');
});
});

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