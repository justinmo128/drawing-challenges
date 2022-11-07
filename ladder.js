// Canvas and graphics context
let cnv = document.getElementById("ladder-canvas");
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
    w = +document.getElementById("w").value;
    h = +document.getElementById("h").value;
    numRungs = +document.getElementById("numRungs").value;

    ctx.fillStyle = "red";
    ctx.fillRect(x, y, w, h);
    ctx.fillStyle = "black";
    ctx.fillRect(x + 3, y, w - 6, h);

    ctx.fillStyle = "red";
    rungSpacing = h / (numRungs + 1);
    for (i = 0; i < numRungs; i++) {
        ctx.fillRect(x, y + rungSpacing, w, 3)
        rungSpacing += h / (numRungs + 1);
    }

    requestAnimationFrame(draw);
}