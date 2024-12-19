const Person = {
    name : "sam",
    greet(){
        console.log(`Hi my name is ${this.name}`)
    }
}
Person.greet()

const greetFunction = Person.greet
greetFunction()

const NewGreet = Person.greet.bind({name: "sammy"})
NewGreet()
