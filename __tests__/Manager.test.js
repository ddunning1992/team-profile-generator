const Manager = require('../lib/Manager');

test('creates Manager object', () => {
    const manager = new Manager('name', 'id', 'email', 'office');

    expect(manager.office).toEqual(expect.any(String));
});

test('get role of employee', () => {
    const manager = new Manager('name', 'id', 'email');

    expect(manager.getRole()).toEqual('Manager');
});