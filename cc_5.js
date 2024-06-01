
class Employee {
    constructor(name, monthlySalary) {
        this.name = name;
        this.monthlySalary = monthlySalary;
    }

    calculatAnnualSalary() {
        return this.monthlySalary * 12;
    }

    class Manager extends Employee {
        constructor(name, monthlySalary, department) {
            super(name, monthhlySalary); // Calls the constructur of the Employee class
            this.department = department;
        }
        
        calculateAnnualSalary() {
            return super.calculateAnnualSalary() * 1.15; // Calculate with 15% bonus
        }
    }
}