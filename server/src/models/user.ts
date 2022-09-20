import {
    Table,
    Model,
    Column,
    DataType,
} from 'sequelize-typescript';

//* define USER table
@Table
({
    timestamps: false,
    tableName: 'user'
})
export class User extends Model {
    @Column({
            type: DataType.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
    })
    id!: number;

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
        allowNull: false
    })
    admin!: boolean;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        } 
    })
    email!: string;

};