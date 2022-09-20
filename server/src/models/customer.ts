import {
    Table,
    Model,
    Column,
    DataType,
} from 'sequelize-typescript';

@Table({
    timestamps: false,
    tableName: 'customer'
})
export class Customer extends Model {
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })
    id!: number

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            min: 1
        }
    })
    f_name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            min: 1
        }
    })
    l_name!: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    })
    email!: string;

    //? unsure if phone should be made unique
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
        validate: {
            min: 10
        }
    })
    phone!: string;

  /*   @Column({
        type: DataType.INTEGER.UNSIGNED,
        references: {
            model: 'job',
            key: 'id'
        }
    })
    job_id?: number */
};