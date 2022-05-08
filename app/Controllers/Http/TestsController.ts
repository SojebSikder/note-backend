import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Detum from '../../Models/Datum'

export default class TestsController {
  public async index({}: HttpContextContract) {
    return Detum.all()
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
