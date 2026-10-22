
document.getElementById("buton").onclick = function() {
    document.getElementById("mesaj").textContent =
        "Salut! Ai apăsat pe buton!";
};

let imagine=document.getElementById("imagine1")
let canvas1=document.getElementById("canvas1")
let context=canvas1.getContext("2d")
context.fillStyle="blue";
context.shadowOffsetY=20;
context.shadowOffsetX=-20;
context.shadowColor="Purple";
context.shadowBlur=3;
context.fillRect(100,200,200,150);

context.beginPath();
context.arc(400,300,50,Math.PI,Math.PI*2,true);
context.fillStyle="Red";
context.shadowOffsetY=20;
context.shadowOffsetX=20;
context.shadowColor="green";
context.shadowBlur=3;
context.fill();
context.strokeStyle="blue";
context.stroke();


imagine.addEventListener("load", () => {
    context.drawImage(imagine,
         100, 200, 200, 150
        
        );
});

context.fillStyle="yellow";
context.fillRect(10,10,200,100);

context.transform(1,0.5,-0.5,1,30,10);

context.fillStyle="blue";
context.fillRect(10,10,200,100)