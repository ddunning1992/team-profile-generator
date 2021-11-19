const Engineer = require('../lib/Engineer');

test( 'create Engineer object', () => {
    const engineer = new Engineer('name', 'id', 'email', 'github');

    expect(engineer.github).toEqual(expect.any(String));
})