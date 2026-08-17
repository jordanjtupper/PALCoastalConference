const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const registrationForm = document.querySelector('#demo-registration-form');
const registrationMessage = document.querySelector('#registration-message');

if (registrationForm && registrationMessage) {
  registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    registrationMessage.textContent = 'Prototype only: this button will hand off to Wix Events / Wix Payments in the final Wix site.';
  });
}

const sponsorMessage = document.querySelector('#sponsor-message');
document.querySelectorAll('.sponsor-demo').forEach((button) => {
  button.addEventListener('click', () => {
    sponsorMessage.textContent = `${button.dataset.sponsor} selected. In the Wix build, this will open the appropriate sponsor checkout flow.`;
    sponsorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});
