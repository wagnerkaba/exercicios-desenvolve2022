
//Using a constructor
// In JavaScript, all functions have a property named prototype. When you call a function as a constructor, this property is set as the prototype of the newly constructed object (by convention, in the property named __proto__).

// So if we set the prototype of a constructor, we can ensure that all objects created with that constructor are given that prototype:




const personPrototype = {
    greet() {
        console.log(`hello, my name is ${this.name}!`);
    }
}

function Person(name) {
    this.name = name;
}

Person.prototype = personPrototype;
Person.prototype.constructor = Person;


const reuben = new Person('Reuben');
reuben.greet(); // hello, my name is Reuben!

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
