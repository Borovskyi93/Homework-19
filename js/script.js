class Human {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

const newHuman = new Human('Andriy', 'Man');
const newHuman2 = new Human('Daryna', 'Woman');
const newHuman3 = new Human('Vadym', 'Man');
const newHuman4 = new Human('Helen', 'Woman');
console.log('Приклад екземпляру класу Human', newHuman);
console.log('Приклад екземпляру класу Human', newHuman2);


class Appartment {
    settlers = [];

    addNewSettlers (obj) {
        this.settlers.push(obj);
        return this.settlers;
    }
}

const newAppartment = new Appartment();
newAppartment.addNewSettlers(newHuman);
newAppartment.addNewSettlers(newHuman2);
console.log(newAppartment);


class House {
    appartments = [];

    constructor (maxAppartments) {
        this.maxAppartments = maxAppartments;
    }

    addNewAppartmnets (obj) {
        for (let key of obj.settlers) {
            if (this.maxAppartments <= obj.settlers.length) {
                this.appartments.push(key);
            } else {
                console.log('Не вистачає квартир у цьомі будинку!');
            }
        }
    }
}

const houseAppart = new House(2);
houseAppart.addNewAppartmnets(newAppartment)
console.log(houseAppart);