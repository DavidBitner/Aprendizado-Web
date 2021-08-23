"use strict";

// Parent class
const Person_prototype = {
  calc_age() {
    console.log(2021 - this.birth_year);
  },

  init(first_name, birth_year) {
    this.first_name = first_name;
    this.birth_year = birth_year;
  },
};

// Criando objeto vazio e designando a ele o prototype "Person_prototype"
const dave = Object.create(Person_prototype);

// Child class
// Aqui student_proto é criado com o prototype "person_prototype"
const Student_proto = Object.create(Person_prototype);

// Método "init" de "Student_proto"
Student_proto.init = function (first_name, birth_year, course) {
  Person_prototype.init.call(this, first_name, birth_year);
  this.course = course;
};

// Método "introduce" de "Student_proto"
Student_proto.introduce = function () {
  console.log(`My name is ${this.first_name} and I study ${this.course}`);
};

// Student
// Aqui é criado um objeto vazio usando "Student_proto" como prototype
const deborah = Object.create(Student_proto);
deborah.init("Deborah", 2000, "Computer Science");
deborah.introduce();
deborah.calc_age();
