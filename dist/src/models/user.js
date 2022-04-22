import { Role } from "./role.js";
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../databaseConnection.js";
import { Customer } from "./customer.js";
export class User extends Model {
}
;
User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    middlename: {
        type: DataTypes.STRING,
        defaultValue: "-"
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'myusers',
    createdAt: 'created_on',
    updatedAt: 'modified_on'
});
Role.hasMany(User);
User.belongsTo(Role);
Customer.hasMany(User);
User.belongsTo(Customer);
await User.sync();
/* User.bulkCreate([
    {firstname: 'Neil',lastname:'Irani',email: 'neil.irani@gmail.com',phone:'408-11110',address:'USA',CustomerId: 1,RoleName: 'Admin'},
    {firstname: 'Mira',lastname:'Mathur',email: 'mira123@gmail.com',phone:'987654321',address:'India',CustomerId: 2, RoleName: 'Subscriber'},
    {firstname: 'Tom',lastname:'Hanks',email: 'tom.hanks123@gmail.com',phone:'408-11000',address:'USA',CustomerId: 3,RoleName: 'Super Admin'}
])
 */
//# sourceMappingURL=user.js.map