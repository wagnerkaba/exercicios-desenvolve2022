
// The call() allows for a function/method belonging to one object to be assigned and called for a different object.

function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}


const pizza = new Food("pizza", 65);

console.log(pizza);