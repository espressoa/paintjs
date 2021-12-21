const canvas = document.getElementById("jsCanvas");
canvas.width = 500;
canvas.height = 500;

const ctx = canvas.getContext("2d");
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

const colors = document.getElementsByClassName("jsColors");

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function onMouseDown(event) {
    console.log("hi");
    painting = true;
}

function onMouseUp(evnet) {
    stopPainting();
}

function onMouseLeave(event) {
    stopPainting();
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    console.log(color);
    ctx.strokeStyle = color;
}

if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}


Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));