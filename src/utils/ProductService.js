const products = [
    {
        id: 1,
        title: 'banana',
        quantity: 10
    },
    {
        id: 2,
        title: 'banana',
        quantity: 10
    },
    {
        id: 3,
        title: 'banana',
        quantity: 10
    },
    {
        id: 4,
        title: 'banana',
        quantity: 10
    }

]
let nextId =4;

export default class ProductService{
    list(){
        return products;
    }
}

export const productService = new ProductService();