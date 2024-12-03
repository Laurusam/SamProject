
import Layout from '@/views/Layout.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'
import Article from '@/views/Article.vue'
import Collect from '@/views/Collect.vue'
import Like from '@/views/Like.vue'
import User from '@/views/User.vue'
import { createMemoryHistory,createWebHistory,createRouter } from 'vue-router'
const router = createRouter({
routes: [
 {
path: '/',
component: Layout,
redirect: '/article',
children:[
    {
        path:'/article',
        component:Article
         },
         {
        path:'/collect',
        component:Collect
         },
         {
        path:'/like',
        component:Like
         },
         {
        path:'/user',
        component:User
         }
     ]
 },
 {
path: '/detail/:id',
component: ArticleDetail
 },
 
 ],
history:createWebHistory()
})
export default router