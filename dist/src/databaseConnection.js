import { Sequelize } from 'sequelize';
export const sequelize = new Sequelize('postgres', //Database_name
'chahat.chugh', //user
'Source@123', {
    dialect: 'postgres',
    host: 'localhost',
    logging: false
});
sequelize.authenticate().then(() => {
    console.log('Connection established successfully.');
}).catch((err) => {
    console.error('Unable to connect to the database:', err);
});
// const Dummy = sequelize.define('dummy', {
//     // Column-1, user_id is an object with 
//     // properties like type, keys, 
//     // validation of column.
//     user_id:{
//         // Sequelize module has INTEGER Data_Type.
//         type:DataTypes.INTEGER,
//         // To increment user_id automatically.
//         autoIncrement:true,
//         // user_id can not be null.
//         allowNull:false,
//         // For uniquely identify user.
//         primaryKey:true
//     },
//     // Column-2, name
//     name: { type: DataTypes.STRING,defaultValue:'Chahat' },
//     // Column-3, email
//     email: { type: DataTypes.STRING, allowNull:false },
//     // Column-4, default values for
//     // dates => current time
//     myDate: { type: DataTypes.DATE, defaultValue: new Date() },
//      // Timestamps
//      createdAt: DataTypes.DATE,
//      updatedAt: DataTypes.DATE, 
// })
// /* Dummy.drop().then(()=>
// {
//     console.log("table deleted");
// }); */
// Dummy.sync({force:true}).then( () =>
//     {
//         Dummy.create({email: 'abc'}).then(() => {console.log("inserted a row")});
//     }
// );
//# sourceMappingURL=databaseConnection.js.map