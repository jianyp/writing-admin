
import index from '@/views/index'
import homePage from '@/views/homePage'
import login from '@/views/login'
import personal from '@/views/personal_center'
import order from '@/views/personal_center/coom_main/orders'
import writer from '@/views/personal_center/coom_main/writer'
import profile from '@/views/personal_center/coom_main/profile'
import member from '@/views/personal_center/coom_main/member'

// import eachtrs from './eachtrs.js'

const list = [
  {
    path:'/',
    name:'index',
    component: index,
    redirect:'/homePage',
    children:[
      {
        path: '/homePage',//首页
        name: 'homePage',
        component: homePage
      },
      {
        path: '/login',//登录
        name: 'login',
        component: login
      },
      {
        path: '/personal_center',//个人中心
        name: 'personal',
        component: personal,
        redirect:'/personal_center/orders',
        meta:{
          auth:true
        },
        children:[
          {
            path: '/personal_center/orders',//订单
            name: 'order',
            component: order
          },
          {
            path: '/personal_center/writer',//作家
            name: 'writer',
            component: writer
          },
          {
            path: '/personal_center/member',//成员
            name: 'member',
            component: member
          },
          {
            path: '/personal_center/profile',//个人主页
            name: 'profile',
            component: profile
          },
          {
            path: '/personal_center/about',//关于
            name: 'order',
            component: order
          }
        ]
      }
    ]
  }
  
    // ...eachtrs,
  ]

export default list

export {
  list
}
