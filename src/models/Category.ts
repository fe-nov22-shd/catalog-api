import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';

@Table({
  tableName: 'categories',
  createdAt: false,
  updatedAt: false,
})

export class Category extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  id: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  name: string;
  
}
