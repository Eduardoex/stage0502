const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonAddMinutes = document.querySelector(".addMinutes")
const buttonMinusMinutes = document.querySelector(".minusMinutes")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
const buttonFlorest = document.querySelector(".florest")
const buttonFireplace = document.querySelector(".firePlace")
const buttonCoffeShop = document.querySelector(".coffeshop")
const buttonRaining = document.querySelector(".raining")
const buttonflorestDark = document.querySelector(".florestDark")
const buttonfireplaceDark = document.querySelector(".firePlaceDark")
const buttonCoffeShopDark = document.querySelector(".coffeshopDark")
const buttonRainingDark = document.querySelector(".rainingDark")

const firePlaceSound = new Audio ("./Sounds/Lareira.wav")
const florestSound = new Audio ("./Sounds/Floresta.wav")
const rainSound = new Audio("./Sounds/Chuva.wav")
const coffeShopSound = new Audio ("./Sounds/Cafeteria.wav")

const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const light = document.querySelector(".sounds_light")
const dark = document.querySelector(".sounds_dark")
const controls = document.querySelector(".controls")
const controlsDark = document.querySelector(".controlsDark")
const buttonPlayDark = document.querySelector(".playDark")
const buttonPauseDark = document.querySelector(".pauseDark")
const buttonAddMinutesDark = document.querySelector(".addMinutesDark")
const buttonMinusMinutesDark = document.querySelector(".minusMinutesDark")

const volumeControlflorest = document.querySelector(".volume-control-florest")
const volumeControlRain = document.querySelector(".volume-control-rain")
const volumeControlCoffe = document.querySelector(".volume-control-coffe")
const volumeControlFire = document.querySelector(".volume-control-fire")

const florestDarkbottom = document.querySelector(".florestDarkbottom")
const rainDarkbottom = document.querySelector(".rainDarkbottom")
const coffeDarkbottom = document.querySelector(".coffeDarkbottom")
const fireDarkbottom = document.querySelector(".fireDarkbottom")

const florestbottom = document.querySelector(".florestbottom")
const rainbottom = document.querySelector(".rainbottom")
const coffebottom = document.querySelector(".coffebottom")
const firebottom = document.querySelector(".firebottom")




firePlaceSound.loop=true
florestSound.loop=true
rainSound.loop=true
coffeShopSound.loop=true


export {
  buttonPlay,
  buttonPause,
  buttonAddMinutes,
  buttonMinusMinutes,
  minutesDisplay,
  secondsDisplay,
  buttonFlorest,
  buttonFireplace,
  buttonCoffeShop,
  buttonRaining,
  firePlaceSound,
  florestSound,
  rainSound,
  coffeShopSound,
  kitchenTimer,
  buttonPressAudio,
  dark,
  light,
  buttonRainingDark,
  buttonCoffeShopDark,
  buttonfireplaceDark,
  buttonflorestDark,
  controls,
  controlsDark,
  buttonPlayDark,
  buttonPauseDark,
  buttonAddMinutesDark,
  buttonMinusMinutesDark,
  volumeControlflorest,
  volumeControlRain,
  volumeControlCoffe,
  volumeControlFire,
  florestDarkbottom,
  rainDarkbottom,
  coffeDarkbottom,
  fireDarkbottom,
  florestbottom,
  rainbottom,
  coffebottom,
  firebottom,
}
