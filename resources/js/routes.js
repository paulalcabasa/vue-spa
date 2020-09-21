import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';
import axios from 'axios';


export default{
    mode: 'history',
    base: 'vue-spa',
    linkActiveClass: 'font-semibold',
    routes: [
        {
            path: '*',
            component: NotFound
        },
        {
            path: '/',
            component: Home,
            name: 'Home'
        },
        {
            path:'/about',
            component: About
        },
        {
            path:'/register',
            component: Register
        },
        {
            path:'/login',
            component: Login,
            name: 'Login'
        },
        {
            path:'/dashboard',
            name: 'Dashboard',
            component: Dashboard,
            beforeEnter: (to, from,next) => {
                axios.get('api/authenticated').then( () => {
                    next();
                }).catch( () => {
                    return next({ name : 'Login'});
                });
            }
        },
    ]
}