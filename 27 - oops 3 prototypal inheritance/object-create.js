const carPrototypeObj = {
    displayInfo: function () {
        return `This is a ${this.year} ${this.model} car.`
    }
}

const car1 = Object.create(carPrototypeObj);
car1.model = 'Kia Sonet';
car1.year = '2024'

const car2 = Object.create(carPrototypeObj);
car2.model = 'Honda Amaze';
car2.year = '2022'

console.log(car1.displayInfo())
console.log(car2.displayInfo())









for (let key in car1) {
    if (car1.hasOwnProperty(key)) {

        console.log(key)
    }
}