'use strict'
/* global jQuery $ */

////////////////////////////////////////////////////
/////////////// VARIABLES //////////////////////////
////////////////////////////////////////////////////

// jQuery stuff setup for you
var box = $('.box');
var boardWidth = $('.board').width();

// TODO 2 - Variable declarations 
var xPosition = 0;
var speed = 10;
var direction = 'right';
var score = 0;

////////////////////////////////////////////////////
/////////////// GAME SETUP /////////////////////////
////////////////////////////////////////////////////

// this executes the update function code every 50 milliseconds
setInterval(update, 50);
// this executes the handleBoxClick function code every time the box is clicked on
box.on('click', handleBoxClick);

////////////////////////////////////////////////////
/////////////// GAME LOGIC /////////////////////////
////////////////////////////////////////////////////

function update() {
    updatePositionAndRedraw();
    checkForBounce();
};

function handleBoxClick() {
    // TODO 4 / 5
    increaseScore();
    increaseSpeed();
};

////////////////////////////////////////////////////
/////////////// HELPER FUNCTIONS ///////////////////
////////////////////////////////////////////////////

function updatePositionAndRedraw() {
    if (direction === 'right') {
        xPosition += speed;
    } else if (direction === 'left') {
        xPosition -= speed;
    }

    box.css('left', xPosition);
}

function checkForBounce() {
    if (xPosition >= boardWidth) {
        direction = "left";
    } 

    if (xPosition <= 0) {
        direction = "right";
    }
}

function increaseScore() {
    score += 1;
    box.text(score);
}

function increaseSpeed() {
    speed += 3;
}
