
import 'pixi';
import 'p2';
import './main.css';
import Phaser from 'phaser';
import BootScene from './scenes/BootScene';
import GameScene from './scenes/GameScene';



class Game extends Phaser.Game {
  constructor() {
    const width = 360;
    const height = 640;

    super(width, height, Phaser.CANVAS, "content", null);

    this.state.add("BootScene", BootScene, false);
    this.state.add("GameScene", GameScene, false);

    this.state.start("BootScene");
  }
}

window.game = new Game();
