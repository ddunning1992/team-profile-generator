const Intern = require('../lib/Intern');

test('create Intern object', () => {
    const intern = new Intern('name', 'id', 'email', 'school');

    expect(intern.school).toEqual(expect.any(String));
})