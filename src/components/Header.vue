<script setup>
import router from '../routes';
function logout() {
   localStorage.clear();
   router.push({name:"signUp"});
}
</script>
<template>
    <div class="nav">
        <router-link to="/home" class="snav">Home</router-link>
        <router-link to="/add" class="snav">Add Restorent</router-link>
        <a href="home" class="snav" v-on:click="logout()">Logout</a>
    </div>
</template>

<style scoped>
.nav {
    display: flex;
    background-color:rgb(201, 245, 245);
    width: 1200px;
    justify-content: space-between;}
.snav{
    margin:12px;
    width: 220px;
    height:30px;
    color: rgb(139, 139, 246);
}
.nav :hover{
    background-color: rgb(170, 170, 251);
    color: #e1f7e0;
}
</style>