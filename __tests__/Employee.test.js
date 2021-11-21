const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('name', 'id', 'email');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee role', () => {
    const employee = new Employee('name', 'id', 'email');

    expect(employee.getRole()).toEqual('Employee');
});

test('gets employee name', () => {
    const employee = new Employee('name', 'id', 'email');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee ID', () => {
    const employee = new Employee('name', 'id', 'email');

    expect(employee.getId()).toEqual(expect.any(String));
});

test('gets employee Email', () => {
    const employee = new Employee('name', 'id', 'email');

    expect(employee.getEmail()).toEqual(expect.any(String));
});