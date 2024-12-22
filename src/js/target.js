class Target {
    constructor() {
        this.position = this.generatePosition();
        this.active = false;
    }

    generatePosition() {
        const x = Math.floor(Math.random() * canvas.width);
        const y = Math.floor(Math.random() * canvas.height);
        return { x, y };
    }

    activate() {
        this.position = this.generatePosition();
        this.active = true;
    }

    deactivate() {
        this.active = false;
    }

    isReached(playerPosition) {
        return (
            playerPosition.x < this.position.x + targetSize &&
            playerPosition.x + playerSize > this.position.x &&
            playerPosition.y < this.position.y + targetSize &&
            playerPosition.y + playerSize > this.position.y
        );
    }
}

export default Target;