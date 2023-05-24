document.body.style.backgroundImage = `url('imgs/background.png')`;

const boy = document.createElement('div');
boy.classList.add('boycss');
document.body.append(boy);

let boyX = window.innerWidth/2;
let boyY = window.innerHeight*3/5;
boy.style.left=`${boyX}px`;
boy.style.top=`${boyY}px`;


let moveInterval = null;
let direction = 'right';
let moveUpInterval = null;
let count = 0.0;
let state = 'Idle';
let imgCount=0;

document.body.addEventListener('keydown',(eventData)=>{
    if (eventData.code === 'ArrowRight' && moveInterval===null) {
        move('right');
        state = 'Run';
    }
    if (eventData.code === 'ArrowLeft' && moveInterval===null) {
        move('left');
        state = 'Run';
    }
    if (eventData.code === 'Space' && moveUpInterval===null) {
        moveUp();
        state = 'Jump';
    }
});

document.body.addEventListener('keyup',(eventData)=>{
    if (eventData.code === 'ArrowRight' || eventData.code === 'ArrowLeft') {
        move('stop');
        state = 'Idle';
    }
});

function move(direction){
    this.direction= direction;
    if (direction === 'stop') {
        clearInterval(moveInterval);
        moveInterval = null;
    }else{
        moveInterval = setInterval(()=>{
           if (direction === 'left') {
               if(boyX>50) boyX-=10;
           }
           if (direction === 'right') {
            if(boyX<window.innerWidth-200) boyX+=10;
           }
           boy.style.left=`${boyX}px`;
       },10);
    }
};

function moveUp(){
    moveUpInterval = setInterval(()=>{
        boy.style.top=`${boyY-Math.sin(count)*400}px`;
        count+=0.04;
        if (Math.sin(count)*400<=0) {
            clearInterval(moveUpInterval);
            moveUpInterval = null;
            state = 'Idle';
            count = 0.0;
        }
    },10)
};

setInterval(()=>{
    boy.style.backgroundImage = `url('imgs/${state}__00${imgCount}.png')` ;
    if (this.direction === 'left') {
        boy.style.transform = 'scaleX(-1)';
    }else if(this.direction === 'right'){
        boy.style.transform = 'scaleX(1)';
    }
    imgCount++;
    if(imgCount===9) imgCount=0;
},50);
