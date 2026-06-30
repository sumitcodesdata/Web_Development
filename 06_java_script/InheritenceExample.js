class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  work() {
    console.log(`${this.name} is working.`);
  }
}

class Developer extends Employee {
  constructor(name, salary, programmingLanguage) {
    super(name, salary);
    this.programmingLanguage = programmingLanguage;
  }

  writeCode() {
    console.log(`${this.name} is coding in ${this.programmingLanguage}.`);
  }
}

const dev = new Developer("Sumit", 50000, "JavaScript");

dev.work();
dev.writeCode();