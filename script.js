const scriptURL = 'https://script.google.com/macros/s/AKfycbzhN3XguHk3_9Prm6TPMbX8K43uydtYzUnPiFWJBec9F8JEt_hsCSGMSTGul79GQWYlcA/exec'
const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
