
// let canvas=document.getElementById("canvas1");
// let ctx=canvas.getContext("2d");

// ctx.fillStyle="blue";
// ctx.fillRect(50,50,50,50);


// ctx.beginPath()
// ctx.arc(150,100,30,0,Math.PI,true);
// ctx.stroke();
// ctx.fill();

let id=null;
function myMove(){
    const elem=document.getElementById("animation");
    let pos=0;
    clearInterval(id);
    id=setInterval(frame,5);
    function frame(){
        if(pos==350){
            clearInterval(id);
        }else{
            pos++;
            elem.style.top=pos+'px';
            elem.style.left=pos+'px';
        }
    }
}