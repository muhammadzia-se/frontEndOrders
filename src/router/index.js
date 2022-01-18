import Orders from '../views/Orders'
import Home from '../views/Home'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/orders',
        name: 'Orders',
        component: Orders
    }
]

export default router