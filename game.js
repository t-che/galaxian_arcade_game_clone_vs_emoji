// Game Configuration
const CONFIG = {
    /**
     * Base width of the game canvas.
     * - Unit: Pixels
     * - Purpose: Defines the logical width of the game area (before scaling).
     * - Impact: Affects the coordinate system for all game objects (player, enemies, etc.).
     *   Increasing makes the game area wider, potentially requiring adjustments to
     *   enemy positions, speeds, and HUD scaling.
     */
    baseWidth: 800,

    /**
     * Base height of the game canvas.
     * - Unit: Pixels
     * - Purpose: Defines the logical height of the game area (before scaling).
     * - Impact: Affects the vertical space for gameplay. Larger values increase the
     *   playable area, which may require adjusting enemy dive thresholds or player position.
     */
    baseHeight: 800,

    /**
     * Speed of the player's movement.
     * - Unit: Pixels per second
     * - Purpose: Controls how fast the player moves left or right when arrow keys are pressed.
     * - Impact: Higher values make the player faster, potentially making the game easier.
     *   Lower values slow the player, increasing difficulty.
     */
    playerSpeed: 300,

    /**
     * Speed of the player's bullets.
     * - Unit: Pixels per second
     * - Purpose: Determines how fast bullets travel upward when fired.
     * - Impact: Higher values make bullets reach enemies faster, easing combat.
     *   Lower values require better aim, increasing challenge.
     */
    bulletSpeed: 400,

    /**
     * Speed of the enemy formation's horizontal movement.
     * - Unit: Pixels per second
     * - Purpose: Controls how fast the enemy group moves left or right.
     * - Impact: Higher values make enemies harder to hit and increase their threat.
     *   Lower values make the game easier by slowing enemy movement.
     */
    enemySpeed: 50,

    /**
     * Speed of an enemy when diving toward the player.
     * - Unit: Normalized units per frame (scaled by deltaTime * 60)
     * - Purpose: Sets the speed of an enemy during a dive attack.
     * - Impact: Higher values make dives faster and more dangerous. Lower values
     *   give the player more time to react.
     */
    enemyDiveSpeed: 3,

    /**
     * Speed of an enemy returning to its original position after diving.
     * - Unit: Normalized units per frame (scaled by deltaTime * 60)
     * - Purpose: Controls how quickly a diving enemy returns to the formation.
     * - Impact: Higher values make enemies return faster, reducing their time as threats.
     *   Lower values keep enemies out of formation longer.
     */
    enemyReturnSpeed: 4,

    /**
     * Maximum number of bullets the player can have on screen.
     * - Unit: Integer
     * - Purpose: Limits how many bullets can be fired simultaneously.
     * - Impact: Higher values allow more frequent shooting, easing combat.
     *   Lower values force strategic shooting, increasing difficulty.
     */
    maxBullets: 3,

    /**
     * Number of rows in the enemy formation.
     * - Unit: Integer
     * - Purpose: Defines the vertical structure of the enemy grid.
     * - Impact: More rows increase the number of enemies, making the game harder.
     *   Fewer rows reduce enemy count, simplifying waves.
     */
    enemyRows: 4,

    /**
     * Number of columns in the enemy formation.
     * - Unit: Integer
     * - Purpose: Defines the horizontal structure of the enemy grid.
     * - Impact: More columns increase enemy count, raising difficulty.
     *   Fewer columns make waves easier to clear.
     */
    enemyCols: 8,

    /**
     * Width of each enemy sprite.
     * - Unit: Pixels
     * - Purpose: Defines the logical width for enemy collision detection and rendering.
     * - Impact: Larger values make enemies easier to hit but may cause overlap.
     *   Smaller values make enemies harder to hit.
     */
    enemyWidth: 40,

    /**
     * Height of each enemy sprite.
     * - Unit: Pixels
     * - Purpose: Defines the logical height for enemy collision detection and rendering.
     * - Impact: Larger values increase enemy hitboxes, easing combat.
     *   Smaller values make enemies harder to hit.
     */
    enemyHeight: 40,

    /**
     * Width of the player sprite.
     * - Unit: Pixels
     * - Purpose: Defines the logical width for player collision detection and rendering.
     * - Impact: Larger values make the player easier to hit by enemies, increasing difficulty.
     *   Smaller values make the player harder to hit.
     */
    playerWidth: 40,

    /**
     * Height of the player sprite.
     * - Unit: Pixels
     * - Purpose: Defines the logical height for player collision detection and rendering.
     * - Impact: Larger values increase the player's hitbox, raising risk.
     *   Smaller values reduce the hitbox, easing survival.
     */
    playerHeight: 40,

    /**
     * Number of background stars.
     * - Unit: Integer
     * - Purpose: Sets the number of pulsating stars in the background.
     * - Impact: More stars enhance visual appeal but may impact performance on low-end devices.
     *   Fewer stars simplify the background, potentially reducing immersion.
     */
    starCount: 50,

    /**
     * Number of background nebulae.
     * - Unit: Integer
     * - Purpose: Sets the number of gradient nebula effects in the background.
     * - Impact: More nebulae add visual depth but may slightly affect rendering performance.
     *   Fewer nebulae simplify the background.
     */
    nebulaCount: 3,

    /**
     * Duration of explosion animations.
     * - Unit: Seconds
     * - Purpose: Controls how long explosion effects (emoji and particles) last.
     * - Impact: Longer durations make explosions more noticeable but may clutter the screen.
     *   Shorter durations make explosions quicker, potentially less impactful.
     */
    explosionDuration: 0.5,

    /**
     * Duration of the enemy spawn animation.
     * - Unit: Seconds
     * - Purpose: Sets the time for enemies to animate from their start position (above screen)
     *   to their original position in the formation.
     * - Impact: Longer durations make wave transitions more dramatic but delay gameplay.
     *   Shorter durations speed up wave starts.
     */
    spawnDuration: 2,

    /**
     * Duration of the player's invulnerability after being hit.
     * - Unit: Seconds
     * - Purpose: Sets how long the player is immune to enemy collisions after losing a life.
     * - Impact: Longer durations make the game easier by giving more recovery time.
     *   Shorter durations increase difficulty.
     */
    invulnerabilityDuration: 1,

    /**
     * Frequency of the player's blinking effect during invulnerability.
     * - Unit: Hertz (cycles per second)
     * - Purpose: Controls how fast the player blinks (opacity changes) when invulnerable.
     * - Impact: Higher values create a faster, more intense blink effect.
     *   Lower values make blinking slower, potentially less noticeable.
     */
    blinkFrequency: 10,

    /**
     * Minimum period for star pulsation animation.
     * - Unit: Seconds
     * - Purpose: Sets the shortest time for a star to complete one pulsation cycle.
     * - Impact: Shorter periods make stars pulse faster, adding energy to the background.
     *   Longer periods create a calmer effect.
     */
    starPulseMinPeriod: 2,

    /**
     * Maximum period for star pulsation animation.
     * - Unit: Seconds
     * - Purpose: Sets the longest time for a star to complete one pulsation cycle.
     * - Impact: Longer periods diversify star animations, enhancing visual variety.
     *   Shorter periods make pulsations more uniform.
     */
    starPulseMaxPeriod: 4,

    /**
     * Array of emoji representing enemy types.
     * - Unit: Array of strings
     * - Purpose: Defines the visual appearance of enemies (randomly selected).
     * - Impact: More emojis add visual variety. Fewer emojis make enemies more uniform.
     */
    enemyTypes: ['🧚‍♀️', '🧚‍♂️', '🧚', '🪰', '🪲', '🪳', '🐞', '👾'],

    /**
     * Margin from the canvas edges for enemy movement boundaries.
     * - Unit: Pixels
     * - Purpose: Sets the distance from the left and right canvas edges where enemies reverse direction.
     * - Impact: Larger margins shrink the enemy movement area, making them easier to hit.
     *   Smaller margins expand the area, increasing challenge.
     */
    boundaryMargin: 50,

    /**
     * Probability of an enemy initiating a dive per frame.
     * - Unit: Probability (0 to 1)
     * - Purpose: Controls how often enemies start diving toward the player.
     * - Impact: Higher values make dives more frequent, increasing difficulty.
     *   Lower values reduce dive frequency, easing gameplay.
     */
    diveProbability: 0.005,

    /**
     * Maximum number of enemies that can dive simultaneously.
     * - Unit: Integer
     * - Purpose: Limits how many enemies can be in a diving state at once.
     * - Impact: Higher values allow more simultaneous dives, raising difficulty.
     *   Lower values limit dives, making the game easier.
     */
    maxDivingEnemies: 2,

    /**
     * Speed factor for background star movement.
     * - Unit: Normalized factor
     * - Purpose: Scales the speed at which stars move toward the canvas edges.
     * - Impact: Higher values make stars move faster, creating a more dynamic background.
     *   Lower values slow stars, making the background calmer.
     */
    starSpeed: 0.2,

    /**
     * Y-coordinate threshold for enemies to start returning after diving.
     * - Unit: Pixels
     * - Purpose: Defines the vertical position where a diving enemy switches to returning to formation.
     * - Impact: Higher values allow enemies to dive closer to the player, increasing threat.
     *   Lower values make enemies return sooner, reducing risk.
     */
    returnThreshold: 700,

    /**
     * Collision detection tolerance factor.
     * - Unit: Factor (0 to 1)
     * - Purpose: Scales the hitbox size for collision checks (player vs enemy, bullet vs enemy).
     * - Impact: Higher values make collisions easier to trigger, easing combat but increasing player risk.
     *   Lower values make collisions harder, requiring precision.
     */
    collisionTolerance: 0.75
};

// Game State
let state = {
    player: null,
    enemies: [],
    bullets: [],
    stars: [],
    nebulae: [],
    explosions: [],
    score: 0,
    lives: 3,
    level: 1,
    gameTime: 0,
    gameOver: false,
    paused: false,
    enemyDirection: 1,
    lastTime: 0,
    spawnTimer: 0,
    spawning: false,
    divingEnemies: 0,
    input: { left: false, right: false, shoot: false },
    scaleFactor: 1,
    actualWidth: CONFIG.baseWidth,
    actualHeight: CONFIG.baseHeight
};

// DOM Elements
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('score');
const livesDisplay = document.getElementById('lives');
const helpButton = document.getElementById('help-button');
const helpPopup = document.getElementById('help-popup');
const closeHelp = document.getElementById('close-help');
const gameOverPopup = document.getElementById('game-over-popup');
const finalScoreDisplay = document.getElementById('final-score');
const restartButton = document.getElementById('restart-button');

// Initialize Game
function init(spawn = false) {
    state.player = {
        x: state.actualWidth / 2,
        y: state.actualHeight - 50,
        width: CONFIG.playerWidth,
        height: CONFIG.playerHeight,
        emoji: '🛸',
        speed: CONFIG.playerSpeed,
        isInvulnerable: false,
        invulnerabilityTimer: 0
    };
    state.enemies = [];
    state.bullets = [];
    state.stars = [];
    state.nebulae = [];
    state.explosions = [];
    state.score = spawn ? state.score : 0;
    state.lives = spawn ? state.lives : 3;
    state.level = spawn ? state.level + 1 : 1;
    state.gameTime = spawn ? state.gameTime : 0;
    state.gameOver = false;
    state.paused = false;
    state.enemyDirection = 1;
    state.lastTime = performance.now();
    state.spawnTimer = 0;
    state.spawning = spawn;
    state.divingEnemies = 0;
    state.input = { left: false, right: false, shoot: false };

    // Initialize enemies with original and start positions
    for (let row = 0; row < CONFIG.enemyRows; row++) {
        for (let col = 0; col < CONFIG.enemyCols; col++) {
            const originalX = 100 + col * 80;
            const originalY = 130 + row * 80; // Shifted down by 80 pixels
            state.enemies.push({
                x: spawn ? originalX : originalX,
                y: spawn ? -50 - row * 80 : originalY,
                startX: originalX,
                startY: -50 - row * 80,
                width: CONFIG.enemyWidth,
                height: CONFIG.enemyHeight,
                emoji: CONFIG.enemyTypes[Math.floor(Math.random() * CONFIG.enemyTypes.length)],
                originalX: originalX,
                originalY: originalY,
                diving: false,
                returning: false,
                diveSpeed: CONFIG.enemyDiveSpeed,
                returnSpeed: CONFIG.enemyReturnSpeed,
                diveTargetX: 0,
                diveTargetY: 0,
                opacity: spawn ? 0 : 1,
                row: row,
                col: col
            });
        }
    }

    // Initialize stars with pulsing animation
    const minStarDistance = 75;
    for (let i = 0; i < CONFIG.starCount; i++) {
        let x, y, tooClose;
        do {
            x = Math.random() * state.actualWidth;
            y = Math.random() * state.actualHeight;
            tooClose = state.stars.some(star => {
                const dx = star.x - x;
                const dy = star.y - y;
                return Math.sqrt(dx * dx + dy * dy) < minStarDistance;
            });
        } while (tooClose);
        state.stars.push({
            x,
            y,
            baseSize: Math.random() * 1 + 0.5,
            depth: Math.random(),
            speed: 0.2 + Math.random() * 0.3,
            pulsePhase: Math.random() * Math.PI * 2,
            pulsePeriod: CONFIG.starPulseMinPeriod + Math.random() * (CONFIG.starPulseMaxPeriod - CONFIG.starPulseMinPeriod)
        });
    }

    // Initialize nebulae
    for (let i = 0; i < CONFIG.nebulaCount; i++) {
        state.nebulae.push({
            x: Math.random() * state.actualWidth,
            y: Math.random() * state.actualHeight,
            radius: 100 + Math.random() * 50,
            opacity: 0.1 + Math.random() * 0.1
        });
    }

    updateHUD();
    helpPopup.style.display = 'none';
    gameOverPopup.style.display = 'none';
}

// Update HUD
function updateHUD() {
    scoreDisplay.textContent = `🌟 Score: ${state.score}`;
    livesDisplay.textContent = `❤️ Lives: ${state.lives}`;
}

// Render Background
function renderBackground(deltaTime) {
    state.nebulae.forEach(nebula => {
        const gradient = ctx.createRadialGradient(
            nebula.x, nebula.y, 0,
            nebula.x, nebula.y, nebula.radius
        );
        gradient.addColorStop(0, `rgba(100, 100, 255, ${nebula.opacity})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2);
        ctx.fill();
    });

    ctx.fillStyle = 'white';
    state.stars.forEach(star => {
        const centerX = state.actualWidth / 2;
        const centerY = state.actualHeight / 2;
        const dx = star.x - centerX;
        const dy = star.y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy) || 1;
        star.x += (dx / distance) * star.speed * CONFIG.starSpeed;
        star.y += (dy / distance) * star.speed * CONFIG.starSpeed;
        star.pulsePhase += (Math.PI * 2 * deltaTime) / star.pulsePeriod;
        const pulseFactor = 0.8 + 0.2 * Math.sin(star.pulsePhase);
        star.size = star.baseSize * pulseFactor;
        if (distance > 600) {
            star.x = centerX + (Math.random() - 0.5) * 50;
            star.y = centerY + (Math.random() - 0.5) * 50;
            star.depth = Math.random();
            star.baseSize = Math.random() * 1 + 0.5;
            star.pulsePhase = Math.random() * Math.PI * 2;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
    });
}

// Render Entity
function renderEntity(entity) {
    ctx.font = entity.emoji === '🔵' ? '15px Arial' : '30px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    let opacity = entity.opacity || 1;
    if (entity === state.player && state.player.isInvulnerable) {
        opacity *= 0.5 + 0.5 * Math.sin(2 * Math.PI * CONFIG.blinkFrequency * state.player.invulnerabilityTimer);
    }
    ctx.globalAlpha = opacity;
    ctx.fillText(entity.emoji, entity.x, entity.y);
    ctx.globalAlpha = 1;
}

// Render Explosions
function renderExplosions(deltaTime) {
    for (let i = state.explosions.length - 1; i >= 0; i--) {
        const exp = state.explosions[i];
        exp.time += deltaTime;
        const scale = 1 + exp.time * 2;
        exp.opacity = Math.max(0, 1 - exp.time / CONFIG.explosionDuration);

        // Render emoji explosion
        ctx.font = `${30 * scale}px Arial`;
        ctx.globalAlpha = exp.opacity;
        ctx.fillText('💥', exp.x, exp.y);

        // Render particles
        exp.particles.forEach(p => {
            p.x += p.vx * deltaTime;
            p.y += p.vy * deltaTime;
            p.opacity = Math.max(0, 1 - exp.time / CONFIG.explosionDuration);
            ctx.globalAlpha = p.opacity;
            ctx.fillStyle = 'orange';
            ctx.beginPath();
            ctx.arc(exp.x + p.x, exp.y + p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.globalAlpha = 1;
        if (exp.time > CONFIG.explosionDuration) {
            state.explosions.splice(i, 1);
        }
    }
}

// Update Enemies
function updateEnemies(deltaTime) {
    const step = CONFIG.enemySpeed * deltaTime;

    if (state.spawning) {
        state.spawnTimer += deltaTime;
        const t = Math.min(1, state.spawnTimer / CONFIG.spawnDuration);
        state.enemies.forEach(enemy => {
            enemy.x = enemy.startX + (enemy.originalX - enemy.startX) * t;
            enemy.y = enemy.startY + (enemy.originalY - enemy.startY) * t;
            enemy.opacity = t;
        });
        if (state.spawnTimer > CONFIG.spawnDuration) {
            state.spawning = false;
            state.enemies.forEach(enemy => {
                enemy.x = enemy.originalX;
                enemy.y = enemy.originalY;
                enemy.opacity = 1;
            });
        }
        return;
    }

    const formationEnemies = state.enemies.filter(e => !e.diving && !e.returning);
    if (formationEnemies.length === 0) return;

    const groupLeft = Math.min(...formationEnemies.map(e => e.x));
    const groupRight = Math.max(...formationEnemies.map(e => e.x));
    const leftBoundary = CONFIG.boundaryMargin;
    const rightBoundary = state.actualWidth - CONFIG.boundaryMargin;

    let adjustX = 0;
    if (groupLeft < leftBoundary) {
        adjustX = leftBoundary - groupLeft;
        state.enemyDirection = 1;
    } else if (groupRight > rightBoundary) {
        adjustX = rightBoundary - groupRight;
        state.enemyDirection = -1;
    }

    state.enemies.forEach(enemy => {
        if (!enemy.diving && !enemy.returning) {
            enemy.x += step * state.enemyDirection + adjustX;
        } else if (enemy.diving) {
            const dx = enemy.diveTargetX - enemy.x;
            const dy = enemy.diveTargetY - enemy.y;
            const distance = Math.sqrt(dx * dx + dy * dy) || 1;
            enemy.x += (dx / distance) * CONFIG.enemyDiveSpeed * deltaTime * 60;
            enemy.y += (dy / distance) * CONFIG.enemyDiveSpeed * deltaTime * 60;
            if (enemy.y >= CONFIG.returnThreshold) {
                enemy.diving = false;
                enemy.returning = true;
            }
        } else if (enemy.returning) {
            const dx = enemy.originalX - enemy.x;
            const dy = enemy.originalY - enemy.y;
            const distance = Math.sqrt(dx * dx + dy * dy) || 1;
            enemy.x += (dx / distance) * CONFIG.enemyReturnSpeed * deltaTime * 60;
            enemy.y += (dy / distance) * CONFIG.enemyReturnSpeed * deltaTime * 60;
            if (distance < 5) {
                enemy.x = enemy.originalX;
                enemy.y = enemy.originalY;
                enemy.returning = false;
                state.divingEnemies--;
            }
        }
    });

    if (Math.random() < CONFIG.diveProbability && 
        state.divingEnemies < CONFIG.maxDivingEnemies && 
        !state.spawning) {
        const nonDivingEnemies = state.enemies.filter(e => !e.diving && !e.returning);
        if (nonDivingEnemies.length > 0) {
            const enemy = nonDivingEnemies[Math.floor(Math.random() * nonDivingEnemies.length)];
            enemy.diving = true;
            enemy.diveTargetX = state.player.x;
            enemy.diveTargetY = state.player.y;
            state.divingEnemies++;
        }
    }
}

// Update Bullets
function updateBullets(deltaTime) {
    state.bullets.forEach(bullet => {
        bullet.y -= CONFIG.bulletSpeed * deltaTime;
    });
    state.bullets = state.bullets.filter(b => b.y > 0);
}

// Update Player
function updatePlayer(deltaTime) {
    const step = state.player.speed * deltaTime;
    if (state.input.left && state.player.x > state.player.width / 2) {
        state.player.x -= step;
    }
    if (state.input.right && state.player.x < state.actualWidth - state.player.width / 2) {
        state.player.x += step;
    }
    if (state.input.shoot && state.bullets.length < CONFIG.maxBullets) {
        state.bullets.push({
            x: state.player.x,
            y: state.player.y - state.player.height / 2,
            width: 10,
            height: 10,
            emoji: '🔵',
            speed: CONFIG.bulletSpeed
        });
        state.input.shoot = false;
    }

    if (state.player.isInvulnerable) {
        state.player.invulnerabilityTimer -= deltaTime;
        if (state.player.invulnerabilityTimer <= 0) {
            state.player.isInvulnerable = false;
            state.player.invulnerabilityTimer = 0;
        }
    }
}

// Check Collisions
function checkCollisions() {
    // Bullet vs enemy
    for (let b = state.bullets.length - 1; b >= 0; b--) {
        const bullet = state.bullets[b];
        for (let e = state.enemies.length - 1; e >= 0; e--) {
            const enemy = state.enemies[e];
            if (
                Math.abs(bullet.x - enemy.x) < (bullet.width + enemy.width) * CONFIG.collisionTolerance &&
                Math.abs(bullet.y - enemy.y) < (bullet.height + enemy.height) * CONFIG.collisionTolerance
            ) {
                state.explosions.push({
                    x: enemy.x,
                    y: enemy.y,
                    time: 0,
                    opacity: 1,
                    particles: Array(10).fill().map(() => ({
                        x: 0,
                        y: 0,
                        vx: (Math.random() - 0.5) * 200,
                        vy: (Math.random() - 0.5) * 200,
                        size: Math.random() * 3 + 1,
                        opacity: 1
                    }))
                });
                state.enemies.splice(e, 1);
                state.bullets.splice(b, 1);
                state.score += 10;
                scoreDisplay.classList.add('active');
                setTimeout(() => scoreDisplay.classList.remove('active'), 500);
                if (enemy.diving || enemy.returning) state.divingEnemies--;
                updateHUD();
                break;
            }
        }
    }

    // Enemy vs player
    if (!state.player.isInvulnerable && !state.gameOver) {
        for (let e = state.enemies.length - 1; e >= 0; e--) {
            const enemy = state.enemies[e];
            const dx = state.player.x - enemy.x;
            const dy = state.player.y - enemy.y;
            if (
                Math.abs(dx) < (state.player.width + enemy.width) * CONFIG.collisionTolerance &&
                Math.abs(dy) < (state.player.height + enemy.height) * CONFIG.collisionTolerance
            ) {
                console.log('Collision detected: Player hit by enemy');
                state.lives--;
                updateHUD();
                state.player.isInvulnerable = true;
                state.player.invulnerabilityTimer = CONFIG.invulnerabilityDuration;
                state.explosions.push({
                    x: enemy.x,
                    y: enemy.y,
                    time: 0,
                    opacity: 1,
                    particles: Array(10).fill().map(() => ({
                        x: 0,
                        y: 0,
                        vx: (Math.random() - 0.5) * 200,
                        vy: (Math.random() - 0.5) * 200,
                        size: Math.random() * 3 + 1,
                        opacity: 1
                    }))
                });
                state.enemies.splice(e, 1);
                if (enemy.diving || enemy.returning) state.divingEnemies--;
                if (state.lives <= 0) {
                    state.gameOver = true;
                    const minutes = Math.floor(state.gameTime / 60);
                    const seconds = Math.floor(state.gameTime % 60);
                    const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
                    finalScoreDisplay.innerHTML = `
                        Score: ${state.score}<br>
                        Levels Completed: ${state.level - 1}<br>
                        Time Played: ${timeString}
                    `;
                    gameOverPopup.style.display = 'flex';
                }
                break;
            }
        }
    }
}

// Game Loop
function update(timestamp) {
    if (!state.lastTime) state.lastTime = timestamp;

    const deltaTime = (timestamp - state.lastTime) / 1000;
    state.lastTime = timestamp;

    if (!state.gameOver && !state.paused) {
        state.gameTime += deltaTime;
    }

    ctx.clearRect(0, 0, state.actualWidth, state.actualHeight);
    renderBackground(deltaTime);
    if (!state.gameOver && !state.paused) {
        updatePlayer(deltaTime);
        updateEnemies(deltaTime);
        updateBullets(deltaTime);
        checkCollisions();
    }
    renderEntity(state.player);
    state.enemies.forEach(renderEntity);
    state.bullets.forEach(renderEntity);
    renderExplosions(deltaTime);

    if (state.enemies.length === 0 && !state.spawning) {
        init(true);
    }

    requestAnimationFrame(update);
}

// Input Handling
function handleInput(e) {
    if (state.gameOver) return;

    const isKeyDown = e.type === 'keydown';
    if (e.key === 'ArrowLeft') {
        state.input.left = isKeyDown;
    }
    if (e.key === 'ArrowRight') {
        state.input.right = isKeyDown;
    }
    if (e.key === ' ' && isKeyDown) {
        state.input.shoot = true;
    }
    if (e.key === 'p' || e.key === 'P') {
        if (isKeyDown) {
            state.paused = !state.paused;
            if (!state.paused) {
                state.lastTime = performance.now();
                requestAnimationFrame(update);
            }
        }
    }
}

// Resize Handler
function resizeGame() {
    const container = document.getElementById('game-container');
    const hud = document.getElementById('hud');
    const aspectRatio = CONFIG.baseWidth / CONFIG.baseHeight;
    
    let newWidth = container.clientWidth;
    let newHeight = container.clientHeight;
    let newAspectRatio = newWidth / newHeight;
    
    if (newAspectRatio > aspectRatio) {
        newWidth = newHeight * aspectRatio;
    } else {
        newHeight = newWidth / aspectRatio;
    }
    
    canvas.width = CONFIG.baseWidth;
    canvas.height = CONFIG.baseHeight;
    canvas.style.width = `${newWidth}px`;
    canvas.style.height = `${newHeight}px`;
    
    hud.style.width = `${newWidth}px`;
    
    state.scaleFactor = newWidth / CONFIG.baseWidth;
    state.actualWidth = CONFIG.baseWidth;
    state.actualHeight = CONFIG.baseHeight;
}

// Event Listeners
helpButton.addEventListener('click', () => {
    helpPopup.style.display = 'flex';
    state.paused = true;
});

closeHelp.addEventListener('click', () => {
    helpPopup.style.display = 'none';
    if (!state.gameOver) {
        state.paused = false;
        state.lastTime = performance.now();
        requestAnimationFrame(update);
    }
});

restartButton.addEventListener('click', () => {
    gameOverPopup.style.display = 'none';
    init(false);
    requestAnimationFrame(update);
});

document.addEventListener('keydown', handleInput);
document.addEventListener('keyup', handleInput);
window.addEventListener('resize', resizeGame);

// Start Game
resizeGame();
init();
requestAnimationFrame(update);