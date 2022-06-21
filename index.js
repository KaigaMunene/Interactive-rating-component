const form = document.querySelector('.form')
const inputs = document.querySelectorAll('.radio-input')
const ratingCard = document.querySelector('.main')

let ratingValue

inputs.forEach(input => {
  input.addEventListener('change', (e) => {
    ratingValue = e.target.value
  })
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (!ratingValue) return
  renderThankYouContent(ratingCard, ratingValue)
}
)

function renderThankYouContent (container, ratingValue) {
  container.innerHTML = `
  <div class="thank-you-content">
  <div class="thank-you-img">
      <img src="./Images/illustration-thank-you.svg" alt="thank-you" class="thanks-img">
  </div>
  <div class="rate">
      <p class="the-rating">You have selected ${ratingValue} out of 5</p>
  </div>
  <h1 class="thank-you-title">Thank you!</h1>
  <p class="thank-you-text">We appreciate you taking the time to give a rating. If you ever need more support,
      don't hesitate to get in touch!</p>
</div>
    `
}
