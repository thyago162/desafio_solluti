import Vue from 'vue'
import Router from 'vue-router'

import Home from '../view/Home'
import Loja from '../view/Loja'
import Produto from '../view/Produtos'
import ProdutosLoja from '../view/ProdutosLoja'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home'
        },
        {
            path: '/loja',
            component: Loja,
            name: 'loja'
        },
        {
            path: '/loja/produtos/:id',
            component: ProdutosLoja,
            name: 'produtos_loja',
            props: { default: true, sidebar: false }
        },
        {
            path: '/produtos',
            component: Produto,
            name: 'produto'
        }
    ]
})
