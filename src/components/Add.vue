
<script setup>
import { onMounted ,ref} from 'vue';
import router from '../routes';
import Header from './Header.vue';
import axios, { HttpStatusCode } from 'axios';
onMounted (()=>{
    const user = localStorage.getItem("user-info")
    if(!user)
    {
      return router.push({name: "signUp"})
    }
})


const restorent = ref ({
  name: '',
  address: '',
  contact: ''
});
            
 function addRestorent(){ 
  const result = axios.post("http://localhost:3000/restaurant" ,{
    name:restorent.value.name,
    address:restorent.value.address,
    contact:restorent.value.contact
  }).then(res=>{ debugger;
    //success function
    if(res.status===201){
     this. router.push('/home')
    }
  }).catch(err=>{ 
//error function.

  });
  
}

</script>
<template>
    <div class="sub">
 <h2>
    <Header/>
 </h2>
 <h1>
    <form class="add" >
<input type="text" placeholder="EnterName" name="name" class="input" v-model="restorent.name"> 
<input type="text" placeholder="EnterAddress" name="address" class="input" v-model="restorent.address"> 
<input type="text" placeholder="EnterContact" name="contact" class="input" v-model="restorent.contact"> 
<button v-on:click="addRestorent()" class="button" type="submit">Add New Restorent</button>
</form>
</h1>
 </div>
</template>
<style scoped>

.sub{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 62px;
}
.add{
    display: flex;
    flex-direction: column;
}
input{
    height: 21px;
    margin: 7px;
    padding: 12px;
    width: 508px;
    border-color: rgb(16, 241, 241);
}
.button{
    max-width: 131px;
    margin-left: 408px;
    background-color: rgb(5, 126, 233);
    color: white;
    cursor: pointer;
}
</style>