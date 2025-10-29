// Section Navigation
function showSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Bio Popup
function showBio(text) {
  document.getElementById('bio-text').innerText = text;
  document.getElementById('bio-popup').classList.remove('hidden');
}

function closeBio() {
  document.getElementById('bio-popup').classList.add('hidden');
}

// Testimonials
const form = document.getElementById('testimonial-form');
const list = document.getElementById('testimonial-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const input = document.getElementById('testimonial-input');
  if (input.value.trim() !== '') {
    const newTestimonial = document.createElement('p');
    newTestimonial.textContent = `"${input.value}"`;
    list.appendChild(newTestimonial);
    input.value = '';
  }
});