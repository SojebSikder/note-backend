import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Note extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  @hasOne(() => User, {
    foreignKey: 'id', // defaults to userId
  })
  user_id: HasOne<typeof User>

  @column()
  title: string
  @column()
  text: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
