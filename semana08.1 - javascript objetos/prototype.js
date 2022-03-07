
// Object prototypes
//Prototypes are the mechanism by which JavaScript objects inherit features from one another. 

//LEIA https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes



// Shadowing properties
// What happens if you define a property in an object, when a property with the same name is defined in the object's prototype? Let's see:

onst myDate = new Date(1995, 11, 17);

console.log(myDate.getYear()); // 95

myDate.getYear = function() {
  console.log('something else!')
};

console.log(myDate.getYear());
