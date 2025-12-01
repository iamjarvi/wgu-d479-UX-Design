// Shared JS for the multi-page prototype

// Mobile Menu Toggle
function toggleMenu() {
  const menu = document.querySelector('.nav-links');
  if (menu) menu.classList.toggle('active');
}

// Modal Logic (booking modal used on booking page)
function openModal(packageName) {
  const modal = document.getElementById('bookingModal');
  const modalTitle = document.getElementById('modalTitle');
  if (!modal) return;
  if (modalTitle) modalTitle.innerText = 'Book: ' + packageName;
  modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.getElementById('bookingModal');
  if (!modal) return;
  modal.style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', function (event) {
  const modal = document.getElementById('bookingModal');
  if (!modal) return;
  if (event.target === modal) {
    closeModal();
  }
});

// Highlight active nav link based on pathname
function highlightActiveNav() {
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(a => a.classList.remove('active'));
  const path = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    // Normalize index
    const hrefName = href.split('/').pop() || 'index.html';
    if (hrefName === path) a.classList.add('active');
  });
}

window.addEventListener('DOMContentLoaded', highlightActiveNav);

// Toggle search input on mobile
function toggleSearch() {
  const navSearch = document.querySelector('.nav-search');
  if (!navSearch) return;
  navSearch.classList.toggle('active');
  const input = navSearch.querySelector('.search-input');
  if (navSearch.classList.contains('active') && input) {
    setTimeout(() => input.focus(), 100);
  }
}
