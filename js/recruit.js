window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("loading").classList.remove("active");
  }, 500)
})

const titleElement = document.querySelector('header'),
  titleTexts = titleElement.textContent.split('')
titleElement.textContent = ''
let outputTexts = ''
titleTexts.forEach(text => outputTexts += `<span>${text}</span>`)
titleElement.innerHTML = outputTexts

gsap.set('header span', {
  filter: 'blur(3px)',
  opacity: 0,
  scale: 2,
})
gsap.to('header span', 1, {
  filter: 'blur(0px)',
  opacity: 1,
  scale: 1,
  ease: 'power2.out',
  stagger: {
    amount: 1,
    from: 'random'
  }
}, '.3')

gsap.to('header', {
  opacity: 0,
  gap: '50px',
  scrollTrigger: {
    trigger: 'header',
    start: '80% center',
    end: '120% center',
    scrub: .5
  }
})

const subTitleElement = document.querySelectorAll('.contents h2')
subTitleElement.forEach(el => {
  const subTitleTexts = el.textContent.split('')
  el.textContent = ''
  let outputTexts = ''
  subTitleTexts.forEach(text => outputTexts += text === ' ' ? ' ' : `<span>${text}</span>`)
  el.innerHTML = outputTexts
})

const toUpObjects = document.getElementById('toUpObjects'),
  objectNumber = 50
for (let i = 0; i < objectNumber; i++) {
  const li = document.createElement('li')
  li.style.width = `${100 / objectNumber}%`
  li.style.transform = `scale(${gsap.utils.random(.7, 1.2)})`
  toUpObjects.appendChild(li)
}

gsap.timeline({
  scrollTrigger: {
    trigger: '.contents',
    start: 'center center',
    end: '+=1500',
    pin: true,
    scrub: .5
  }
})
  .to('.toUpObjects li', 1.2, {
    y: -(window.innerHeight * 1.2),
    ease: 'power3.in',
    stagger: {
      amount: 1,
      from: 'random'
    }
  })
  .from('.contents h2', .3, {
    opacity: 0,
    y: 10
  }, '-=.5')
  .from('.contents h2 span', .5, {
    opacity: 0,
    scaleX: .4,
    y: -25,
    stagger: {
      amount: 2,
      from: 'random'
    }
  }, '<.2')
  .from('.contentsList li', .5, {
    opacity: 0,
    x: -15,
    ease: 'power4.out',
    stagger: {
      amount: 1,
      onStart: function () { this.targets()[0].classList.add('show') },
      onReverseComplete: function () { this.targets()[0].classList.remove('show') }
    }
  }, '-=.5')