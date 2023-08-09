<template>
    <h1>Employee Details</h1>
    <HelloWorld :fetchedData="data" />
</template>
  
  
  
<script>

import axios from "axios"
import HelloWorld from './components/HelloWorld.vue';

export default {
    name: 'App',

    components: {
        HelloWorld,
    },

    data() {
        return {
            data: null,
            designation: null
        }
    },



    // mounted() {
    //   fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(data => {
    //       this.data = data;
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
    // },


    async mounted() {        
        let result = await axios.get(" http://10.140.2.35/cPoint/api/Department/get-department_list");
        console.log(result.data) 
        this.data = result.data 
    },

    async mounted() {        
        let result = await axios.get(" http://10.140.2.35/cPoint/api/Designation/get-designation_list");
        console.log(result.data)
        this.data = result.data
    },


}
</script>
  
  
  
 