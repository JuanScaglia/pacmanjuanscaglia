class Scene1 extends Phaser.Scene {
    constructor() {
      super('level1');
    }
  
    preload ()
    {
    this.load.image('atlas', 'assets/atlas.png');
    this.load.tilemapTiledJSON('map', 'assets/pacmapa.json');
    this.load.atlas('todo', 'assets/atlas.png', 'assets/atlas_atlas.json');
    
    };

    create ()
 {
     
    var map = this.add.tilemap('map');
    mapimages = map.addTilesetImage('atlas', 'atlas');
    var layer2 = map.createStaticLayer('suelo', [mapimages], 0, 0);
    var layer = map.createStaticLayer('paredes', [mapimages], 0, 0);
    pacman = this.physics.add.sprite(32, 96, 'todo', 'pacman00').setOrigin(0, 0).setSize(25,25);

    //colisiones
   
    this.physics.add.collider(pacman, layer); 
    
    layer.setCollision([132, 132, 132, 132, 132, 132, 132, 132, 90, 48, 90, 132, 132, 132, 132, 132, 132, 132, 
      132, 132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132, 132, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 
      0, 34, 0, 34, 0, 34, 0, 132, 132, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 132, 132, 0, 
      34, 0, 34, 0, 0, 0, 34, 0, 34, 0, 0, 0, 34, 0, 34, 0, 132, 132, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 
      0, 34, 0, 34, 0, 132, 132, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 132, 90, 0, 34, 0, 
      34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 90, 48, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34,
      0, 34, 0, 48, 90, 0, 0, 0, 34, 0, 34, 0, 0, 0, 34, 0, 34, 0, 0, 0, 34, 0, 90, 132, 0, 34, 0, 34, 0, 34, 0, 
      34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 132, 132, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 132, 
      132, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 132, 132, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 
      34, 0, 34, 0, 34, 0, 132, 132, 0, 34, 0, 0, 0, 34, 0, 34, 0, 0, 0, 34, 0, 34, 0, 0, 0, 132, 132, 0, 34, 0, 34, 0,
      34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 132, 132, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0, 34, 0,
      132, 132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132, 132, 132, 132, 132, 132, 132, 132, 132, 90,
      48, 90, 132, 132, 132, 132, 132, 132, 132, 132]);
     

     
      cursor_a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      cursor_d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
      cursor_w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      cursor_s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    

  
  };
    //teclas
 
  

    //UPDATE
  update ()
  {
    if(cursor_a.isDown){
      pacman.setVelocityX(-250);
      }else if(cursor_d.isDown){
          pacman.setVelocityX(250);
      }else if(cursor_w.isDown){
             pacman.setVelocityY(-250); 
          }
          else if(cursor_s.isDown){
              pacman.setVelocityY(250);
          }
          else{
              pacman.setVelocityX(0);
              pacman.setVelocityY(0);
  }
    
  
}
};