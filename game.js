//fighting game w/ 2 fighters. blow by blow fight when they encounter each other. 
//each blow reduces heatlh. they hit only if agility is used
class Attr{
    constructor(name, value = 50){
        this.name = name;
        this.value = value;
    }
}
class Fighter {
    constructor(name){//sets properties
        this.name = name;
        this.health = 100;
        this.attrList = [
            new Attr("strength"),
            new Attr("dexterity"),

        ];
    }
    status(){
        return `
        NAME: ${this.name} 
        HEALTH: ${this.health} 
        STR: ${this.attrList[0].value}
        DEX: ${this.attrList[1].value}
        `;
    }
    attack(who){
        const myStr = this.attrList[0].value;
        const myDex = this.attrList[1].value;
        const theirDex = who.attrList[1].value;
        const chanceOfSuccess = (50 + (myDex - theirDex)) / 100;
        if(Math.random() >= chanceOfSuccess){
            const damage = Math.ceil(myStr * Math.random());
            who.health -= damage;
            return this.name + "hit" + who.name + "for" + damage + "points."
        }
        return this.name + "missed" + who.name + "doing no damage.";
    }
}
class FightingGame{
    constructor(){
        this.fighters =[
            new Fighter("hero"), //0
            new Fighter("villain") //1
        ]
    }
    status(){
        return this.fighters.map(f=>f.status()).join("\n-----") //map loops through each fighter. 
    }
    fight(a,b){
        const output = [];
        let victor = {};
        output.push("FIGHT" + a.name + "vs" + b.name);
        victor = new Fighter("no one");
        //TODO fight while both are alive
        while(a.health > 0 && b.health > 0){
            //a tries to hit b
            a.attack(b);
            b.attack(a);
            //b tries to hit a
        }
        if(a.health > 0){
            victor = a;
        }
        if(b.health > 0){
            victor = b;
        }
        output.push("FINISH" + visitor.name + "WINS!");
        return output.join_("\n");
    }
}
fg = new FightingGame();
console.log(fg.status());
console.log(fg.fight(fg.fighters[0,fg.fighters[1]]));
console.log(fg.status());
