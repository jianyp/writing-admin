
import index from '@/views/index'
import homePage from '@/views/homePage'
import login from '@/views/login'
import personal from '@/views/personal_center'

// import eachtrs from './eachtrs.js'

const list = [
  {
    path:'/',
    name:'index',
    component: index,
    redirect:'/homePage',
    children:[
      {
        path: '/homePage',//政策
        name: 'homePage',
        component: homePage
      },
      {
        path: '/login',//政策
        name: 'login',
        component: login
      },
      {
        path: '/personal_center',//政策
        name: 'personal',
        component: personal,
        meta:{
          auth:true
        }
      }
    ]
  }
  
    // ...eachtrs,
  ]

export default list

export {
  list
}
