import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Note from 'App/Models/Note'

export default class NotesController {
  public async index ({}: HttpContextContract) {
    return Note.all()
  }

  public async create ({}: HttpContextContract) {
    const data = new Note();

    data.title = 'title';
    data.text = 'text';

    // insert in to the database
    await data.save();
    
  }

  public async store ({}: HttpContextContract) {
  }

  public async show ({}: HttpContextContract) {
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
