import { DataTypes, Model } from "sequelize";
import { sequelize } from "../databaseConnection.js";
export class Role extends Model {
}
;
Role.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    key: {
        type: DataTypes.ENUM,
        values: [
            'superadmin',
            'admin',
            'subscriber'
        ],
    },
    description: DataTypes.STRING
}, {
    tableName: 'myroles',
    sequelize,
    createdAt: 'created_on',
    updatedAt: 'modified_on'
});
Role.sync().
    then(() => {
    console.log("Roles table created successfully.");
}).
    catch(() => {
    console.log('error occured');
});
//# sourceMappingURL=role.js.map