import { v4 as uuidv4 } from 'uuid'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class UsersController {
  public async login({ auth, request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    const data = await auth.use('api').attempt(email, password)

    return response.json({
      status: 200,
      message: 'Login successful',
      data: data,
    })
  }

  public async register({ request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    const id = uuidv4()

    const data = new User()
    data.id = id
    data.email = email
    data.password = password

    await data.save()

    return response.json({
      status: 200,
      message: 'Registration successful',
      data: data,
    })
  }
}
