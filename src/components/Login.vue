<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import router from '../routes';

const email = ref('');
const password = ref('');

async function login(){
console.log(email.value, password.value);
let result= await axios.get(`http://localhost:3000/Users?email=${email.value}&password=${password.value}`);
console.log(result);
 if(result.status == 200 &&  result.data.length>0){
    //set data {result} in local storage to check onmounted
    localStorage.setItem("user-info",JSON.stringify(result.data[0])) }
    router.push('/home');
}
// this function a avoid to redireact home page to the login or signup page one we are in home page;
onMounted (()=>{
    let user= localStorage.getItem("user-info")
    if(user){
      return  router.push('/home');
    }
})
</script>

<template>
<div class="login-container">
<img class="logo" src="../assets/MicrosoftTeams-image.jpg">
<h1>Login</h1>
<form @login.prevent="login">
   <div class="inputform">
<label for="email1">Email</label>
<input class="input" type="text" id="email1"  v-model="email" required>
<label for="password1">Password</label>
<input class="input" type="text" id="password1" v-model="password" required>
<button v-on:click="login" type="login" id="loginbutton">Login</button>
<p>
    <router-link to='/'> SignUp</router-link> 

</p>
</div>
</form>
</div>
</template>

<style>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
    height: 100vh; 
  }
 .inputform {
    display: flex;
    flex-direction: column;
    align-items: center;
 }
.input{
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 310px;
}
#loginbutton{
    width: 326px;
    margin: 10px;
    padding: 8px;
    background-color: skyblue;
    border-color: rgb(189, 237, 237);
    color: #fff;
    cursor: pointer;
}
</style>
