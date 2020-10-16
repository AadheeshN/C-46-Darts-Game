class Target {
    constructor(x, y, width, height) {
        var options = {
         isStatic: false,   
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;

        World.add(world, this.body);

        this.image = loadImage("assets/download.png");
    }

    display() {
        if (this.body.speed < 4) {
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(this.body.angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();

        }

        else {
            //World.remove(world, this.body);
            score = 3;           
        }
    }

    
}