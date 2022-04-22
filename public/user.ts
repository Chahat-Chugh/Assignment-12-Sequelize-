/* 
enum Role {
    superadmin = 'superadmin',
    admin= 'admin',
    subscriber = 'subscriber'
}
 */

class User {
    

        constructor(public id: number,public firstName:string, public middleName :string, public lastName:string,public email:string,
            public phone: string, public address: string,public created_on: string, public modified_on: string,public role: string,public customer: string)
        {
     
        }
     }

export { User};