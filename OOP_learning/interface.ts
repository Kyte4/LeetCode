/*
Задача 2
Имеются некие физические объекты:коробка,бочка,камень
главный герой умеет драться и при ударе (объекты)предметы получать урон а какие нет(камень)
Реализовать интерфейс получения урона

Есть игрок может что то бить, в момент удара он не знает что за объект и мы должны 
*/
function getRandomInt(min: number, max: number): number { min = Math.ceil(min); max = Math.floor(max); return Math.floor(Math.random() * (max - min + 1)) + min; }

interface IDamagable {
    Damage():void
}
abstract class PhysObject implements IDamagable {

    Damage():void{
        return
    }
}

class Korobka extends PhysObject  {
    constructor(){
        super();
    }
}

class Bochka extends PhysObject  {
    constructor(){
        super();
    }
}

class Kamen extends PhysObject{
    constructor(){
        super();
    }
        Damage():void{
        return 
    }
}



let physObjectPool:PhysObject[] = [new Bochka, new Bochka, new Bochka, new Kamen,new Kamen,new Kamen,new Korobka,new Korobka,new Korobka]


let hittedObject = physObjectPool[getRandomInt(0,8)]
hittedObject.Damage()