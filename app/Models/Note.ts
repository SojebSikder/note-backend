import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Note extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  // @column()
  // @belongsTo(() => User, {
  //   foreignKey: 'id', // defaults to userId
  // })
  // user_id: BelongsTo<typeof User>

  @column()
  user_id: string

  @column()
  title: string
  @column()
  text: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
