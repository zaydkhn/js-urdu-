# javascript and classes

## OOP

## Object
- collection of properties and methods
- toLowerCase

## why use OOP

## parts of OOP
Object literal 

- Constructor function
- Prototypes
- Classes
- Instances (new, this)


## 4 pillars
Abstraction
Encapsulation
Inheritance
Polymorphism

## Abstraction:

## Definition:
 Abstraction is the concept of hiding the complex implementation details and showing only the necessary features of an object. It allows you to focus on what an object does rather than how it does it.
Example: Think of a car's interface. You use the steering wheel, gas pedal, and brake to control the car without needing to understand the intricate workings of the engine, transmission, or other internal components. In programming, this is like defining an abstract class or interface that specifies what methods an object should have without providing the actual implementation.

## Encapsulation:

## Definition:
 Encapsulation is the practice of bundling the data (attributes) and methods (functions) that operate on the data into a single unit, or class. It also involves restricting direct access to some of the object's components, which is meant to prevent accidental interference and misuse of the data.
Example: Consider a class BankAccount with private attributes like balance and accountNumber. The class exposes public methods such as deposit() and withdraw() to interact with the balance. The internal details of how the balance is managed are hidden from the outside world, which ensures that the balance cannot be directly modified.

## Inheritance:

## Definition:
 Inheritance is a mechanism by which one class (called a subclass or derived class) can inherit properties and behaviors (methods) from another class (called a superclass or base class). This promotes code reusability and establishes a natural hierarchy between classes.
Example: Suppose you have a base class Animal with methods like eat() and sleep(). You can create a subclass Dog that inherits from Animal and adds specific methods like bark(). The Dog class can use all the methods from the Animal class, and you can also add or override methods in the Dog class.

## Polymorphism:

## Definition:
 Polymorphism means "many shapes" and refers to the ability of different classes to be treated as instances of the same class through a common interface. It allows methods to do different things based on the object it is acting upon, even if the method has the same name.
Example: Imagine a method makeSound() in the Animal class. The Dog class might implement makeSound() to print "Woof!", while the Cat class might implement it to print "Meow!". Even though makeSound() is called on different types of animals, the specific implementation depends on the actual type of animal.


## In object-oriented programming, the phrase "instance of" is commonly used to determine whether a particular object is an instance of a specific class or subclass. It’s a way to check the type of an object at runtime.

Here’s a breakdown of what it means:

## Concept
Object Creation: In OOP, you create objects from classes. A class is like a blueprint, and an object is an instance of that blueprint. For example, if you have a Car class, creating a new Car object like myCar = new Car() means myCar is an instance of Car.

## Instance Check: The instanceof operator (or equivalent) is used to verify whether an object is an instance of a particular class or subclass. This is useful for type-checking, especially in scenarios involving polymorphism and inheritance.

## Syntax
The syntax varies by programming language, but the concept remains similar. Here’s how you might use instanceof in a few common languages:

## Java:

java
Copy code
if (myCar instanceof Car) {
    System.out.println("myCar is an instance of Car.");
}
In this example, instanceof checks if myCar is an instance of Car.

## JavaScript:

javascript
Copy code
if (myCar instanceof Car) {
    console.log("myCar is an instance of Car.");
}
Here, instanceof checks if myCar is an instance of Car or any subclass of Car.

## Python (uses isinstance function):

python
Copy code
if isinstance(my_car, Car):
    print("my_car is an instance of Car.")
isinstance is the Python way to check if my_car is an instance of Car.

Use Cases
Type Checking: In scenarios where you need to perform operations based on the type of an object, instanceof helps ensure that the object is of the expected type before performing type-specific operations.

## Polymorphism: When dealing with polymorphism, where methods might be overridden in subclasses, instanceof helps in determining the actual type of an object at runtime.

## Conditional Logic: It allows for conditional logic based on the type of object, enabling more flexible and dynamic code execution.

Example Scenario
Imagine a system where you have a base class Animal and subclasses Dog and Cat. You might want to perform different actions depending on whether an Animal is a Dog or a Cat. Using instanceof helps you check the exact type and handle it accordingly:

## java
Copy code
public void makeAnimalSound(Animal animal) {
    if (animal instanceof Dog) {
        ((Dog) animal).bark();
    } else if (animal instanceof Cat) {
        ((Cat) animal).meow();
    } else {
        System.out.println("Unknown animal type.");
    }
}
## In this example, instanceof ensures that the correct method is called based on the type of Animal passed to the makeAnimalSound method.

## Summary
instanceof (or its equivalents in other languages) is a crucial tool in OOP for checking an object’s type. It supports type-safe operations and dynamic behavior in polymorphic scenarios, enhancing the flexibility and robustness of your code.




