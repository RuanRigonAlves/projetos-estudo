"use strict";

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

const person2 = person.fullName.bind(member);

console.log(person2());

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }

  ownCar() {
    return `I own a ${this.name}, ${this.year}`;
  }
}

const date = new Date();
const year = date.getFullYear();

const myCar = new Car("Ford", 1987);

if ("geolocation" in navigator) {
  console.log("availible");
  /* geolocation is available */
} else {
  alert(
    "I'm sorry, but geolocation services are not supported by your browser."
  );
}

function calc(num1, num2, callback) {
  let sum = num1 + num2;
  callback(sum);
}

function logger(callback) {
  console.log(callback);
}

calc(50, 50, logger);

// navigator.geolocation.getCurrentPosition(function (position) {
//   const do_something = (position.coords.latitude, position.coords.longitude);
//   console.log(do_something);
// });
