import Home from './components/Home.vue';
import signUp from './components/signUp.vue';
import Login from './components/Login.vue';
import Add from './components/Add.vue';
import Update from './components/Update.vue';

import { createRouter,createWebHashHistory }from 'vue-router';

const routes=[
    {
        name: 'signUp',
        path: '/',
        component:signUp
    },
    {    
        name: 'Home',
        path: '/home',
        component: Home
    },
    {
        name: 'Login',
        path: '/login',
        component: Login
    },
    {
        name: 'Add',
        path: '/add',
        component: Add
    },
    {
        name: 'Update',
        path: '/update/:id',
        component: Update
    },
        
];
export const router = createRouter({
    history: createWebHashHistory(),routes
})
export default router    