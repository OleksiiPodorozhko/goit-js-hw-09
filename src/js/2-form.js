const formData = {
  email: '',
  message: '',
}

const formStateKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailField =  form.querySelector('.email');
const messageField =  form.querySelector('.message');

restoreFormData();

form.addEventListener('input', (event) => {
  if (event.target.classList.contains('email')) {
    formData.email = event.target.value.trim();
  }

  if (event.target.classList.contains('message')) {
    formData.message = event.target.value.trim();
  }

  localStorage.setItem(formStateKey, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (formData.email && formData.message) {
    console.log(formData);
    formData.email = '';
    formData.message = '';
    localStorage.removeItem(formStateKey);
    form.reset();
  } else {
    alert('Fill please all fields.');
  }
})

function restoreFormData() {
  const storedFormData = JSON.parse(localStorage.getItem(formStateKey)) || {
    email: '',
    message: '',
  };

  formData.email = storedFormData.email || '';
  formData.message = storedFormData.message || '';

  emailField.value = formData.email;
  messageField.value = formData.message;
}