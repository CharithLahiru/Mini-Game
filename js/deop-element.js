
class ball{
    x;
    speedIncrement = 10;
    y = 10;
    elmBall;
    constructor(){
        this.elmBall = document.createElement('div');
        this.elmBall.classList.add('ballStyle');
        document.body.append(this.elmBall);
        this.x = Math.random()*window.innerWidth;
        this.elmBall.style.left = `${this.x}px`;
        console.log(this.speedIncrement);
    }
    move(boyX,boyY){
        this.speedIncrement=10+ Math.random()* 20+ballCount*10;
        this.elmBall.style.display = 'block';
        console.log(ballCount);
        this.elmBall.style.top = `${this.y}px`;
        this.y+=this.speedIncrement;
        if (this.y >= window.innerHeight) {
            this.y=0;
            helth--;
            this.x = Math.random()*window.innerWidth;
            this.elmBall.style.left = `${this.x}px`;
        }

        if (boyX<=this.x+50 && boyX>=this.x-150 && boyY<=this.y+50 && boyY>=this.y-250) {
            ballCount++;
            this.x = Math.random()*window.innerWidth;
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


let timer = setInterval(()=>{
    a.move(boyX,boyY);
    b.move(boyX,boyY);
    c.move(boyX,boyY);
    d.move(boyX,boyY);

    score.innerHTML = `Score = ${ballCount}<br>Helth = ${helth}`;
    // if (helth<=0) {
        
    // }
},100);

const score = document.querySelector('#score');





