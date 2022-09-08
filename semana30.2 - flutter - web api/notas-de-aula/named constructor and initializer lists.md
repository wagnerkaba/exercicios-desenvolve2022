# Named Constructors and Initializer lists

## How to Get Started with Constructors in Dart

If you do not specify any constructor in Dart, it will create a default constructor for you.

This does not mean that you will see a default constructor generated in your class. Instead, when creating a new instance of your class, this constructor will be called. It will have no arguments and will call the constructor of the super class, with no arguments as well.

To declare a constructor in your class, you can do the following:

```dart
class Car {
    String make;
       String model;
       String yearMade;
       bool hasABS;

       Car(String make, String model, int year, bool hasABS) {
        this.make = make;
          this.model = model;
          this.yearMade = year;
          this.hasABS = hasABS;
       }
}
```

As you can imagine, there must be a better way to initialize our class fields – and in Dart, there is:

```dart
class Car {
    String make;
       String model;
       String yearMade;
       bool hasABS;

       Car(this.make, this.model, this.yearMade, this.hasABS);
}
```

The way we use above is just syntactic sugar that Dart has to simplify the assignment.



## More Complex Constructor Features

In other languages, it is possible to overload your constructor. This means that you can have different constructors with the same name, but with a varying signature (or different set of arguments).

### Named constructors in Dart

In Dart, this is not possible, but there is a way around it. It is called **named constructors**. Giving your constructors different names allows your class to have many constructors and also to better represent their use cases outside of the class.

```dart
class Car {
    String make;
       String model;
       String yearMade;
       bool hasABS;

       Car(this.make, this.model, this.yearMade, this.hasABS);

       Car.withoutABS(this.make, this.model, this.yearMade): hasABS = false;
}
```

Named Constructor Example

The constructor **withoutABS** initializes the instance variable hasABS to false, before the constructor body executes. This is known as an **initializer list** and you can initialize several variables, separated by a comma.

The most common use case for initializer lists is to initialize final fields declared by your class.

> ✋ Anything that is placed on the right hand side of the colon (:) has no access to **this**.



Fonte: [Constructors in Dart – Use Cases and Examples](https://www.freecodecamp.org/news/constructors-in-dart/)



# Initializer lists and final properties

 a field as `final` tells Dart that this variable can never be re-assigned. Importantly, this doesn't mean that the variable must be declared and assigned at the same time. Often, you'll use the `final` keyword for class properties, and assign them a value in the constructor.

```
class Rectangle {
  // these are assigned in the constructor,
  // and can never be changed.
  final int width;
  final int height;

  Rectangle(this.width, this.height);
}
```

Side note: This square is said to be *immutable*. All of it's field are final, so it cannot be changed once created.

### Initializer Lists

An *initializer list* allows you to assign properties to a new instance variables *before* the constructor body runs, but after creation. This is handy when you want to set a final variables value, but the value isn't a compile-time constant. For instance:

```
main() {
  final rectangle = Rectangle(2, 5);
}

class Rectangle {
  final int width;
  final int height;
  final int area;

  The area of the rectangle uses the `width` and `height`
  variables, but cannot be done outside of the constructor
  because the class doesn't know what the width and height
  are equal to until an instance is created.
  Rectangle(this.width, this.height) 
    : area = width * height {
      print(area);
    }
}
```

Fonte: [Initializer lists and final properties](https://flutterbyexample.com/lesson/initializer-lists-and-final-properties) 


