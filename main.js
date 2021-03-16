
window.addEventListener('resize', updateWindowSize);
function updateWindowSize() {
    location.reload();

}
var a;
var b;

const canvas = document.getElementById('something');
console.log(canvas);
canvas.height = window.innerHeight - 16;
canvas.width = window.innerWidth - 15;
a = window.innerHeight - 16;    //Height of the Screen
b = window.innerWidth - 15;     //Width of the screen
console.log(a + " height");
console.log(b + " width");
const ctx = canvas.getContext('2d');
ctx.moveTo(0, 0);
var incr = a / 25;      //Dividing number of lines to draw with equal width
ctx.lineWidth = incr;
// Add colors to add more lines of colors
var colors = ['#f2a533', '#a2c0f1', '#d9a3b1', '#ee7c36', '#5fc6de', '#e8a1b5', '#f2a533', '#f0b7a8', '#e9a4ae', '#82c62f', '#edb5a4', '#f1b132', '#86c5e4', '#e9af9d', '#f29b33', '#e399a7', '#e27f5d', '#58b69a', '#c58794', '#e36531', '#8fa8db', '#df7a54', '#dd949d', '#e9a731', '#e1a48d'];
for (var i = 0; i < colors.length; i = i + 1) {
    // console.log(colors[i]);
    // Drawing the Initial Canvas and passing all the parameters
    drawLine(0, incr * i + 10, b, incr * i + 10, colors[i]);

}
/* Function To Draw the initail canvas */
function drawLine(a, b, c, d, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(a, b);
    ctx.lineTo(c, d);
    ctx.stroke();
}

let isClicked = false;      //Setting on mouse click to false
let isTouched = false;      //Setting on mouse click to false


/* Event Listner to check mouse Click */
document.addEventListener('mousedown', e => {

    isClicked = true;       //Set is clicked to true when mouse button is clicked
    console.log("Clicked")
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var mousePosX = e.offsetX;
    var mousePosY = e.offsetY;
    for (var i = 0; i < this.colors.length; i = i + 1) {
        // console.log(colors[i]);


        // Drawing the Canvas based on mouse position by passing all the parameters
        drawMovingLine(0, incr * i + 10, mousePosX, mousePosY, incr * i + 10, this.colors[i]);

    }
});


/* Event Listner to record mouse position */
document.addEventListener('mousemove', e => {
    if (isClicked === true) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var mousePosX = e.offsetX;
        var mousePosY = e.offsetY;
        for (var i = 0; i < this.colors.length; i = i + 1) {
            // console.log(colors[i]);


            // Drawing the Canvas based on mouse position by passing all the parameters
            drawMovingLine(0, incr * i + 10, mousePosX, mousePosY, incr * i + 10, this.colors[i]);

        }
    }
});

/* Event Listner to record mouse button when realeased position */
window.addEventListener('mouseup', e => {
    if (isClicked === true) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < colors.length; i = i + 1) {
            // console.log(colors[i]);

            // Drawing the Initial Canvas after mouse button is realeased
            drawLine(0, incr * i + 10, b, incr * i + 10, colors[i]);

        }
        isClicked = false;
    }
});

/* Function To Draw the canvas based on mouse position*/

function drawMovingLine(startX, startY, mousePosX, curvPointY, endY, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(startX, startY);
    console.log("Height of Screen" + this.a / 2);
    ctx.bezierCurveTo(mousePosX, curvPointY, mousePosX, curvPointY, this.b, endY);

    // ctx.lineTo(c, d);
    ctx.stroke();
}


/* Event Listner To Check Touch Event */
window.addEventListener("touchstart", e => {
    console.log("Inside touch Event")
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var touchPosX = e.touches[0].pageX;     //touch x cordinates
    var touchPosY = e.touches[0].pageY;     //toouch y cordinates
    console.log("Touch Cordinates X is " + touchPosX + " and Y is " + touchPosY)

    for (var i = 0; i < this.colors.length; i = i + 1) {
        // console.log(colors[i]);


        // Drawing the Canvas based on touch position by passing all the parameters
        drawMovingLine(0, incr * i + 10, touchPosX, touchPosY, incr * i + 10, this.colors[i]);

    }
});
/* Event Listner To Check Touch Move Event */
window.addEventListener("touchmove", e => {
    console.log("Inside touch Event")
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var touchPosX = e.touches[0].pageX;     //touch x cordinates
    var touchPosY = e.touches[0].pageY;     //touch y cordinates
    console.log("Touch Cordinates X is " + touchPosX + " and Y is " + touchPosY)

    for (var i = 0; i < this.colors.length; i = i + 1) {
        // console.log(colors[i]);


        // Drawing the Canvas based on touch position by passing all the parameters
        drawMovingLine(0, incr * i + 10, touchPosX, touchPosY, incr * i + 10, this.colors[i]);

    }
});


/* Event Listner To Check Touch End Event */
window.addEventListener("touchend", e => {
    for (var i = 0; i < colors.length; i = i + 1) {
        // console.log(colors[i]);
        // Drawing the Initial Canvas and passing all the parameters
        drawLine(0, incr * i + 10, b, incr * i + 10, colors[i]);

    }

});
