// U72955273
// Employee class
class Employee {
    constructor(name, monthlySalary) {
        this.name = name;
        this.monthlySalary = monthlySalary;
    }

    // Calculate annual salary
    calculateAnnualSalary() {
        return this.monthlySalary * 12;
    }
}
    // Manager class that extends Employee
    class Manager extends Employee {
        constructor(name, monthlySalary, department) {
            super(name, monthlySalary); // Calls the constructur of the Employee class
            this.department = department;
        }
        
        calculateAnnualSalary() {
            return super.calculateAnnualSalary() * 1.15; // Calculate with 15% bonus
        }
    }


// Instantiate Manager objects
const manager1 = new Manager("Bob Ross", 6600, "Digital Marketing");
const manager2 = new Manager("Debbie Little", 7205, "Finance");

// Log details and annual salaries including bonuses
console.log(`Manager 1: ${manager1.name}, Department: ${manager1.department}, Annual Salary with Bonus: $${manager1.calculateAnnualSalary().toFixed(2)}`);
console.log(`Manager 2: ${manager2.name}, Department: ${manager2.department}, Annual Salary with Bonus: $${manager2.calculateAnnualSalary().toFixed(2)}`);