
class Employee {
    constructor(name, monthlySalary) {
        this.name = name;
        this.monthlySalary = monthlySalary;
    }

    calculatAnnualSalary() {
        return this.monthlySalary * 12;
    }
}