import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Carrito from '../views/Carrito.vue';
import Detalle from '../views/Detalle.vue';
import Login from '../views/Login.vue';
import Panel from '../views/PanelUsuario.vue';
import Productos from '../views/Productos.vue';
import ProductosTest from '../views/ProductosTest.vue';
import Registro from '../views/Registro.vue';
import Servicios from '../views/Servicios.vue';
import P2P from '../views/P2P.vue';


const routes = [
    {
        "path": "/",
        "name": "home",
        "component": Home,
    },
    {
        "path": "/carrito",
        "name": "carrito",
        "component": Carrito,
    },
    {
        "path": "/detalle/:tipo/:id",
        "name": "Detalle",
        "component": Detalle,
        "props": true, // Permite pasar los parámetros de la ruta como props al componente
    },
    {
        "path": "/login",
        "name": "login",
        "component": Login,
    },
    {
        "path": "/panel",
        "name": "panel",
        "component": Panel,
    },
    {
        "path": "/productos",
        "name": "productos",
        "component": Productos,
    },
    {
        "path": "/productosTest",
        "name": "productosTest",
        "component": ProductosTest,
    },
    {
        "path": "/registro",
        "name": "registro",
        "component": Registro,
    },
    {
        "path": "/servicios",
        "name": "servicios",
        "component": Servicios,
    },
    {
        "path": "/p2p",
        "name": "p2p",
        "component": P2P,
    },

]

const router = createRouter({ history: createWebHistory(), routes });

export default router;