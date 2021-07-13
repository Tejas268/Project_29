class Polygon extends Block {
    constructor (x, y) {
        super(x, y);
        this.image = loadImage("polygon.png");
        //Matter.Body.setStatic(this.body, true);
    }
    display () {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        scale(1.9, 1.9)
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 20, 20);
        pop();
    }

}