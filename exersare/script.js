function schimbacontinut() {
    let paragraf2 = document.getElementById("para2");
    console.log(paragraf2);
    paragraf2.innerHTML = "Am invatat seminarul 3";
}

let imagine = document.getElementsByTagName("img")[0];

function schimbaimaginea(e) {
    e.preventDefault();
    if (imagine.src.includes("cg.jpg"))
        imagine.src = "imagini/wallpaper.jpg";
    else {
        imagine.src = "imagini/cg.jpg";
    }
}

let buton = document.getElementById("schimbaBorder");
buton.addEventListener("click", borderTabel);

function borderTabel() {
    let celule = document.getElementsByTagName("td");
    for (let i = 0; i < celule.length; i++) {
        celule[i].style.padding = "10px";
        celule[i].style.border = "1px solid gray";
    }
}

let canvas = document.getElementById("canva1");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "blue";
ctx.shadowColor = "gray";
ctx.shadowOffsetX = 15;
ctx.shadowOffsetY = 15;
ctx.shadowBlur = 5;

ctx.fillRect(50, 50, 150, 100);

ctx.beginPath();
ctx.arc(300, 100, 40, 0, Math.PI, false);
ctx.shadowColor = "pink";
// ctx.strokeStyle="red";
// ctx.lineWidth=5;
ctx.stroke();
ctx.fill();
imagine.addEventListener("load", (e) => {
    ctx.drawImage(imagine, 200, 100, 300, 200, 50, 250, 150, 150)
})

let img = new Image();
img.src = "imagini/wallpaper.jpg";
let canvas2 = document.getElementById("canvas1");
let ctx2 = canvas2.getContext("2d");
img.addEventListener("load", (e) => {
    ctx2.drawImage(img, 0, 0, 2560, 1440, 0, 0, 500, 500);
});

canvas2.addEventListener("mousemove", modifica);
function modifica(e) {
    ctx2.drawImage(img, 0, 0, 2560, 1440, 0, 0, 500, 500);
    let imgData = ctx2.getImageData(0, 0, 500, 500);
    let data = imgData.data;
    let w = canvas2.clientWidth;

    let xd=200, yd=200, wd=300, hd=300;

    // for(let i=0;i<data.length;i+=4)
    // {
    //     let x=(i/4)%w;
    //     let y=Math.floor((i/4)/w);
    //     if(x>=xd&&x<wd&&y>=yd&&y<hd)
    //     {
    //         media=(data[i]+data[i+1]+data[i+2])/3;
    //         data[i] = media;
    //         data[i + 1] = media;
    //         data[i + 2] = media;
    //     }
    // }
    const rect = canvas2.getBoundingClientRect();
    let xm = Math.round((e.clientX - rect.left) * canvas2.width / rect.width);
    let ym = Math.round((e.clientY - rect.top) * canvas2.height / rect.height);
    for (let i = 0; i < data.length; i += 4) {
        let x = (i / 4) % w;
        let y = Math.floor((i / 4) / w);
        if (x >= xm - 30 && x < xm + 30 && y >= ym - 30 && y < ym + 30) {
            media = (data[i] + data[i + 1] + data[i + 2]) / 3;
            data[i] = media;
            data[i + 1] = media;
            data[i + 2] = media;
        }
    }
    ctx2.putImageData(imgData, 0, 0);
}
