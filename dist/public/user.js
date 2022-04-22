/*
enum Role {
    superadmin = 'superadmin',
    admin= 'admin',
    subscriber = 'subscriber'
}
 */
class User {
    constructor(id, firstName, middleName, lastName, email, phone, address, created_on, modified_on, role, customer) {
        this.id = id;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.created_on = created_on;
        this.modified_on = modified_on;
        this.role = role;
        this.customer = customer;
    }
}
export { User };
//# sourceMappingURL=user.js.map