//hero class
class hero {
    constructor() {
        this.sprite = 'images/char-boy.png';
        this.step = 101;
        this.jump = 83;
        this.startx = this.step * 2;
        this.starty = (this.jump * 5) - 20;
        this.x = this.startx;
        this.y = this.starty;
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
}
const player = new hero();


        //methods
            //update position
                //check collision here
                    //Did Player x and y collide with enemy?
                //Check win here
                    //Did Player x and y reach final tile?
                //Render
                    //Draw player sprite on current x and y coord position
                //handle keyboard input
                    //update player's x & y property according to input
                //reset hero
                    //set x and y to starting x and y


// Enemies our player must avoid
var Enemy = function() {
    this.x = 0;
    this.y = 0;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.step = 101;
};


const bug1 = new Enemy();
const allEnemies = [];
allEnemies.push(bug1);

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // if enemy is not passed the boundary
    if(this.x < this.step * 4) {
        //move forward
        //increment x by speed * dt
        this.x += 20 * dt;
    }
    // else
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






