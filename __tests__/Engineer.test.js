const Engineer = require('../lib/Engineer');

test( 'create Engineer object', () => {
    const engineer = new Engineer('name', 'id', 'email', 'github');

    expect(engineer.github).toEqual(expect.any(String));
});

test('get role of Employee', () => {
    const engineer = new Engineer('name', 'id', 'email');

    expect(engineer.getRole()).toEqual('Engineer');
});

test('get employee github', () => {
    const engineer = new Engineer('name', 'id', 'email', 'github');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});