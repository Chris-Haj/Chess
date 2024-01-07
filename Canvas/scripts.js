class Circle {
    constructor(radius,x,y,context) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.context = context;
    }
    draw() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.context.stroke();
        this.context.fill();
        // console.log('draw ',this.x,this.y);
    }



}

function update(circle,event) {
    circle.x=event.clientX;
    circle.y=event.clientY;
    // console.log(event)
    // console.log('update ', this.x,this.y);

}
const can = document.getElementById('can')
const cx = can.getContext('2d')
can.width = window.innerWidth;
can.height = window.innerHeight;
let windowSize = [window.innerWidth/2,window.innerHeight/2];
const circle = new Circle(20,windowSize[0],windowSize[1],cx);

can.addEventListener("mousemove",event=>update(circle,event));

function mainLoop(){
    cx.clearRect(0,0,can.width,can.height);
    circle.draw();
    requestAnimationFrame(mainLoop)
}
mainLoop();