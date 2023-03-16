import {
  AllowNull,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';

@Table({
  tableName: 'phonesInfo',
  createdAt: false,
  updatedAt: false,
})

export class PhoneInfo extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  id: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  namespaceId: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @AllowNull(false)
  @Column({
    type: DataType.JSONB,
  })
  capacityAvailable: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  capacity: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  priceRegular: number;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  priceDiscount: number;

  @AllowNull(false)
  @Column({
    type: DataType.JSONB,
  })
  colorsAvailable: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  color: string;

  @AllowNull(false)
  @Column({
    type: DataType.JSONB,
  })
  images: string;

  @AllowNull(false)
  @Column({
    type: DataType.JSONB,
  })
  description: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  screen: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  resolution: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  processor: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  ram: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  camera: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  zoom: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  cell: string;

}
