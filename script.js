const fcolor= document.querySelector(".fcolor");
const scolor= document.querySelector(".scolor");
const body= document.getElementById("gen");

const Gradient=()=>{
    body.style.background= "linear-gradient(to right,"+fcolor.value+", "+scolor.value+")";
};

fcolor.addEventListener("input", Gradient);
scolor.addEventListener("input", Gradient);