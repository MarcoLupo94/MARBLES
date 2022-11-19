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

describe('habit tests', () => {

it('should create a new habit', async () => {
  const habit = makeletteredString();
  const password = makePassword()
      const email = makeletteredString();

    await request.post('/register')
      .send({
        email: email,
        password: password,
      })
    const res = await request.post('/habits')
      .send({
        habit: habit,
      })
    expect(res.statusCode).toEqual(201)
  })

it('should display habits', async () => {
  let date = Date.now()
  JSON.stringify(date)
  const habit = makeletteredString();
      const email = makeletteredString();

  const password = makePassword()
  
    await request.post('/register')
      .send({
        email: email,
        password: password,
      })
  
    await request.put('/habits')
      .send({
      habit: habit,
      })
  
    const res = await request.post('/habits')
      .send({
        date: date,
      })
  
  expect(res.body).toEqual({habit: 'habit'})
})
  
it('should delete habits', async () => {
  let date = Date.now()
  JSON.stringify(date)
  const habit = makeletteredString();
    const email = makeletteredString();
   const password = makePassword()
    await request.post('/register')
      .send({
        email: email,
        password: password,
      })
  
    await request.put('/habits')
      .send({
      habit: habit,
      })
  
    const res = await request.post('/habits')
      .send({
        date: date,
      })
  
  expect(res.body).toEqual({removed: 'removed'})
})  
  
it('should complete habits', async () => {
  let date = Date.now()
  JSON.stringify(date)
  const habit = makeletteredString();
    const email = makeletteredString();
   const password = makePassword()
    await request.post('/register')
      .send({
        email: email,
        password: password,
      })
  
    await request.put('/habits')
      .send({
      habit: habit,
      })
  
    const res = await request.post('/habits')
      .send({
        date: date,
      })
  
  expect(res.body).toEqual({removed: 'removed'})
})    
  
  
  
  
});

