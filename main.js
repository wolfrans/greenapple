const toggleBtn = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// 1. Hide nav when clicking outside (mobile)
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
    navMenu.classList.remove('show');
  }
});

// 2. Modal logic
const modal = document.getElementById('product-modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close-btn');
const productCards = document.querySelectorAll('.skill-card');

// Open modal with placeholder image
productCards.forEach(card => {
  card.addEventListener('click', () => {
    // Get image path from data attribute
    const imgPath = card.getAttribute('data-img') || 'images/placeholder.jpg';
    modalImg.src = imgPath;
    modal.style.display = 'flex';
  });
});


// Close modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
//Prevent modal picture appearing upon refreshing the page
window.addEventListener("load", () => {
  const modal = document.querySelector(".modal");
  if (modal) {
    modal.style.display = "none";  // Force hide on refresh
  }
});