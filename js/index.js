import {buttonPlay, buttonPause, buttonAddMinutes, buttonMinusMinutes, minutesDisplay, secondsDisplay, buttonFlorest, buttonFireplace, buttonCoffeShop, buttonRaining,  firePlaceSound, florestSound, rainSound,  coffeShopSound,  kitchenTimer,
  buttonPressAudio, dark, light, buttonRainingDark, buttonCoffeShopDark, buttonfireplaceDark, buttonflorestDark,  controls, controlsDark,  buttonPlayDark, buttonPauseDark, buttonAddMinutesDark, buttonMinusMinutesDark,  volumeControlflorest, 
  volumeControlRain, volumeControlCoffe, volumeControlFire, florestDarkbottom, rainDarkbottom, coffeDarkbottom, fireDarkbottom, florestbottom, rainbottom, coffebottom, firebottom,} from "./elements.js"


let countcoffe = 0;
let countraining = 0;
let countFirePlace = 0;
let countFlorest = 0;
let isplaying = 0;
let minutes = Number(minutesDisplay.textContent);
let timerTimeOut;
let buttonNight = document.querySelector(".nightswitch")
let buttonDay = document.querySelector(".dayswitch")

// const volumeControlflorest = document.querySelector(".volume-control-florest")
// const volumeControlRain = document.querySelector(".volume-control-rain")
// const volumeControlCoffe = document.querySelector(".volume-control-coffe")
// const volumeControlFire = document.querySelector(".volume-control-fire")

// const florestDarkbottom = document.querySelector(".florestDarkbottom")
// const rainDarkbottom = document.querySelector(".rainDarkbottom")
// const coffeDarkbottom = document.querySelector(".coffeDarkbottom")
// const fireDarkbottom = document.querySelector(".fireDarkbottom")

// const florestbottom = document.querySelector(".florestbottom")
// const rainbottom = document.querySelector(".rainbottom")
// const coffebottom = document.querySelector(".coffebottom")
// const firebottom = document.querySelector(".firebottom")




function updateTimerDisplay(minutes, seconds){
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countdown () {
  timerTimeOut = setTimeout(function () {
    
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    
    updateTimerDisplay(minutes, 0)

if (minutes <= 0 && seconds <= 0){
  kitchenTimer.play()
  florestSound.pause()
  coffeShopSound.pause()
  rainSound.pause()
  firePlaceSound.pause()
    buttonRaining.classList.remove("select")
    buttonFlorest.classList.remove("select")
    buttonFireplace.classList.remove("select")
    buttonCoffeShop.classList.remove("select")

  return
}

    if (seconds <= 0){
      seconds = 60

      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))
      countdown ()

  }, 1000)
}

function addFiveMinutes() {
  buttonPressAudio.play()
  let seconds = Number(secondsDisplay.textContent);
  let minutes = Number(minutesDisplay.textContent);
  
  if (minutes >= 95){
    alert("O contador não pode passar de 95 minutos")
  }else{
      updateTimerDisplay(String(minutes + 5), seconds);
    }
    
}




function minusFiveMinutes() {
    buttonPressAudio.play()
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);
    
    if (minutes <= 5){
      alert("O contador não pode ir abaixo de 5 minutos")
    }else{
        updateTimerDisplay(String(minutes - 5), seconds)
      }
}



buttonNight.addEventListener("click", function(){
  buttonNight.classList.add("hide")
  buttonDay.classList.remove("hide")
 
  
  document.body.style.background = ("black")
  document.body.style.color = ("#A5A4A4")
  
  dark.classList.remove("hide")
  light.classList.add("hide")
 
  buttonCoffeShopDark.classList.remove("select")
  buttonfireplaceDark.classList.remove("select")
  buttonflorestDark.classList.remove("select")
  buttonRainingDark.classList.remove("select")
  
  florestSound.pause()
  coffeShopSound.pause()
  rainSound.pause()
  firePlaceSound.pause()

  countcoffe = 0
  countraining = 0
  countFirePlace = 0
  countFlorest = 0

  controls.classList.add("hide")
  controlsDark.classList.remove("hide")

  
  florestDarkbottom.classList.remove("select")
  rainDarkbottom.classList.remove("select")
  coffeDarkbottom.classList.remove("select")
  fireDarkbottom.classList.remove("select")
})

buttonDay.addEventListener("click", function(){
  buttonNight.classList.remove("hide")
  buttonDay.classList.add("hide")
  
  document.body.style.background = ("white")
  document.body.style.color = ("black")


  dark.classList.add("hide")
  light.classList.remove("hide")

  

  buttonCoffeShop.classList.remove("select")
  buttonFlorest.classList.remove("select")
  buttonRaining.classList.remove("select")
  buttonFireplace.classList.remove("select")

  florestSound.pause()
  coffeShopSound.pause()
  rainSound.pause()
  firePlaceSound.pause()

  countcoffe = 0
  countraining = 0
  countFirePlace = 0
  countFlorest = 0

  controls.classList.remove("hide")
  controlsDark.classList.add("hide")

  florestbottom.classList.remove("select")
  rainbottom.classList.remove("select")
  coffebottom.classList.remove("select")
  firebottom.classList.remove("select")
})




buttonPlay.addEventListener("click", function (){ 
  if(isplaying == 0){
    countdown()
    buttonPressAudio.play()
    isplaying = 1
  }else{
    alert("o contador já foi iniciado")
  }
})

buttonPlayDark.addEventListener("click", function (){ 
  if(isplaying == 0){
    countdown()
    buttonPressAudio.play()
    isplaying = 1
  }else{
    alert("o contador já foi iniciado")
  }
})

buttonPause.addEventListener("click", function (){
  clearTimeout(timerTimeOut)
  buttonPressAudio.play()
  isplaying = 0
})

buttonPauseDark.addEventListener("click", function (){
  clearTimeout(timerTimeOut)
  buttonPressAudio.play()
  isplaying = 0
})

buttonAddMinutes.addEventListener("click", function (){
  addFiveMinutes ()
  buttonPressAudio.play()
})

buttonAddMinutesDark.addEventListener("click", function (){
  addFiveMinutes ()
  buttonPressAudio.play()
})

buttonMinusMinutes.addEventListener("click", function () {
  minusFiveMinutes ()
  buttonPressAudio.play()
})

buttonMinusMinutesDark.addEventListener("click", function () {
  minusFiveMinutes ()
  buttonPressAudio.play()
})

buttonFireplace.addEventListener("click", function (){
  playPauseFirePlace()
  florestSound.pause()
  coffeShopSound.pause()
  rainSound.pause()


})

buttonFlorest.addEventListener("click", function () {
 playPauseFlorest()
 firePlaceSound.pause()
 coffeShopSound.pause()
 rainSound.pause() 


})

buttonCoffeShop.addEventListener("click", function (){
  playPauseCoffe()
  rainSound.pause()
  firePlaceSound.pause()
  florestSound.pause()


})

buttonRaining.addEventListener("click", function (){
  playPauseRaining()
  coffeShopSound.pause()
  firePlaceSound.pause()
  florestSound.pause()
  
 
})





buttonRainingDark.addEventListener("click", function (){
  playPauseRaining()
  coffeShopSound.pause()
  firePlaceSound.pause()
  florestSound.pause()

  
  buttonCoffeShopDark.classList.remove("select")
  buttonfireplaceDark.classList.remove("select")
  buttonflorestDark.classList.remove("select")
  buttonRainingDark.classList.toggle("select")

  florestDarkbottom.classList.remove("select")
  rainDarkbottom.classList.toggle("select")
  coffeDarkbottom.classList.remove("select")
  fireDarkbottom.classList.remove("select")
})

buttonCoffeShopDark.addEventListener("click", function (){
  playPauseCoffe()
  rainSound.pause()
  firePlaceSound.pause()
  florestSound.pause()

  buttonCoffeShopDark.classList.toggle("select")
  buttonfireplaceDark.classList.remove("select")
  buttonflorestDark.classList.remove("select")
  buttonRainingDark.classList.remove("select")

  florestDarkbottom.classList.remove("select")
  rainDarkbottom.classList.remove("select")
  coffeDarkbottom.classList.toggle("select")
  fireDarkbottom.classList.remove("select")
})

buttonfireplaceDark.addEventListener("click", function (){
  playPauseFirePlace()
  florestSound.pause()
  coffeShopSound.pause()
  rainSound.pause()

  buttonCoffeShopDark.classList.remove("select")
  buttonfireplaceDark.classList.toggle("select")
  buttonflorestDark.classList.remove("select")
  buttonRainingDark.classList.remove("select")

  florestDarkbottom.classList.remove("select")
  rainDarkbottom.classList.remove("select")
  coffeDarkbottom.classList.remove("select")
  fireDarkbottom.classList.toggle("select")
})

buttonflorestDark.addEventListener("click", function (){
  playPauseFlorest()
  firePlaceSound.pause()
  coffeShopSound.pause()
  rainSound.pause() 

  buttonCoffeShopDark.classList.remove("select")
  buttonfireplaceDark.classList.remove("select")
  buttonflorestDark.classList.toggle("select")
  buttonRainingDark.classList.remove("select")

  florestDarkbottom.classList.toggle("select")
  rainDarkbottom.classList.remove("select")
  coffeDarkbottom.classList.remove("select")
  fireDarkbottom.classList.remove("select")
})





function playPauseFlorest(){
  if(countFlorest == 0){
    countFlorest = 1
    florestSound.play()

    buttonCoffeShop.classList.remove("select") 
    buttonRaining.classList.remove("select")
    buttonFlorest.classList.toggle("select")
    buttonFireplace.classList.remove("select")
    
    florestbottom.classList.toggle("select")
    rainbottom.classList.remove("select")
    coffebottom.classList.remove("select")
    firebottom.classList.remove("select")



    countcoffe = 0
    countraining = 0
    countFirePlace = 0
  }else{
    countFlorest = 0
    florestSound.pause()

    buttonFlorest.classList.remove("select")
    florestbottom.classList.remove("select")
  }
}

function playPauseFirePlace(){
    if(countFirePlace == 0){
      countFirePlace = 1
      firePlaceSound.play()

      buttonCoffeShop.classList.remove("select") 
      buttonRaining.classList.remove("select")
      buttonFlorest.classList.remove("select")
      buttonFireplace.classList.toggle("select")

      florestbottom.classList.remove("select")
      rainbottom.classList.remove("select")
      coffebottom.classList.remove("select")
      firebottom.classList.toggle("select")

      countcoffe = 0
      countraining = 0
      countFlorest = 0
      }else{
      countFirePlace = 0
      firePlaceSound.pause()

      buttonFireplace.classList.remove("select")
      firebottom.classList.remove("select")
      }
}

function playPauseCoffe(){
   if(countcoffe == 0){
    countcoffe = 1
    coffeShopSound.play()

    buttonCoffeShop.classList.toggle("select") 
    buttonRaining.classList.remove("select")
    buttonFlorest.classList.remove("select")
    buttonFireplace.classList.remove("select")

    florestbottom.classList.remove("select")
    rainbottom.classList.remove("select")
    coffebottom.classList.toggle("select")
    firebottom.classList.remove("select")

    countraining = 0
    countFirePlace = 0
    countFlorest = 0
   }else{
    countcoffe = 0
    coffeShopSound.pause()
    
    buttonCoffeShop.classList.remove("select")
    coffebottom.classList.remove("select")
   }
}
    
function playPauseRaining(){
  if(countraining == 0){
    countraining = 1
    rainSound.play()

    buttonRaining.classList.toggle("select")
    buttonFlorest.classList.remove("select")
    buttonFireplace.classList.remove("select")
    buttonCoffeShop.classList.remove("select")

    florestbottom.classList.remove("select")
    rainbottom.classList.toggle("select")
    coffebottom.classList.remove("select")
    firebottom.classList.remove("select")

    countcoffe = 0
    countFirePlace = 0
    countFlorest = 0
  }else{
    countraining = 0
    rainSound.pause()

    buttonRaining.classList.remove("select")
    rainbottom.classList.remove("select")
  }
}



volumeControlflorest.addEventListener("change", function (){
  florestSound.volume = this.value
})

volumeControlRain.addEventListener("change", function (){
  rainSound.volume = this.value
})

volumeControlCoffe.addEventListener("change", function (){
  coffeShopSound.volume = this.value
})

volumeControlFire.addEventListener("change", function (){
  firePlaceSound.volume = this.value
})


