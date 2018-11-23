const customers = [
    {
        id:1,
        fullName: 'Mario Neki',
        email: 'example@gmail.com',
        products: []
    },
    {
        id:2,
        fullName: 'Anna Neka',
        email: 'example@gmail.com',
        products: []
    },
    {
        id:3,
        fullName: 'Novak Neki',
        email: 'example@gmail.com',
        products: []
    }
]
let nextId = 4;

export default class CustomerService {
    
    list(){
        return customers;
    }
    find(id){
        return customers.find(customer=>customer.id == id);
    }
    add(customer){
        customer.id = nextId;
        customers.push(customer);
        nextId++;
    }
    removeCustomer(customer){
        let index = customers.indexOf(customer);
        customers.splice(index,1);
    }
}

export const customerService = new CustomerService();