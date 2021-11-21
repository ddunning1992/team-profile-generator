const Intern = require('../lib/Intern');

test('create Intern object', () => {
    const intern = new Intern('name', 'id', 'email', 'school');

    expect(intern.school).toEqual(expect.any(String));
});

test('get role of employee', () => {
    const intern = new Intern('name', 'id', 'email');

    expect(intern.getRole()).toEqual('Intern');
});

test('get employee school', () => {
    const intern = new Intern('name', 'id', 'email', 'school');

    expect(intern.getSchool()).toEqual(expect.any(String));
});