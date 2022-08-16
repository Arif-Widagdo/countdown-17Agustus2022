
let previousTimeBetweenDates
setInterval(() => {
  const countToDate = new Date("August 17, 2022 00:00:00");
  const currentDate = new Date()
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000)
  flipAllCards(timeBetweenDates)
  previousTimeBetweenDates = timeBetweenDates
}, 250)

  
function flipAllCards(time) {
  const seconds = time % 60
  const minutes = Math.floor(time / 60) % 60
  const hours = Math.floor(time / 3600)

  flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10))
  flip(document.querySelector("[data-hours-ones]"), hours % 10)
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10))
  flip(document.querySelector("[data-minutes-ones]"), minutes % 10)
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10))
  flip(document.querySelector("[data-seconds-ones]"), seconds % 10)

  const endToDate = new Date("August 17, 2022 00:05:00");
  const currentDate = new Date()
  
  if(currentDate > endToDate){
    const countDown = document.getElementById("countdown")
    const boom = document.getElementById("boom")
    const hut = document.getElementById("hut")
    countDown.classList.add("hidden")
    boom.classList.add("hidden")
    hut.classList.remove("hidden")
  } else if(seconds == 0 && minutes == 0 && hours == 0 ){
      const countDown = document.getElementById("countdown")
      const boom = document.getElementById("boom")
      countDown.classList.add("hidden")

      boom.classList.remove("hidden")
      boom.classList.add("flex")

      const proklamasi = document.getElementById("player")
      proklamasi.src = "https://www.youtube.com/embed/8AYfmGnApaY?enablejsapi=1&autoplay=1" 
  }
}

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".tops")
  const startNumber = parseInt(topHalf.textContent)
  if (newNumber === startNumber) return

  const bottomHalf = flipCard.querySelector(".bottoms")
  const topFlip = document.createElement("div")
  topFlip.classList.add("tops-flip")
  const bottomFlip = document.createElement("div")
  bottomFlip.classList.add("bottoms-flip")

  top.textContent = startNumber
  bottomHalf.textContent = startNumber
  topFlip.textContent = startNumber
  bottomFlip.textContent = newNumber

  topFlip.addEventListener("animationstart", e => {
    topHalf.textContent = newNumber
  })
  topFlip.addEventListener("animationend", e => {
    topFlip.remove()
  })
  bottomFlip.addEventListener("animationend", e => {
    bottomHalf.textContent = newNumber
    bottomFlip.remove()
  })
  flipCard.append(topFlip, bottomFlip)
}
