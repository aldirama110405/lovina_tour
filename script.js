document.addEventListener('DOMContentLoaded', () => {
    const tripData = [
      {
        image: 'dolphin.jpg',
        title: 'Dolphin Watching',
        description: 'Experience an amazing sunrise dolphin watching tour in Lovina.',
        price: 'Rp 300.000 / person',
        whatsappLink: 'https://wa.me/6281234567890?text=I%20want%20to%20book%20Dolphin%20Watching%20tour'
      },
      {
        image: 'snorkeling.jpeg',
        title: 'Snorkeling Adventure',
        description: 'Explore the underwater beauty with our snorkeling package.',
        price: 'Rp 400.000 / person',
        whatsappLink: 'https://wa.me/6281234567890?text=I%20want%20to%20book%20Snorkeling%20Adventure'
      },
      {
        image: 'sunset.jpg',
        title: 'Sunset Cruise',
        description: 'Enjoy a beautiful sunset cruise along the Lovina coast.',
        price: 'Rp 500.000 / person',
        whatsappLink: 'https://wa.me/6281234567890?text=I%20want%20to%20book%20Sunset%20Cruise'
      },
      {
        image: 'waterfall.jpeg',
        title: 'Waterfall Trekking',
        description: 'Discover the stunning waterfalls of Bali with our guided trek.',
        price: 'Rp 350.000 / person',
        whatsappLink: 'https://wa.me/6281234567890?text=I%20want%20to%20book%20Waterfall%20Trekking'
      },
      {
        image: 'temple.jpeg',
        title: 'Temple Tour',
        description: 'Visit the most beautiful temples in North Bali.',
        price: 'Rp 250.000 / person',
        whatsappLink: 'https://wa.me/6281234567890?text=I%20want%20to%20book%20Temple%20Tour'
      },
      {
        image: 'hot_spring.jpg',
        title: 'Hot Spring Relaxation',
        description: 'Relax and rejuvenate in a natural hot spring.',
        price: 'Rp 300.000 / person',
        whatsappLink: 'https://wa.me/6281234567890?text=I%20want%20to%20book%20Hot%20Spring%20Relaxation'
      }
    ];
  
    const tripGrid = document.getElementById('tripGrid');
    const popupOverlay = document.getElementById('popupOverlay');
    const popupContent = document.getElementById('popupContent');
  
    if (!tripGrid || !popupOverlay || !popupContent) {
      console.error('Element not found');
      return;
    }
  
    tripData.forEach((trip) => {
      const card = document.createElement('div');
      card.classList.add('trip-card');
      card.innerHTML = `
        <img src="${trip.image}" alt="${trip.title}">
        <h3>${trip.title}</h3>
        <p>${trip.description}</p>
      `;
  
      card.addEventListener('click', () => {
        popupContent.innerHTML = `
          <h2>${trip.title}</h2>
          <p>${trip.description}</p>
          <p><strong>Price:</strong> ${trip.price}</p>
          <a href="${trip.whatsappLink}" target="_blank">Order via WhatsApp</a>
          <button class="close-btn">Close</button>
        `;
  
        const closeButton = popupContent.querySelector('.close-btn');
        closeButton.addEventListener('click', () => {
          popupOverlay.style.display = 'none';
        });
  
        popupOverlay.style.display = 'flex';
      });
  
      tripGrid.appendChild(card);
    });
  });
  
  
  // Example for auto-slide carousel
$('.carousel').carousel({
  interval: 5000 // Change image every 5 seconds
});
