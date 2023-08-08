<script setup>
import { onMounted,ref } from 'vue';
import router from '../routes';
import Header from './Header.vue';
import axios from 'axios';
const Username = ref("");
const restaurants = ref([]);

async function Delete(id){
  const result = await axios.delete("http://localhost:3000/restaurant/"+id);
  if(result.status==200){
    lodData();
  }
}
 async function lodData(){
  const user = localStorage.getItem("user-info")
    Username.value = JSON.parse(user).username;
    if(!user)
    {
      return router.push({name: "signUp"})
    }
    const response = await axios.get("http://localhost:3000/restaurant");
    restaurants.value = response.data;
}
onMounted(()=>{
  lodData();
})
</script>
<template>
    <div class="sub">
 <h2>
    <Header/>
 </h2>
 <h1>
    Welcome to the home page {{Username }}.
 </h1>
     <table border="1">
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Actions</th>
        </tr>
      <tr v-for="item in restaurants" :key="item.id">
        <td>{{ item.id}}</td>
        <td>{{ item.name}}</td>
        <td>{{ item.address}}</td>
        <td>{{ item.contact}}</td>
        <td><router-link :to="'/update/' + item.id">Update</router-link></td>
         <button v-on:click="Delete(item.id)" id="mg"> Delete</button>
      </tr>
    </table>
 </div>
</template>
<style scoped>
.sub{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 62px;
}

td{
    width: 192px;
    height: 41px;
}
#mg{
  cursor: pointer;
  background-color:rgb(241, 216, 170);
  height: 30px;
}
</style>