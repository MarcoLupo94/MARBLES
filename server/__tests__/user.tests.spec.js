const supertest = require('supertest')
const app = require('../index.ts');
const request = supertest(app)


function makeletteredString() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < 10; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function makePassword() {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 10; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

describe('Tests', () => {

  it('should create a new user', async () => {
    const email = makeletteredString();
    const password = makePassword()
    const res = await request.post('/register')
      .send({
        email: email,
        password: password,
      })
    expect(res.statusCode).toEqual(201)
  })

  it('should login a new user', async () => {
    const email = makeletteredString();
    const password = makePassword()
    await request.post('/register')
      .send({
        email: email,
        password: password,
      })
    const res = request.post('/login')
      .send({
        email: email,
        password: password,
      })
    expect(res.statusCode).toEqual(201)
  })

});

