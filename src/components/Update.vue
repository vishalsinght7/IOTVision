<script setup>
import { onMounted , ref} from 'vue';
import axios from 'axios';
import router from '../routes';
import Header from './Header.vue';

  var name1 = ref("")
  var address1 = ref("")
  var contact1 = ref("")

 async function upDate (){
  const result = await axios.put("http://localhost:3000/restaurant/" + parseInt(router.currentRoute._value.params.id),{
    name:name1.value,
    address:address1.value,
    contact:contact1.value
  })
  if(result.status == 200){
    router.push('/home')
  }
 }

 onMounted ( async()=>{
  debugger;
    const user = localStorage.getItem("user-info")
    if(!user)
    {
      return router.push({name: "signUp"})
    }
    //  router.currentRoute._value.params;

    const result = await axios.get("http://localhost:3000/restaurant/" + parseInt(router.currentRoute._value.params.id))
    name1.value= result.data.name
    address1.value= result.data.address
    contact1.value= result.data.contact
})
       
</script>
<template>
    <div class="sub">
 <h2>
    <Header/>
 </h2>
 <h1>
    <form @submit.prevent.upDate>
        <div class="sub">
        <input type="text" placeholder="EnterName" name="name2" class="input" v-model="name1"> 
        <input type="text" placeholder="EnterAddress" name="address2" class="input" v-model="address1"> 
        <input type="text" placeholder="EnterContact" name="contact2" class="input" v-model="contact1"> 
        <button v-on:click="upDate" class="button" type="submit">UpDate Restorent</button>
    </div>
    </form>
</h1>
 </div>
</template>
<style scoped>
.input{
    height: 21px;
    margin: 7px;
    padding: 12px;
    width: 508px;
    border-color: rgb(16, 241, 241);
}
.sub{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 62px;
}
.button{
    max-width: 131px;
    margin-left: 408px;
    background-color: rgb(5, 126, 233);
    color: white;
    cursor: pointer;
    height: 44px;
}
</style>