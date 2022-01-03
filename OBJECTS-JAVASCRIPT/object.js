// EXAMPLE 1
var x = {
    model : "Volvo",
    color : "Blue",
    year : "2003"
};
console.log(x.color); //It's output will be COLOR of OBJECT X.
//If we write document.write(x); its output would be all the object.

// EXAMPLE 2
var person = {
    name : "Sanan",
    surname : "Muzaffarov",
    yearOfBirth : "2003",
    fullName : function(){
        return this.name + " " + this.surname;
      }
}
document.write(person.fullName()); // In this function I use the "THIS" keyword. With the help of this, I connect name and surname to each other.

// EXAMPLE 3
var fruits = {
    color : "red",
    size : "medium"
};
delete fruits.size; // with the help of DELETE, you can delete anything you want in the inside of object.
console.log(fruits);

// EXAMPLE 4 => NESTED OBJECTS
const myCars = {
    name: "KIA",
    cars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat"
    }
}
console.log(myCars.cars.car1);//Its output will be FORD.