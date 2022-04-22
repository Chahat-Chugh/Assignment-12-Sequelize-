import { DataTypes, Model } from "sequelize";
import { sequelize } from "../databaseConnection.js";
export class Customer extends Model {
}
;
Customer.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    website: DataTypes.STRING,
    address: DataTypes.STRING
}, {
    sequelize,
    tableName: 'customers',
    createdAt: 'created_on',
    updatedAt: 'modified_on'
});
await Customer.sync();
//Customer.create({name: 'Mark',website: 'abc.com',address: 'USA'});
/* Customer.bulkCreate([
    {name: 'Harry',website: 'xyz.com',address: 'New York'},
    {name: 'Ram',website: 'defg.com',address: 'India'}
]); */ 
//# sourceMappingURL=customer.js.map