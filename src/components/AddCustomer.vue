<template>
    <div>
     <form @submit.prevent="addCustomer">
        <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input v-model="newCus.fullName"  placeholder="Enter name">            
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Email address</label>
            <input v-model="newCus.email"  placeholder="Enter email">
        </div>       
        <button type='submit'>Add</button>
    </form>
    </div>
</template>

<script>
import  {customerService}  from '../utils/CustomerService.js'

export default {
    data(){
        return{
            newCus: {
                fullName: '',
                email: ''
            }
        }
    },
    methods:{
        addCustomer(){
            //console.log('sfsfsfs')
            customerService.add(this.newCus);
            this.$router.push('customers');

        }

    }
} 

</script>
