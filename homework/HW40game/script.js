 class Game {
            constructor() {
                this.canvasSize = 20;
                this.gridSize = 20;
                this.snake = [
                    { x: 10, y: 10 },
                    { x: 9, y: 10 },
                    { x: 8, y: 10 }
                ];
                this.direction = 'RIGHT';
                this.nextDirection = 'RIGHT';
                this.food = this.generateFood();
                this.score = 0;
                this.level = 1;
                this.gameOver = false;
                this.speed = 200;
            }

            generateFood() {
                let position;
                while (true) {
                    position = {
                        x: Math.floor(Math.random() * this.gridSize),
                        y: Math.floor(Math.random() * this.gridSize)
                    };
                    if (!this.snake.some(segment => segment.x === position.x && segment.y === position.y)) {
                        return position;
                    }
                }
            }

            getState() {
                return {
                    snake: this.snake,
                    food: this.food,
                    score: this.score,
                    level: this.level,
                    gameOver: this.gameOver,
                    gridSize: this.gridSize,
                    speed: this.speed
                };
            }

            move() {
                if (this.gameOver) return;

                this.direction = this.nextDirection;

                const head = { ...this.snake[0] };
                switch (this.direction) {
                    case 'UP': head.y--; break;
                    case 'DOWN': head.y++; break;
                    case 'LEFT': head.x--; break;
                    case 'RIGHT': head.x++; break;
                }

                if (head.x < 0 || head.x >= this.gridSize || head.y < 0 || head.y >= this.gridSize) {
                    this.gameOver = true;
                    return;
                }

                const isEating = (head.x === this.food.x && head.y === this.food.y);

                for (let i = 0; i < this.snake.length - (isEating ? 0 : 1); i++) {
                    if (this.snake[i].x === head.x && this.snake[i].y === head.y) {
                        this.gameOver = true;
                        return;
                    }
                }

                this.snake.unshift(head);

                if (isEating) {
                    this.score += 10;
                    this.updateLevel();
                    this.food = this.generateFood();
                } else {
                    this.snake.pop();
                }
            }

            updateLevel() {
                const newLevel = Math.floor(this.score / 50) + 1;
                if (newLevel !== this.level) {
                    this.level = newLevel;
                    this.speed = Math.max(80, 200 - this.level * 10);
                }
            }

            changeDirection(newDirection) {
                if (
                    (this.direction === 'UP' && newDirection === 'DOWN') ||
                    (this.direction === 'DOWN' && newDirection === 'UP') ||
                    (this.direction === 'LEFT' && newDirection === 'RIGHT') ||
                    (this.direction === 'RIGHT' && newDirection === 'LEFT')
                ) {
                    return;
                }
                this.nextDirection = newDirection;
            }

            restart() {
                this.snake = [
                    { x: 10, y: 10 },
                    { x: 9, y: 10 },
                    { x: 8, y: 10 }
                ];
                this.direction = 'RIGHT';
                this.nextDirection = 'RIGHT';
                this.food = this.generateFood();
                this.score = 0;
                this.level = 1;
                this.gameOver = false;
                this.speed = 200;
            }
        }

        class View {
            constructor(element, gridSize, canvasSize) {
                this.element = element;
                this.gridSize = gridSize;
                this.canvasSize = canvasSize;

                this.canvas = document.createElement('canvas');
                this.canvas.width = gridSize * canvasSize;
                this.canvas.height = gridSize * canvasSize;
                this.context = this.canvas.getContext('2d');

                this.scoreDisplay = document.getElementById('scoreDisplay');
                this.levelDisplay = document.getElementById('levelDisplay');

                this.element.prepend(this.canvas);
            }

            render({ snake, food, score, level, gameOver, gridSize }) {
                this.clearScreen();
                this.renderGrid(gridSize);
                this.renderSnake(snake);
                this.renderFood(food);
                
                this.scoreDisplay.textContent = score;
                this.levelDisplay.textContent = level;

                if (gameOver) {
                    this.renderGameOver();
                }
            }

            clearScreen() {
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }

            renderGrid(gridSize) {
                this.context.strokeStyle = '#ddd';
                this.context.lineWidth = 0.5;
                for (let i = 0; i <= gridSize; i++) {
                    this.context.beginPath();
                    this.context.moveTo(i * this.canvasSize, 0);
                    this.context.lineTo(i * this.canvasSize, this.canvas.height);
                    this.context.stroke();

                    this.context.beginPath();
                    this.context.moveTo(0, i * this.canvasSize);
                    this.context.lineTo(this.canvas.width, i * this.canvasSize);
                    this.context.stroke();
                }
            }

            renderSnake(snake) {
                snake.forEach((segment, index) => {
                    const x = segment.x * this.canvasSize;
                    const y = segment.y * this.canvasSize;
                    
                    if (index === 0) {
                        this.context.fillStyle = '#2ecc71';
                    } else {
                        this.context.fillStyle = '#82e0aa';
                    }
                    
                    this.context.fillRect(x + 1, y + 1, this.canvasSize - 2, this.canvasSize - 2);
                    
                    if (index === 0) {
                        this.context.fillStyle = 'white';
                        this.context.beginPath();
                        this.context.arc(x + 6, y + 6, 3, 0, Math.PI * 2);
                        this.context.arc(x + this.canvasSize - 6, y + 6, 3, 0, Math.PI * 2);
                        this.context.fill();
                        
                        this.context.fillStyle = '#2c3e50';
                        this.context.beginPath();
                        this.context.arc(x + 6, y + 6, 1.5, 0, Math.PI * 2);
                        this.context.arc(x + this.canvasSize - 6, y + 6, 1.5, 0, Math.PI * 2);
                        this.context.fill();
                    }
                });
            }

            renderFood(food) {
                const x = food.x * this.canvasSize;
                const y = food.y * this.canvasSize;
                
                this.context.fillStyle = '#e74c3c';
                this.context.beginPath();
                this.context.arc(x + this.canvasSize/2, y + this.canvasSize/2, this.canvasSize/2 - 2, 0, Math.PI * 2);
                this.context.fill();
                
                this.context.fillStyle = '#27ae60';
                this.context.beginPath();
                this.context.ellipse(x + 12, y + 3, 4, 2, 0.5, 0, Math.PI * 2);
                this.context.fill();
            }

            renderGameOver() {
                this.context.fillStyle = 'rgba(0, 0, 0, 0.7)';
                this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
                
                this.context.fillStyle = 'white';
                this.context.font = 'bold 40px Arial';
                this.context.textAlign = 'center';
                this.context.textBaseline = 'middle';
                this.context.fillText('ИГРА ОКОНЧЕНА', this.canvas.width/2, this.canvas.height/2 - 20);
                
                this.context.font = '20px Arial';
                this.context.fillText('Нажмите R для рестарта', this.canvas.width/2, this.canvas.height/2 + 40);
            }
        }

        const game = new Game();
        const root = document.querySelector('#root');
        const view = new View(root, game.gridSize, game.canvasSize);

        let gameInterval;

        function gameLoop() {
            game.move();
            view.render(game.getState());
            
            if (!game.gameOver) {
                gameInterval = setTimeout(gameLoop, game.speed);
            }
        }

        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowUp': event.preventDefault(); game.changeDirection('UP'); break;
                case 'ArrowDown': event.preventDefault(); game.changeDirection('DOWN'); break;
                case 'ArrowLeft': event.preventDefault(); game.changeDirection('LEFT'); break;
                case 'ArrowRight': event.preventDefault(); game.changeDirection('RIGHT'); break;
                case 'r':
                case 'R':
                    game.restart();
                    clearTimeout(gameInterval);
                    view.render(game.getState());
                    gameInterval = setTimeout(gameLoop, game.speed);
                    break;
            }
        });

        view.render(game.getState());
        gameInterval = setTimeout(gameLoop, game.speed);