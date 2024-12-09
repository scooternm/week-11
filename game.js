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
}
class FightingGame{
    constructor(){
        this.fighters =[
            new Fighter("hero"), //0
            new Fighter("villain") //1
        ]
    }
    status(){

    }
}
fg = FightingGame();
console.log(fg.status());
