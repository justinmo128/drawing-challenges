// Canvas and graphics context
let cnv = document.getElementById("mouseover-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 640;
cnv.height = 480;

// Global Variables
let rect = {
    x: 150,
    y: 210,
    w: 100,
    h: 60
}
let circle = {
    x: 450,
    y: 240,
    r: 50
}
let mouse = {
    x: 0,
    y: 0
}

// Draw Function
window.addEventListener("load", draw);
function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height)

    ctx.lineWidth = 2;
    ctx.strokeStyle = "white";

    ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);

    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
    ctx.stroke();

    checkMouseCoords();

    requestAnimationFrame(draw);
}

function checkMouseCoords() {
    ctx.fillStyle = "cyan";
    if (mouse.x >= rect.x &&
        mouse.x <= rect.x + rect.w &&
        mouse.y >= rect.y &&
        mouse.y <= rect.y + rect.h) {
        ctx.fillRect(rect.x, rect.y, rect.w, rect.h)
        rect.x += Math.random() * 2 - 1;
        rect.y += Math.random() * 2 - 1;
    }
    let circleDistance = Math.sqrt((mouse.x - circle.x) ** 2 + (mouse.y - circle.y) ** 2)
    if (circleDistance <= circle.r) {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
        ctx.fill();
        circle.x += Math.random() * 2 - 1;
        circle.y += Math.random() * 2 - 1;
    }
}

// Event Listeners & Handlers
document.addEventListener("mousemove", mousemoveHandler);

function mousemoveHandler(event) {
    // Get rectangle info about canvas location
    let cnvRect = cnv.getBoundingClientRect(); 

    // Calc mouse coordinates using mouse event and canvas location info
    mouse.x = Math.round(event.clientX - cnvRect.left);
    mouse.y = Math.round(event.clientY - cnvRect.top);
}