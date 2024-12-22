# README.md content

# Cube Chase Game

## Overview
Cube Chase is a simple simulator game where players control a red cube using the arrow keys. The objective is to reach light-up spots that appear on the screen within a time limit. If the player fails to reach a spot within 10 seconds, they lose the game. The game features a visible timer and levels that transition after completion.

## Features
- Control a red cube with arrow keys
- Light-up spots appear randomly on the screen
- 10-second time limit to reach each target
- Level progression from Level 1 to Level 2
- Visible countdown timer

## Project Structure
```
cube-chase-game
├── src
│   ├── index.html        # HTML structure of the game
│   ├── js
│   │   ├── game.js      # Main game logic
│   │   ├── player.js    # Player class for the red cube
│   │   ├── target.js     # Target class for light-up spots
│   │   └── timer.js      # Timer class for countdown management
│   ├── css
│   │   └── styles.css    # Styles for the game
│   └── utils
│       └── constants.js   # Constants used throughout the game
├── package.json          # npm configuration file
└── README.md             # Project documentation
```

## How to Run the Game
1. Clone the repository.
2. Navigate to the project directory.
3. Open `src/index.html` in a web browser to start playing.

## License
This project is licensed under the MIT License.