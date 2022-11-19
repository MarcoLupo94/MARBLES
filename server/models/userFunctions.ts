import { User } from "../../lib/api-intefaces";
const box = require('../schemas/index');


async function doesEmailExist(email: string) {
return await box.user.findOne({ where: { email: email } })
}

async function createUser(email: string, password: string): Promise<User>{
  return await box.user.create({ email: email, password: password })
}

module.exports = {createUser, doesEmailExist}