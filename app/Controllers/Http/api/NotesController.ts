import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Note from 'App/Models/Note'

export default class NotesController {
  public async index({ response }: HttpContextContract) {
    // const result = await Note.all()
    // const result = await Note.all()
    const result = await Note.query().preload('user', (builder) => {
    })

    return response.json({
      status: 200,
      data: result,
    })
  }

  public async create({}: HttpContextContract) {}

  public async store({ auth, request, response }: HttpContextContract) {
    await auth.use('api').authenticate()

    const data = new Note()
    data.user_id = auth.user!.id
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

  public async update({ auth, request, response }: HttpContextContract) {
    try {
      await auth.use('api').authenticate()

      const id = request.param('id')
      const title = request.input('title')
      const text = request.input('text')

      // const data = await Note.findOrFail(id)
      const data = await Note.query().where('id', id).where('user_id', auth.user!.id).first()
      if (title) {
        data!.title = title
      }

      if (text) {
        data!.text = text
      }

      await data!.save()

      return response.json({
        status: 200,
        message: 'Note updated successfully',
      })
    } catch (error) {
      return response.json({
        status: 200,
        message: 'Something went wrong',
      })
    }
  }

  public async destroy({ auth, request, response }: HttpContextContract) {
    try {
      await auth.use('api').authenticate()
      const id = request.param('id')
      const data = await Note.query().where('id', id).where('user_id', auth.user!.id).first()
      await data!.delete()

      return response.json({
        status: 200,
        message: 'Note deleted successfully',
      })
    } catch (error) {
      return response.json({
        status: 200,
        message: 'Something went wrong',
      })
    }
  }
}
