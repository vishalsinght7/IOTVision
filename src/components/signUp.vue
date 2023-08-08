<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import router from '../routes';

const username = ref('');
const email = ref('');
const password = ref('');

async function Submithandler (){
    console.log("Signup", username.value, email.value, password.value);
    let result = await axios.post("http://localhost:3000/restaurant",{
    username:username.value,
    email:email.value,
    password:password.value
  })
  console.log(result)
  if(result.status==201){
    alert("Signup Done")
    localStorage.setItem("user-info",JSON.stringify(result.data))

    // following function redireact page after user login 
    router.push('/home');
  } 
  //this function use to save data in local storage.  
};
  onMounted(()=>{
  const user = localStorage.getItem("user-info")
  if(user)
     return router.push({name:"Home"});
  })
</script>

<template>
    <div class="login-container">
        <img src="../assets/MicrosoftTeams-image.jpg">
      <h1>SignUp</h1>
      <form @submit.prevent="Submithandler"> 
         <div clas="Inputfor">
               <label for="username1">Username</label>
               <input class="input" type="text" id="username1" v-model="username" required>
               <label for="email">Email</label>
               <input class="input" type="text" id="email" v-model="email" required>
               <label for="password">Password</label>
               <input class="input" type="password" id="password" v-model="password" required>
               <!-- <button class="input" type="submit"  @click="">Login</button> -->
               <button v-on:click="signUp" type="submit">SignUp</button>
               <p>
                <router-link to='/login'>Login</router-link>
               </p>
        </div> 
      </form>
    </div>
  </template>

  <style scoped>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  h1 {
    margin-bottom: 1rem;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  label {
    margin-top: 0.5rem;
  }
  
  input {
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 310px;
  }
  
  button {
    padding: 0.5rem 1rem;
    border-radius: 4px;
    background-color: skyblue;
    border-color: aqua;
    color: #fff;
    border: none;
    width: 329px;
    cursor: pointer;
  }

  .input{
   display: flex;
   direction: column;
  }
  </style>
  