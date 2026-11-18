function schimbaContinut() {
    let paragraf = document.getElementById("para2");
    console.log(paragraf);
    paragraf.innerHTML = "Seminar 3";
}
    let imagine = document.getElementsByTagName("img")[0];
    console.log(imagine);
    // imagine.addEventListener("load", schimbaImagine);
    imagine.addEventListener("click", rotesteImaginea);


function schimbaImagine() {
    imagine.src = "imagine2.jpg";
}

function rotesteImaginea() {
    console.log(imagine.src.includes("imagine2.jpg"));
    if (imagine.src.includes("imagine2.jpg")) {
        imagine.src = "wallpaper.jpg";
    } else {
        imagine.src = "imagine2.jpg";
    }
}

const buton = document.getElementById("schimbaBorderBtn");
buton.addEventListener("click", schimbaBorder);

function schimbaBorder() {
    let imagini = document.getElementsByTagName("img");
    for(indexImagine in imagini) {
        console.log(indexImagine);
        // producem rgb de 0, 0, (i + 1) * 60
        let culoare = `rgb(0, 0, ${(indexImagine + 1) * 60})`;
        console.log(culoare); 
        imagini[indexImagine].style.borderColor = culoare; 
    }
}