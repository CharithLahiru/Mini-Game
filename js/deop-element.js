class ball{
    x;
    speedIncrement = 10;
    y = 0;
    elmBall;
    constructor(){
        this.elmBall = document.createElement('div');
        this.elmBall.classList.add('ballStyle');
        this.elmBall.style.backgroundImage = `url('imgs/apple.png')`;
        document.body.append(this.elmBall);
        this.x = Math.random()*window.innerWidth;
        this.elmBall.style.left = `${this.x}px`;
        console.log(this.speedIncrement);
    }

    move(boyX,boyY){
        this.speedIncrement=1+ Math.random()* 2+ballCount*0.2;
        this.elmBall.style.display = 'block';
        this.elmBall.style.top = `${this.y}px`;
        this.y+=this.speedIncrement;
        if (this.y >= window.innerHeight) {
            this.y=0;
            helth--;
            let a=Math.random();
            if (a<0.25) a+=0.25;
            if (a>0.75) a-=0.25;
            this.x = a*window.innerWidth;
            this.elmBall.style.left = `${this.x}px`;
        }

        if (boyX<=this.x+50 && boyX>=this.x-150 && boyY<=this.y+50 && boyY>=this.y-250) {
            ballCount++;
            let a=Math.random();
            if (a<0.25) a+=0.25;
            if (a>0.75) a-=0.25;
            this.x = a*window.innerWidth;
            this.elmBall.style.left = `${this.x}px`;
            this.y=0;
            this.elmBall.style.display = 'none';
        }
    }
}

let ballCount = 0;         
let helth = 100;
const a = new ball();
const b = new ball();
const c = new ball();
const d = new ball();

function startTimer() {
    
    let timer = setInterval(()=>{
        a.move(boyX,boyY);
        b.move(boyX,boyY);
        c.move(boyX,boyY);
        d.move(boyX,boyY);
    
        score.innerHTML = `Score = ${ballCount}<br>Health = ${helth}%`;
        if (helth<=0) {
            clearInterval(timer);
            timer=null;
            const over = document.querySelector('#gameOver');
            over.style.display='block';
            over.style.backgroundImage = `url('imgs/game-over.png')`;
            const finalScore = document.querySelector('#finalScore');
            finalScore.style.display='block';
            finalScore.innerHTML = `Your Score = ${ballCount}`;
            replay.classList.add ('animate__animated');
            replay.classList.add ('animate__bounce');
            replay.classList.add ('replay');
            replay.classList.add ('animate__infinite');
            replay.style.backgroundImage = `url('imgs/replay.png')`;
            document.body.append (replay);
        }
    },10);
}; 

startTimer() ;
const score = document.querySelector('#score');
const replay = document.createElement('div');

replay.addEventListener('click',()=>{
    ballCount=0;
    helth=100;
    startTimer() ;
    const over = document.querySelector('#gameOver');
    over.style.display='none';
    const finalScore = document.querySelector('#finalScore');
    finalScore.style.display='none';
    replay.remove();
});
 




