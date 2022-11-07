// Canvas and graphics context
let cnv = document.getElementById("target-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 640;
cnv.height = 480;

// Global Variables
let x = 0,
    y = 0,
    w = 0,
    h = 0,
    numRungs = 0;

// Draw Function
window.addEventListener("load", draw);
function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height)
    x = +document.getElementById("x").value;
    y = +document.getElementById("y").value;
    r = +document.getElementById("r").value;
    numRings = +document.getElementById("numRings").value;

    ctx.lineWidth = 3;
    ctx.strokeStyle = "red";
    for (let i = 0; i < numRings; i++) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.stroke();
        r -= (r / numRings)
    }

    requestAnimationFrame(draw);
}