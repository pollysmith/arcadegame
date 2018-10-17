//hero class
class hero {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.sprite = 'images/char-boy.png';
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
                this.x -= 100;
                break;
            case 'up':
                this.y -= 100;
                break;
            case 'right':
                this.x += 100;
                break;
            case 'down':
                this.y += 100;
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
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // x pos
    // y pos

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // if enemy is not passed the boundary
        //move forward
        //increment x by speed * dt
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






