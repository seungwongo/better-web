// Person 생성자 함수
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Person의 프로토타입에 getName 메서드를 정의한다.
Person.prototype.getName = function () {
  return this.name;
};

// Person의 프로토타입에 getAge 메서드를 정의한다.
Person.prototype.getAge = function () {
  return this.age;
};

// Student 생성자 함수
function Student(name, age, grade) {
  Person.apply(this, arguments); // Person의 생성자를 호출한다.
  this.grade = grade;
}

// Student의 프로토타입에 Person의 인스턴스를 할당한다. Person의 프로토타입을 상속받는다.
Student.prototype = new Person();

// Student의 프로토타입에 getGrade 메서드를 정의한다.
Student.prototype.getGrade = function () {
  return this.grade;
};

// Student의 프로토타입의 constructor를 Student로 다시 설정한다.
Student.prototype.constructor = Student;

// Student의 인스턴스를 생성한다.
const student1 = new Student("John", 20, 1);
console.log(student1.getName()); // John
console.log(student1.getAge()); // 20
console.log(student1.getGrade()); // 1

// Student의 인스턴스를 생성한다.
const student2 = new Student("Jane", 21, 2);
console.log(student2.getName()); // Jane
console.log(student2.getAge()); // 21
console.log(student2.getGrade()); // 2
