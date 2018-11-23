<template>
    <div>       
        <table class="table table-striped">
  <thead>
    <tr>
      <th> </th>
      <th>Full Name</th>
      <th>Email</th> 
      <th>List products</th>     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>{{ customer.id }}</th>
      <td>{{ customer.fullName}}</td>
      <td>{{ customer.email }}</td>
      <td v-for="(product,index) in products" :key="index"> {{ product.title}} {{product.quantity}}</td>  
    </tr>      
  </tbody>
</table>
<center><button @click="addCustomer">Add customer</button></center> 
    </div>
</template>
<script>
//import  {customerService}  from '../utils/CustomerService.js'
import  {productService}  from '../utils/ProductService.js'
import { customerService } from '../utils/CustomerService.js';


export default {
computed: {
    customer () {
        return customerService.find(this.$route.params.id)
    }
}

}
</script>
