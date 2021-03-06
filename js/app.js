//hero class
class hero {
    constructor() {
        this.sprite = 'images/char-boy.png';
        this.step = 101;
        this.jump = 83;
        this.startx = this.step * 2;
        this.starty = (this.jump * 4) + 55;
        this.x = this.startx;
        this.y = this.starty;
        this.victory = false;
    }    
    //draw hero sprite on current x and y coord pos
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    /** 
    * update hero's x and y property according to imput
    * @param {string} input - Direction to travel
    */
    handleInput(input){
        switch(input) {
            case 'left':
                if (this.x > 0) {
                    this.x -= this.step;
                }
                break;
            case 'up':
                if (this.y > this.jump) {
                this.y -= this.jump;
                }
                break;
            case 'right':
                if (this.x < this.step * 4) {
                this.x += this.step;
                }
                break;
            case 'down':
                if (this.y <this.jump * 4) {
                this.y += this.jump;
                }
                break;
        }
    }
    update() {
        //check collision here
        for(let enemy of allEnemies) {
            //Did Player x and y collide with enemy?
            if (this.y === enemy.y && (enemy.x + enemy.step/2 > this.x && enemy.x < this.x + this.step/2)) {
                this.reset();
            }
        }
        //Check win here
        
        //Did Player x and y reach final tile?
        if(this.y === 55) {
            console.log('Win!');
            this.victory = true;
            
        }

    }
                    //Render
                        //Draw player sprite on current x and y coord position
                    //handle keyboard input
                        //update player's x & y property according to input
    //reset hero
    reset() {
        this.y = this.starty;
        this.x = this.startx;
    }
                        //set x and y to starting x and y    
}
const player = new hero();
        //methods
            //update position


// Enemies our player must avoid
var Enemy = function(x,y, speed) {
    this.x = x;
    this.y = y + 55;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.step = 101;
    this.boundary = this.step * 5;
    this.resetPos = -this.step;
};
 

const bug1 = new Enemy((-101*2.5), 0, 300);
const bug2 = new Enemy(-101, 83, 300);
const bug3 = new Enemy((-101*2.5), 83, 250);
const bug4 = new Enemy(-101, 166, 250);
const allEnemies = [];
allEnemies.push(bug1, bug2, bug3, bug4);
console.log();

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // if enemy is not passed the boundary
    if(this.x < this.boundary) {
        //move forward
        //increment x by speed * dt
        this.x += this.speed * dt;
    }
    else {
        this.x = this.resetPos;
    }
        //reset pos to start
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

//New Hero object
//init allEnemies array
//for each enemy create and push new enemy object into above array


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});






