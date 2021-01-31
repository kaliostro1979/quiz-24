/*Cucle Progress Bar*/

const circle = document.querySelector('.progress-ring__circle');
const radius = circle.r.baseVal.value;
const circleLenght = 2 * Math.PI * radius;
const percentWrapper = document.querySelector('.percent')
const percentValue = document.querySelector('.percent-value');
const setResultBtn = document.querySelector('.btn');
const btn = document.querySelector('.btn');
const progressCircleBarWrapper = document.querySelector('.progress-ring-wrapper')
let i = 0;

const interval = function (){
    setInterval(()=>{
        setResultBtn.setAttribute('disabled', true)
        i++
        if (i<=100){
            percentValue.innerHTML = i;
            setProgress(i);
        }else{
            clearInterval(interval)
            percentWrapper.style.display = 'none'
            setTimeout(()=>{
                progressCircleBarWrapper.classList.add('show-mark');
            },200)
        }
    }, 50)
}

btn.addEventListener('click', function (){
    interval();
})

circle.style.strokeDasharray = `${circleLenght} ${circleLenght}`
circle.style.strokeDashoffset = circleLenght

function setProgress(percent){
    const offset = circleLenght - percent / 100 * circleLenght;
    circle.style.strokeDashoffset = offset;
}

/*End of Circle Progress bar*/

/*Line Progress Bar*/

const btns = document.querySelectorAll('.inner__page-btn');
const lineProgressBarWidth = document.querySelector('.inner__page-main').offsetWidth;
const lineProgressBarInner = document.querySelector('.inner__page-main-inner');
const step = lineProgressBarWidth  / btns.length;
const stepText = document.querySelector('.inner__page-main-inner-text');
const stepCountText = document.querySelector('.inner__page-step-count');
const currentStep = document.querySelector('.inner__page-step')

stepCountText.innerHTML = btns.length;

btns.forEach((btn, j)=>{
    btn.addEventListener('click', function (){
        currentStep.innerHTML = j+1;
        lineProgressBarInner.style.maxWidth = `${step * (j + 1) }` + 'px';
    })
})


$(".inner__page-calc-cont-phone input").mask("9 (999) 999-99-99");


