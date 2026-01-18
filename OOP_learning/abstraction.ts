/*
Задача 1
Инвентарь - массив
Предметы [нож,вилка,щит] их можно покрутить 
Можно положить только эти предметы
Реализовать абстракцию и классы 
*/

abstract class Item {
    public item: string
    constructor(item:string){this.item = item;}
    rotate():void {
        console.log('Покрутил на 360 '+ this.item)
    }
}

class shield extends Item {
    constructor (item:string){
        super(item);
    }
}

class wilka extends Item{
    constructor (item:string){
        super(item);
    }
}

class knife extends Item {
    constructor (item:string){
        super(item);
    }
        rotate():void {
        console.log('Покрутил на 180 '+ this.item)
    }
}



let skovorodka: shield = new shield('meow')
let fork: wilka = new wilka('meow')
let sablya: knife = new knife('meow')

let backpack:Item[] = new Array(skovorodka, fork, sablya)

skovorodka.rotate()
fork.rotate()
sablya.rotate()

