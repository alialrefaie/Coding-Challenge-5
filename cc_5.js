
class Employee {
    constructor(name, monthlySalary) {
        this.name = name;
        this.monthlySalary = monthlySalary;
    }

    calculatAnnualSalary() {
        return this.monthlySalary * 12;
    }

    class Manager extends Employee {
        constructor(name, annualSalary) {
            super(name, annualSalary);
            this.department = department;
        }
        
        calculateAnnualSalary() {
            return super.calculateAnnualSalary() * 1;
        }
    }
}