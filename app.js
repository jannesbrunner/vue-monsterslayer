new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            if (this.isGameOver()) {
                return;
            }
            this.monsterAttacks();
        },
        specialAttack: function() {
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            if (this.isGameOver()) {
                return;
            }
            this.monsterAttacks();
            
        },
        heal: function() {
            var healing = this.calculateDamage(5, 15);
            this.playerHealth + healing > 100 ? this.playerHealth = 100 : this.playerHealth += healing;
            this.monsterAttacks();
        },
        giveUp: function() {
            this.gameIsRunning = false;
        },
        monsterAttacks: function() {
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.isGameOver();
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min)
        },
        isGameOver: function() {
            if (this.monsterHealth <= 0 || this.playerHealth <= 0) {
                var winLose = this.monsterHealth <= 0 ? "won" : "lost";
                if (confirm(`You ${winLose}! Start new Game?`)) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true
            } return false
        }
    }
});
