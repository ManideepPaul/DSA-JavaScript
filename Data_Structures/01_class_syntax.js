/*                         What is a class?

-> Class is a blueprint for creating objects with pre-defined properties and methods.
 */

class Student {
    constructor (firstName, lastName, age) {
        this.first = firstName;
        this.last = lastName;
        this.age = age;
        this.absence = 0;
        this.score = [];
    }

    // This is a method on individual instance.
    absentDay(){
        this.absence++
        console.log(`Total number of absent day is ${this.absence}`)
    }
    fullName(){
        console.log(`Your full name is ${this.first} ${this.last}`)
    }
    addScore(score){
        this.score.push(score)
        console.log(this.score)
    }
    calcAverageScore(){
        let total = this.score.reduce((a,b) => a+b)
        console.log(Math.round(total/this.score.length))
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

student1.absentDay() // You can call methods on individual instance like this.
student1.fullName()
student1.addScore(91)
student1.addScore(95)
student1.addScore(98)
student1.calcAverageScore()

