class Character {

    _life = 1;
    maxLife = 1;
    att = 0;
    def = 0;

    constructor(name){
        this.name = name
    }

    get life() {
        return this._life;
    }

    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
}

    class Knight extends Character {
        constructor(name) {
            super(name);

            this.life = 100;
            this.att = 10;
            this.def = 8;
            this.maxLife = this.life;
        }
    }

    class Sorcerer extends Character {
        constructor(name) {
            super(name);
                
            this.life = 80;
            this.att = 15;
            this.def = 8;
            this.maxLife = this.life;
        }
    }


    class LittleMonster extends Character {
        constructor() {
            super('Little Monster');

            this.life = 40;
            this.att = 4;
            this.def = 4;
            this.maxLife = this.life;
        }

    }


    class BigMonster extends Character {
        constructor() {
            super('Big Monster');

            this.life = 120;
            this.att = 16;
            this.def = 6;
            this.maxLife = this.life;
        }

    }

    class Stage {
        constructor(fight1, fight2, fight1El, fight2El, ){
            this.fight1 = fight1;
            this.fight2 = fight2;
            this.fight1El = fight1El;
            this.fight2El = fight2El;
        }

        start() {
            this.update();
            // Todo Cenario
            this.fight1El.querySelector(".atkButton").addEventListener("click", () => this.doAtt(fight1, fight2));
            this.fight2El.querySelector(".atkButton").addEventlistener("click", () => this.doAtt(fight2, fight1));

        }

        update() {
            // Fight 1
            this.fight1El.querySelector(".name").innerHTML = `${this.fight1.name} / HP ${this.fight1.life}`;
            let f1Pct = (this.fight1.life / this.fight1.maxLife)*100;
            this.fight1El.querySelector(".bar").style.width = `${f1Pct}%`;
            
            // Fight 2
            this.fight2El.querySelector(".name").innerHTML = `${this.fight2.name} / HP ${this.fight2.life}`;
            let f2Pct = (this.fight2.life / this.fight2.maxLife)*100;
            this.fight2El.querySelector(".bar").style.width = `${f2Pct}%`;

        }

        doAtt(attacking, attacked) {
            console.log(`${attacking.name} está atacando ${attacked.name}`);
        }
    }