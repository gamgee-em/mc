import {
    Table,
    Model,
    Column,
    DataType,
} from 'sequelize-typescript';

@Table({
    timestamps: false,
    tableName: 'job'
})
export class Job extends Model {
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })
    id!: number

    @Column({
        type: DataType.DATE(),
        allowNull: false,
    })
    service_date!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            min: 3
        },
        defaultValue: 'TBD'
    })
    starting_address!: string

    @Column({
        type: DataType.STRING,
        allowNull: true,
        validate: {
            min: 3
        },
    })
    inbetween_address!: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            min: 3
        },
        defaultValue: 'TBD'
    })
    ending_address!: string

    //* add companies base rate to default value
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: true,
        validate: {
            min: 1
        },
        defaultValue: 150
    })
    hourly_rate!: number

    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: true,
        validate: {
            min: 0
        },
        defaultValue: 0
    })
    tolls!: number
    
    //* add companies base fuel surcharge to default value
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false,
        validate: {
            min: 1
        },
        defaultValue: 15
    })
    fuel!: number
    
    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        validate: {
            min: 1
        },
        defaultValue: 150
    })
    elevator!: boolean

    @Column({
        type: DataType.STRING,
        allowNull: true,
        validate: {
            min: 1
        },
        defaultValue: 'TBD'
    })
    servicing_employees!: string

    @Column({
        type: DataType.STRING,
        allowNull: true,
        validate: {
            min: 0,
            max: 250
        }
    })
    misc_info?: string

    @Column({
        type: DataType.INTEGER.UNSIGNED,
        references: {
            model: 'customer',
            key: 'id'
        }
    })
    customer_id!: number

    @Column({
        type: DataType.INTEGER.UNSIGNED,
        references: {
            model: 'user',
            key: 'id'
        }
    })
    user_id!: number

}
