<template>
    <div>       
        <table class="table table-striped">
  <thead>
    <tr>
      <th> </th>
      <th>Full Name</th>
      <th>Email</th>      
    </tr>
  </thead>
  <tbody>
    <tr v-for="(customer,id) in customers" :key="id">
      <th>{{ customer.id }}</th>
      <td>{{ customer.fullName}}</td>
      <td>{{ customer.email }}</td>
      <td><button class='btn btn-danger' @click="remove(customer)">Remove</button></td>  
      <td><button @click="showDetails(customer)">Latest Purchases</button></td>   
    </tr>      
  </tbody>
</table>
<center><button @click="addCustomer">Add customer</button></center> 
    </div>
</template>

<script>
import  {customerService}  from '../utils/CustomerService.js'
import  {productService}  from '../utils/ProductService.js'


export default {
    data(){
        return{
            customers: customerService.list()
        }

    },
    methods: {
        remove(customer){
            customerService.removeCustomer(customer)
        } ,
        addCustomer(){
        this.$router.push('add-customer');
    },
        showDetails(customer){
            this$router.push('customer-details', {id: customer.id});
    }
    }
    
}
</script>
