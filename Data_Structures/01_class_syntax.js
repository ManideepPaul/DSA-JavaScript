/*                         What is a class?

-> Class is a blueprint for creating objects with pre-defined properties and methods.
 */

class Student {
    constructor (firstName, lastName, age) {
        this.first = firstName;
        this.last = lastName;
        this.age = age;
    }
}

/* Some Pointers for creating class

-> Class should start with capital letter "Student"
-> The method to create new objects must be called constructor
-> The class keyword creates a constant, so you can't redefine it. */

// Creating objects from the above class

let student1 = new Student ("Manideep", "Paul", 29)
console.log(student1.first, student1.last, student1.age)

/* Note    ->  When "this" used inside a constructor then "this" refers to individual instances of that class. Ex - student1 is an individual instance. */