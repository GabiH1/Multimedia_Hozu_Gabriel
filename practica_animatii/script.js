let butonStart = document.getElementById("btnStart");
butonStart.addEventListener("click", move);
let id = null;
let elem = document.getElementById("patrat");
let pos = 0;
let viteza = 2;
function move() {
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos >= 370) {
            viteza = -2;
        }
        else if (pos <= 0) {
            viteza = 2;
        }
        pos+=viteza;
        elem.style.left=pos+'px';
    }
}

let butonStop = document.getElementById("btnStop");
butonStop.addEventListener("click", stop)
function stop() {
    clearInterval(id);
}


let culoare="blue";

function culoareAleatorie(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}


let x=100, y=100;
let vx=4, vy=3;
let r=20;
let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");
function animeaza(){
    ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
    ctx.beginPath();
    ctx.arc(x,y,r,0,2*Math.PI);
    ctx.fillStyle=culoare;
    ctx.fill();
    ctx.stroke();

    if(x+r>=canvas.width||x-r<=0)
    {
        vx=-vx;
        culoare=culoareAleatorie();
    }
    if(y+r>=canvas.height||y-r<=0)
    {
        vy=-vy;
        culoare=culoareAleatorie();
    }
    x+=vx;
    y+=vy;

    requestAnimationFrame(animeaza);
}
animeaza();

canvas.addEventListener("click",function(e){
    x=e.offsetX;
    y=e.offsetY;
})