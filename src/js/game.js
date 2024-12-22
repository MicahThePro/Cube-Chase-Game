import { Player } from './player.js';
import { Target } from './target.js';
import { Timer } from './timer.js';
import { CANVAS_WIDTH, CANVAS_HEIGHT, TIME_LIMIT } from '../utils/constants.js';

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
document.body.appendChild(canvas);

let player = new Player();
let target = new Target();
let timer = new Timer(TIME_LIMIT);
let level = 1;
let gameOver = false;

function gameLoop() {
    if (gameOver) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    target.draw(ctx);
    timer.update();

    if (timer.isTimeUp()) {
        gameOver = true;
        alert('Time is up! Game Over!');
    }

    if (player.hasReachedTarget(target)) {
        level++;
        alert(`Level ${level} complete!`);
        target = new Target();
        timer.reset();
    }

    requestAnimationFrame(gameLoop);
}

function handleKeyDown(event) {
    if (gameOver) return;

    switch (event.key) {
        case 'ArrowUp':
            player.move(0, -1);
            break;
        case 'ArrowDown':
            player.move(0, 1);
            break;
        case 'ArrowLeft':
            player.move(-1, 0);
            break;
        case 'ArrowRight':
            player.move(1, 0);
            break;
    }
}

document.addEventListener('keydown', handleKeyDown);
timer.start();
gameLoop();