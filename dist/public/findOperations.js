export function findIndexByID(id, users) {
    return users.findIndex((user) => user.id === id);
}
export async function getRoleList(myURL) {
    const response = await fetch(myURL + '/roles');
    const data = await response.json();
    const roleList = [];
    for (let i = 0; i < data.length; i++) {
        roleList.push(data[i].name);
    }
    return roleList;
}
export async function getRoleKey(myURL, role) {
    const res = await fetch(myURL + '/roles/' + `${role}`);
    const data1 = await res.json();
    return data1;
}
export async function getCustomerList(myURL) {
    const res = await fetch(myURL + '/customers');
    const data1 = await res.json();
    const customerList = [];
    for (let i = 0; i < data1.length; i++) {
        customerList.push(data1[i].name);
    }
    return customerList;
}
export async function getCustomerIdByName(myURL, name) {
    const res = await fetch(myURL + '/customers/' + `${name}`);
    const data1 = await res.json();
    return data1;
}
//# sourceMappingURL=findOperations.js.map