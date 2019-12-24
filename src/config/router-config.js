// 路由配置文件只放路由信息
import Home from '../views/Home.vue'
// ctrl + p 快速搜索文件
const routers = [{
    path: '/',
    component: Home,
    children: [{
        path: '',
        name: 'home',
        component: () => import("@/views/main/Main.vue")
      },
      // 增加一个新的页面并导入
      {
        path: '/social',
        name: 'social',
        component: () => import('@/views/main/Social.vue'),
      },
      {
        // 动态路由
        path: '/details/:id',
        name: 'details',
        component: () => import('@/views/main/Details.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/user/User.vue')
      }
    ]
  },
  { // 配置嵌套路由
    path: '/login',
    // 给login路由取名  命名路由

    // 导入login页面需要展示的内容
    // 懒加载导入 可以省略.vue
    component: () => import('@/views/user/Index.vue'),
    children: [{ // 配置登录
        path: '',
        name: 'login',
        component: () => import('@/views/user/Login.vue')
      },
      {
        path: '/reg',
        component: () => import('@/views/user/Reg'),
        name: 'reg'
      },
    ]
  },
  // {
  //   // 配置login页面
  //   path:'/login',
  //   // 给login路由取名  命名路由
  //   name:'login',
  //   // 导入login页面需要展示的内容
  //   // 懒加载导入 可以省略.vue
  //   component: ()=> import('@/views/user/Login.vue')
  // },{
  //   path: '/reg',
  //   component: () => import('@/views/user/Reg'),
  //   name: 'reg'
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

// 在其他文件使用需要把router导出

export default routers