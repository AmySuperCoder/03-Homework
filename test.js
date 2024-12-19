const employees = [];
    let adding = true;

    while (adding) {
        const firstName = prompt("Enter first name:");
        const lastName = prompt("Enter last name:");
        let salary = prompt("Enter salary:");

       
        salary = isNaN(salary) ? 0 : Number(salary);

        
        employees.push({
            firstName: firstName,
            lastName: lastName,
            salary: salary
        });

        const continueAdding = prompt("Do you want to add another employee? (yes/no)");
        adding = continueAdding.toLowerCase() === 'yes';
    }

    return employees;
}



if (employees.length === 0) {
    console.log("No employees to calculate the average salary.");
    return;
}

console.log(`The average employee salary between our ${employees.length} employee(s) is $${averageSalary.toFixed(2)}`);
};