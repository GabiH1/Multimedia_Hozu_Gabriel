let canvas1=document.getElementById("canvas1");
let context=canvas1.getContext("2d");
let imagine=new Image()


imagine.src="wallpaper.jpg";
imagine.addEventListener("load",(e)=>{
    context.drawImage(imagine,0,0,2560,1440,0,0,500,500
    );
});

canvas1.addEventListener("click", modifica);
canvas1.addEventListener("mousemove",modifica);

let xm=0,ym=0;

function modifica(e){
    let img1=context.drawImage(imagine,0,0,2560,1440,0,0,500,500);
    img1=context.getImageData(0,0,500,500);
    let data=img1.data;
    let W=canvas1.clientWidth;
    let H=canvas1.clientHeight;

    let xd=150, yd=200, wd=100, hd=100;
    let xd2=300, yd2=300, wd2=175, hd2=200; 
    xm=e.clientX;
    ym=e.clientY

    for(i=0;i<data.length;i=i+4)
    {
        let x=(i/4)%W;
        let y=Math.floor((i/4)/W);
        // if(x>=xd && x<xd+wd && y>=yd && y<yd+hd)
        // {
        //     let r=data[i];
        //     let g=data[i+1];
        //     let b=data[i+2];
        //     let media=(r+g+b)/3;
        //     data[i]=media;
        //     data[i+1]=media;
        //     data[i+2]=media;
        // }
        // if(x>=xd2 && x<xd2+wd2 && y>=yd2 && y<yd2+hd2)
        // {
        //     let r=data[i];
        //     let g=data[i+1];
        //     let b=data[i+2];
        //     let media=(r+g+b)/3;
        //     data[i]=media;
        //     data[i+1]=media;
        //     data[i+2]=media;
        // }
        if(x>=xm-30 && x<xm+30 && y>=ym-30 && y<ym+30)
        {
            let r=data[i];
            let g=data[i+1];
            let b=data[i+2];
            let media=(r+g+b)/3;
            data[i]=media;
            data[i+1]=media;
            data[i+2]=media;
        }

    }
    context.putImageData(img1,0,0);
}

function modifica_xy(e){
    let img1=context.drawImage(imagine,0,0,2560,1440,0,0,500,500);
    img1=context.getImageData(0,0,500,500);
    let data=img1.data;
    let W=canvas1.clientWidth;
    let H=canvas1.clientHeight;

    let xd=150, yd=200, wd=100, hd=100;
    let xd2=300, yd2=300, wd2=175, hd2=200; 
    xm=e.clientX;
    ym=e.clientY

    for(x=0;x<W;i=i+4)
    {
        for(y=0;y<H;y=y+1)
        {
            let i=(y*W+x)*4;
            if(x>=xm-30 && x<xm+30 && y>=ym-30 && y<ym+30)
        {
            let r=data[i];
            let g=data[i+1];
            let b=data[i+2];
            let media=(r+g+b)/3;
            data[i]=media;
            data[i+1]=media;
            data[i+2]=media;
        }
        }
    }
    context.putImageData(img1,0,0);
}
