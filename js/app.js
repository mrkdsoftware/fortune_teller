window.onload = function (){

}

let sentenceParts;

fetch('js/sentenceParts.json')
  .then(res=> res.json())
  .then(data => {
    sentenceParts = data;
  })

const inputTextArea = document.getElementById('inputbox');
const inputText = document.getElementById('inputboxp');
const inputButton = document.getElementById('inputbutton')
const genQuoteLoading = document.getElementById('generatingText');
const quoteTextContainer = document.getElementById('quotecontainer')

function checkText()
{
  if(inputTextArea.text !== "") {
    slideUp(inputText);
  }
}

function generateQuote()
{

  if (!sentenceParts) {
    console.error("Sentence parts not loaded yet!");
    return;
  }

  const firstPart = sentenceParts.firstPart[getRandomInt(sentenceParts.firstPart.length)];
  const secondPart = sentenceParts.secondPart[getRandomInt(sentenceParts.secondPart.length)];
  const thirdPart = sentenceParts.thirdPart[getRandomInt(sentenceParts.thirdPart.length)];
  const fourthPart = sentenceParts.fourthPart[getRandomInt(sentenceParts.fourthPart.length)];
  const fifthPart = sentenceParts.fifthPart[getRandomInt(sentenceParts.fifthPart.length)];

  const quote = `${firstPart} ${secondPart} ${thirdPart} ${fourthPart}, ${fifthPart}`;

  inputButton.style.display = 'none';
  slideUp(inputText);
  slideUp(inputTextArea);
  setTimeout(() => {
    genQuoteLoading.innerHTML = sentenceParts.quoteGen[getRandomInt(sentenceParts.quoteGen.length)];
    genQuoteLoading.style.display = 'block';
  }, "800");

  setTimeout(() => {
    genQuoteLoading.innerHTML += ".";
  }, 1500);
  setTimeout(() => {
    genQuoteLoading.innerHTML += ".";
  }, 3000);
  setTimeout(() => {
    genQuoteLoading.innerHTML += ".";
  }, 4500);

  setTimeout(() => {
    genQuoteLoading.style.display = 'none';
    quoteTextContainer.innerHTML = quote;
    quoteTextContainer.style.display = 'block';
  }, "6000");
}

let darkmode = false;
let lightswitchCooldown = false;

function lightswitch(){
  if(darkmode === false && lightswitchCooldown === false){
    //turn darkmode on
    darkmode=true;
    lightswitchCooldown = true;
    console.log(darkmode);
    document.getElementById('main').classList.add("darkmode");
    document.getElementById('switch').src = 'img/lightmode.png'
    setTimeout( () => {
      lightswitchCooldown=false;
    }, 1000);
  }
  else if(darkmode === true && lightswitchCooldown === false){
    //turn darkmode off
    darkmode=false;
    lightswitchCooldown=true
    console.log(darkmode);
    document.getElementById('main').classList.remove("darkmode");
    document.getElementById('switch').src = 'img/darkmode.svg'
    setTimeout( () => {
      lightswitchCooldown=false;
    }, 1000);
  }
}

function refreshSite() {
  location.reload();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let slideUp = (target, duration=700) => {

  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout( () => {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}
