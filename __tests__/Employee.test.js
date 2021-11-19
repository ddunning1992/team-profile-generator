const Employee = require('./lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('name', 'id', 'email');

    expect(employee.name).toBe(any(String));
    expect(employee.id).toBe(any(String));
    expect(employee.email).toBe(any(String));
})