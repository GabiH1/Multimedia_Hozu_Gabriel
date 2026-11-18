let canvas1=document.getElementById("canvas1");
let context=canvas1.getContext("2d");
let imagine=document.getElementById("imagine1");
context.fillStyle="blue";
context.shadowColor="black";
context.shadowOffsetY=20;
context.shadowOffsetX=-20;
context.shadowBlur=7;
context.fillRect(100,200,200,150);

context.beginPath();
context.arc(400,300,50,Math.PI,Math.PI*2,true);
context.fillStyle="red";
context.shadowColor="green";
context.shadowOffsetY=20;
context.shadowOffsetX=20;
context.shadowBlur=7;
context.fill();
context.strokeStyle="blue";


imagine.addEventListener("load",(e)=>{
    context.drawImage(imagine,
        100,100,400,300,
        100,200,200,200
    );
});

context.fillStyle = "yellow";
context.fillRect(10, 10, 200, 100)
context.transform(1, 0.5, -0.5, 1, 30, 10);
context.fillStyle = "red";
context.fillRect(10, 10, 200, 100);

