import Phaser from "phaser";

export default class extends Phaser.State {

  create() {
    this.game.stage.backgroundColor = "#4488AA";

    // Add, scale, and make up a speed for our creature
    this.cat = this.game.add.sprite(120, 120, 'cat-like');
    //this.cat.body.setAllowGravity(false);
    this.game.physics.enable(this.cat, Phaser.Physics.ARCADE);
    this.cat.scale.x=(0.5);
    this.cat.scale.y=(0.5);
    this.catSpeed = 500;
    // Create a helper object for our arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    this.cat.body.collideWorldBounds = true;
  }

  update() {
    // Listen for keyboard input
    const {left, right, up, down} = this.cursors;
    if (left.isDown) {
      //this.cat.setVelocityX(-this.catSpeed);
      this.cat.body.velocity.x = -this.catSpeed;
    }
    else if (right.isDown) {
      //this.cat.setVelocityX(this.catSpeed);
      this.cat.body.velocity.x = this.catSpeed;
    }
    else {
      //this.cat.setVelocityX(0);
      this.cat.body.velocity.x = 0.0;
    }
    if (up.isDown) {
      //this.cat.setVelocityY(-this.catSpeed);
      this.cat.body.velocity.y = -this.catSpeed;
    }
    else if (down.isDown) {
      //this.cat.setVelocityY(this.catSpeed);
      this.cat.body.velocity.y = this.catSpeed;
    }
    else {
      //this.cat.setVelocityY(0);
      this.cat.body.velocity.y = 0.0;
    }
  }

}
