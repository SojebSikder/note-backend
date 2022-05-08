import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Note from 'App/Models/Note'

export default class NotesController {
  public async index({}: HttpContextContract) {
    return Note.all()
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const data = new Note()
    data.title = request.input('title')
    data.text = request.input('text')
    await data.save()

    return response.json({
      status: 201,
      message: 'Note created successfully',
    })
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({ request, response }: HttpContextContract) {
    const id = request.param('id')
    const title = request.input('title')
    const text = request.input('text')

    const data = await Note.findOrFail(id)
    if (title) {
      data.title = title
    }

    if (text) {
      data.text = text
    }

    await data.save()

    return response.json({
      status: 200,
      message: 'Note updated successfully',
    })
  }

  public async destroy({}: HttpContextContract) {}
}
