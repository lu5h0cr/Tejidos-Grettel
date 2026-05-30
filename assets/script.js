const productCards = document.querySelectorAll('.product-card');
const modal = document.querySelector('#productModal');
const modalImg = document.querySelector('#modalImg');
const modalTitle = document.querySelector('#modalTitle');
const modalDescription = document.querySelector('#modalDescription');
const modalWhatsapp = document.querySelector('#modalWhatsapp');
const closeButtons = document.querySelectorAll('[data-close-modal]');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();

function openModal(card) {
  const title = card.dataset.title;
  const img = card.dataset.img;
  const description = card.dataset.description;
  const whatsappText = encodeURIComponent(`Hola Yelin Boutique, quiero información sobre el ${title}.`);

  modalTitle.textContent = title;
  modalDescription.textContent = description;
  modalImg.src = img;
  modalImg.alt = title;
  modalWhatsapp.href = `https://wa.me/50600000000?text=${whatsappText}`;

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

productCards.forEach((card) => {
  card.addEventListener('click', () => openModal(card));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openModal(card);
    }
  });
});

closeButtons.forEach((button) => {
  button.addEventListener('click', closeModal);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) {
    closeModal();
  }
});
