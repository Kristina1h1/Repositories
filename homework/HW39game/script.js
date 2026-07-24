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
                    gridSize: this.gridSize
                };
            }

            move() {
                this.direction = this.nextDirection;

                const head = { ...this.snake[0] };
                switch (this.direction) {
                    case 'UP': head.y--; break;
                    case 'DOWN': head.y++; break;
                    case 'LEFT': head.x--; break;
                    case 'RIGHT': head.x++; break;
                }

                if (head.x < 0 || head.x >= this.gridSize || head.y < 0 || head.y >= this.gridSize) {
                    alert('Игра окончена! Нажмите F5 для перезапуска.');
                    return;
                }

                const tail = this.snake[this.snake.length - 1];
                const isEating = (head.x === this.food.x && head.y === this.food.y);

                for (let i = 0; i < this.snake.length - (isEating ? 0 : 1); i++) {
                    if (this.snake[i].x === head.x && this.snake[i].y === head.y) {
                        alert('Игра окончена! Нажмите F5 для перезапуска.');
                        return;
                    }
                }

                this.snake.unshift(head);

                if (isEating) {
                    this.score += 10;
                    this.food = this.generateFood();
                    document.getElementById('scoreDisplay').textContent = this.score;
                } else {
                    this.snake.pop();
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

                this.element.prepend(this.canvas);
            }

            render({ snake, food, score, gridSize }) {
                this.clearScreen();
                this.renderSnake(snake);
                this.renderFood(food);
                this.renderGrid(gridSize);
                document.getElementById('scoreDisplay').textContent = score;
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
        }

        const game = new Game();
        const root = document.querySelector('#root');
        const view = new View(root, game.gridSize, game.canvasSize);

        function gameLoop() {
            game.move();
            view.render(game.getState());
            setTimeout(gameLoop, 200);
        }

        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowUp': event.preventDefault(); game.changeDirection('UP'); break;
                case 'ArrowDown': event.preventDefault(); game.changeDirection('DOWN'); break;
                case 'ArrowLeft': event.preventDefault(); game.changeDirection('LEFT'); break;
                case 'ArrowRight': event.preventDefault(); game.changeDirection('RIGHT'); break;
            }
        });

        view.render(game.getState());
        setTimeout(gameLoop, 200);