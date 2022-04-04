import Phaser from "phaser";


export default class extends Phaser.State {

  preload() {
    // Load any assets here from your assets directory
    this.load.image('cat-like', 'assets/cat-like-creature.png');
  }

  create() {
    this.game.world.setBounds( 0, 0, 360*1.1, 640*1.1);
    this.game.state.start('GameScene');
  }

}
