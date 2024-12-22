class Player {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.size = 20; // Size of the cube
        this.x = canvas.width / 2 - this.size / 2;
        this.y = canvas.height / 2 - this.size / 2;
        this.speed = 5; // Speed of the cube
    }

    draw() {
        this.context.fillStyle = 'red';
        this.context.fillRect(this.x, this.y, this.size, this.size);
    }

    move(direction) {
        switch (direction) {
            case 'ArrowUp':
                if (this.y > 0) this.y -= this.speed;
                break;
            case 'ArrowDown':
                if (this.y < this.canvas.height - this.size) this.y += this.speed;
                break;
            case 'ArrowLeft':
                if (this.x > 0) this.x -= this.speed;
                break;
            case 'ArrowRight':
                if (this.x < this.canvas.width - this.size) this.x += this.speed;
                break;
        }
    }

    resetPosition() {
        this.x = this.canvas.width / 2 - this.size / 2;
        this.y = this.canvas.height / 2 - this.size / 2;
    }

    checkCollision(target) {
        return (
            this.x < target.x + target.size &&
            this.x + this.size > target.x &&
            this.y < target.y + target.size &&
            this.y + this.size > target.y
        );
    }
}

export default Player;