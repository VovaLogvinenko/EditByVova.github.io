function initBurgerMenu() {
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('nav')

  if (!burger || !nav) return // якщо не знайдено — нічого не робимо

  burger.addEventListener('click', () => {
    nav.classList.toggle('open')
    burger.classList.toggle('active')
  })
}

// зробити глобальною, щоб викликати з router.js
window.initBurgerMenu = initBurgerMenu

function initNumberAnimation() {
  const section = document.querySelector('.experience')
  if (!section) return

  if (sessionStorage.getItem('numbersAnimated') === 'true') return

  const numbers = section.querySelectorAll('.number')

  numbers.forEach(el => {
    const target = parseInt(el.dataset.target)
    el.textContent = '0'
    animateNumber(el, target)
  })

  sessionStorage.setItem('numbersAnimated', 'true')
}


function animateNumber(el, target) {
  let current = 0
  const increment = target / 100
  const duration = 1000
  const stepTime = duration / 100

  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      el.textContent = target
      clearInterval(timer)
    } else {
      el.textContent = Math.floor(current)
    }
  }, stepTime)
}

// робимо функцію глобальною
window.initNumberAnimation = initNumberAnimation


