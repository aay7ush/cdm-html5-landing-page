lucide.createIcons()

const form = document.querySelector('form')
const emailInput = document.querySelector('input[name="email"]')
const errorText = document.querySelector('.error')

// Regular expression pattern for email validation
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const emailValue = emailInput.value

  if (emailValue.match(emailPattern)) {
    alert('Thank You for Subscribing!')
    emailInput.value = ''
  } else {
    emailInput.style.borderColor = '#ff0000'
    errorText.style.display = 'block'
  }
})

emailInput.addEventListener('keydown', () => {
  emailInput.style.borderColor = '#8a9093'
  errorText.style.display = 'none'
})
