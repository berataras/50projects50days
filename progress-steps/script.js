const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

const circles = document.querySelectorAll('.circle');
const progress = document.getElementById('progress');

let order = 0;
let progressWidth = 0;

nextButton.addEventListener('click', () => {
    console.log(`order: ${order} circles length: ${circles.length - 2}`);
    order++;
    progressWidth += 30;
    moveSteps();
    isDisable();
});

prevButton.addEventListener('click', () => {
    order--;
    progressWidth -= 30;
    moveSteps();
    isDisable();
});

function moveSteps(){
    let currentCircle = circles[order];

    progress.style.width = `${progressWidth}%`;

    circles.forEach((circle, index) => {
        if(index > order){
            circle.classList.remove('active');
        }else{
            currentCircle.classList.add('active');
        }
    })
}

function isDisable(){
    order !== circles.length - 1 ? nextButton.disabled = false : nextButton.disabled = true;
    order > 0 ? prevButton.disabled = false : prevButton.disabled = true;
}
