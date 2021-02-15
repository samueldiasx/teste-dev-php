import AllCars from './components/AllCars.vue';
import AddCar from './components/AddCar.vue';
import EditCar from './components/EditCar.vue';

export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllCars,
    },
    {
        name: 'add',
        path: '/adicionar-carro',
        component: AddCar,
    },
    {
        name: 'edit',
        path: '/atualizar-carro/:id',
        component: EditCar,
    },
];