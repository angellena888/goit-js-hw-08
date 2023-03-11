import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('.feedback-form input');
const messageInput = form.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';

const saveState = throttle((state) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}, 500);


form.addEventListener('input', () => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  saveState(state);
});


const savedState = localStorage.getItem(STORAGE_KEY);
if (savedState) {
  const { email, message } = JSON.parse(savedState);
  emailInput.value = email;
  messageInput.value = message;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(state);

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
});

