import {
    Table,
    Model,
    Column,
    DataType,
    BeforeCreate,
    BeforeUpdate
} from 'sequelize-typescript';
import { Hooks } from 'sequelize/types/hooks';
import bcrypt from 'bcrypt';

//* define USER table
@Table
({
    timestamps: false,
    tableName: 'user'
})
export class User extends Model {

    checkPassword(loginPw: string) {
        return bcrypt.compareSync(loginPw, this.password);
      }

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
    
    @Column({
        type: DataType.STRING,
        unique: false,
        allowNull: false,
        validate: {
            min: 4
        } 
    })
    password!: string;

    @BeforeUpdate
    @BeforeCreate
    static async hashPassword(user: User) {
        //* this will be called when an instance is created or updated
        user.password = await bcrypt.hash(user.password, 10);
        return user;
    }
};

