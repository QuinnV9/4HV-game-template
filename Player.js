export default class Player {
    rightPressed = false;
    leftPressed = false;
    shootPressed = false;
    upPressed = false;

    constructor(canvas, velocity, bulletController) {
      this.canvas = canvas;
      this.velocity = velocity;
      this.bulletController = bulletController;
  
      this.x = this.canvas.width / 2;
      this.y = this.canvas.height - 75;
      this.width = 50;
      this.height = 48;
      this.image = new Image();
      this.image.src = "images/player.png";
  
      document.addEventListener("keydown", this.keydown);
      document.addEventListener("keyup", this.keyup);
    }
  
    draw(ctx) {
      if (this.shootPressed) {
        this.bulletController.shoot(this.x + this.width / 2.2, this.y, 4, 10);
      }
      this.move();
      this.collideWithWalls();
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  
    collideWithWalls() {
      //left
      if (this.x < 0) {
        this.x = 0;
      }
  
      //right
      if (this.x > this.canvas.width - this.width) {
        this.x = this.canvas.width - this.width;
      }

      //up
      if (this.y < 0) {
        this.y = 0;
      }

      //down
      if (this.y > this.canvas.height - this.height) {
        this.y = this.canvas.height - this.height;
      }

    }
  
    move() {
      if (this.rightPressed) {
        this.x += this.velocity;
      } else if (this.leftPressed) {
        this.x += -this.velocity;
      }
       else if (this.upPressed) {
        this.y += -this.velocity;
      }
      else if (this.downPressed) {
        this.y += this.velocity;
      }
    }
  
  
    keydown = (event) => {
      if (event.code == "KeyD") {
        this.rightPressed = true;
      }
      if (event.code == "KeyA") {
        this.leftPressed = true;
      }
      if (event.code == "Space") {
        this.shootPressed = true;
      }
      if (event.code == "KeyW") {
        this.upPressed = true;
      }
      if (event.code == "KeyS") {
        this.downPressed = true;
      }
    };
  
    keyup = (event) => {
      if (event.code == "KeyD") {
        this.rightPressed = false;
      }
      if (event.code == "KeyA") {
        this.leftPressed = false;
      }
      if (event.code == "Space") {
        this.shootPressed = false;
      }
      if (event.code == "KeyW") {
        this.upPressed = false;
      }
      if (event.code == "KeyS") {
        this.downPressed = false;
      }
    };
   }
  
