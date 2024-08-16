document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
  });

  
  const ctx = document.getElementById('myDonutChart').getContext('2d');

  new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ['Property Tax', 'Home Insurance', 'PMI', 'Other'],
          datasets: [{
              data: [40, 30, 20, 10], // Adjust these values for segment sizes
              backgroundColor: ['#FF9933', '#264D80', '#155C3F', '#d3d3d3'],
              borderWidth: [8, 4, 1, 0.25, 0],
              borderColor: ['#FF9933', '#264D80', '#155C3F', '#d3d3d3']
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '85%',
          plugins: {
              legend: {
                  position: 'bottom',
                  labels: {
                      usePointStyle: true,
                      pointStyle: 'circle',
                  }
              },
              tooltip: {
                  enabled: false,
              }
          }
      }
  });