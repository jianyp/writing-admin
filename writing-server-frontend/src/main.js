
import './vue-filters'

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)
import _ from 'lodash'
import router_list from './router'

// 公共样式
import '../static/common.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
Vue.use(ElementUI);

import { AlertPlugin, ToastPlugin } from 'vux'
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

//阿里彩色图标库
import './iconfont.js'
import './assets/iconfont/iconfont.css'
//全局公共组件库
import './global_component.js'

// 引入axios
import axios from 'axios';
Vue.prototype.$axios = axios;

//引入nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 配置nprogress
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

// 环境的切换
// 全局请求基础地址
if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = 'http://localhost:3000';
}
else if (process.env.NODE_ENV == 'debug') {
  axios.defaults.baseURL = 'https://www.ceshi.com';
}
else if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = 'https://www.production.com';
}

// 请求拦截器
axios.interceptors.request.use(
config => {
  // 每次发送请求之前判断vuex中是否存在token
  // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
  // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
  const token = localStorage.getItem('token');
  token && (config.headers.Authorization = token);
  return config;
},
  error => {
    return Promise.error(error);
  })

// 响应拦截器
axios.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 其他错误状态码处理
  error => {
    if (error.response.data.code) {
      switch (error.response.data.code) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 201:
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          });
          break;

        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 203:
          Vue.prototype.$message({
            message: '登录过期，请重新登录',
            type:"warning"
          });
          // 清除token
          localStorage.removeItem('token');
          store.commit('loginSuccess', null);
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath
              }
            });
          }, 1000);
          break;

        // 404请求不存在
        case 404:
          Vue.prototype.$message({
            message: '访问地址不存在',
            type:"error"
          });
          break;
        // 其他错误，直接抛出错误提示
        default:
          Vue.prototype.$message({
            message: error.response.data.message,
          });
      }
      return Promise.reject(error.response);
    }
})



/* vue-resource 统一请求处理
 *-------------------------------------------------------------------------------*/
window.http = Vue.http
Vue.config.productionTip = false;
Vue.http.options.credentials = false;
Vue.http.options.emulateJSON = true;
Vue.http.interceptors.push(function (request, next) {
  // 统一处理返回消息
  if (window.showRouteKey) {
    window.loadingSum++
  }
  //加headers
  if (!request.headers.map.Authorization) {
    let token = window.getUserInfo().token;
    // let loginName = window.getUserInfo().loginName;
    // let deviceId = window.getUserInfo().deviceId;
    let deviceType = window.getUserInfo().os;
    if (token) {
      request.headers.set('Authorization', 'Bearer ' + token);
      // request.headers.set('loginName', loginName);
      // request.headers.set('deviceId', deviceId);
      request.headers.set('deviceType', deviceType);
    }
  }
  next(function (response) {
    let data = response.data;
    // data.showHits 统一做提示处理
    if (window.showRouteKey) {
      window.loadingSum--
      if (window.loadingSum === 0) {
        window.showRouteKey = false
        //window.loadingInstance.close()
      }
    }
    if (data) {
      if (data.showHits) {
        let type = 'success'
        let msg = data.message
        let time = 3000

        if (data.code === 30000) {
          msg = _.map(data.data, function (vv) {
            return `<p>${vv}</p>`;
          }).join('')
        } else if (data.code === 20001) {
          // data.level = 'failmask';
          data.level = 'fail';
        }
        switch (data.level) {
          case 'info':
            type = 'success'
            break;
          case 'warn':
            type = 'warn'
            break;
          case 'fail':
            type = 'warn'
            time = 10000
            break;
          default:
            msg = '未处理的其它 level: ' + data.level
        }
        vueApp.$vux.toast.text(msg);

      }
    }
    // 出现异常 401
    if (!response.ok) {
      if (data.error == 'invalid_token') {
        // 跳到登录页
        // logout();
      }
    }

  })
});


/* 生成服务器地址
 *-------------------------------------------------------------------------------*/
window.globel_url = '/api'
// let DEV_ONLINE_SERVER_URL = (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'front') ?
//   // 'http://localhost:8086/platform' // npm run dev 使用这个
//   globel_url // 测试环境使用这个
//   :
//   '/gateway' // npm run build 使用这个
// // 区分线上和开发模式, 使用不同的url来读取数据
// let url_key = process.env.NODE_ENV === 'development' ?
//   'appUrl' // npm run dev 使用这个
//   :
//   'appRunUrl' // npm run build 使用这个 纯前端(front)开发使用 appRunUrl
// console.log('=========>', DEV_ONLINE_SERVER_URL, '=========>', url_key)

// window.userInfo = {};


window.userInfo = { //调试的时候打开
  // id: 'f1dab0eebc8347efa2c10ad918d90216',
  // token: '81f41a09-7600-434c-9a5a-1ac2cefe1da1',
  // orgId: 'a528d2c75a954a1ea4726554c0cc7983',
  // os: 'IOS'
};

window.systemParameter = "";

//本地开发使用
window.server_url_platform = '/gateway/platform';
window.server_url_things = '/gateway/things';

//URL参数处理
window.getUrlParam = function (name) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  let param = window.location.hash.split('?');
  let value = null;
  if (param && param.length > 1) {
    let r = param[1].match(reg);
    if (r) {
      value = r[2];
    }
  }
  return value;
}

//获取用户信息
window.getUserInfo = function () {
  if (window.userInfo) {
    if (!window.userInfo.id) {
      window.userInfo.id = window.getUrlParam('userId');
    }
    if (!window.userInfo.token) {
      window.userInfo.token = window.getUrlParam('token');
    }
    if (!window.userInfo.os) {
      window.userInfo.os = window.getUrlParam('os') ? window.getUrlParam('os').toUpperCase() : 'ANDROID';
    }
    if (!window.userInfo.loginName) {
      window.userInfo.loginName = window.getUrlParam('loginName') ? window.getUrlParam('loginName') : '';
    }
    if (!window.userInfo.deviceId) {
      window.userInfo.deviceId = window.getUrlParam('deviceId') ? window.getUrlParam('deviceId') : '';
    }
  } else {
    window.userInfo = {};
    window.userInfo.id = window.getUrlParam('userId');
    window.userInfo.token = window.getUrlParam('token');
    window.userInfo.os = window.getUrlParam('os') ? window.getUrlParam('os').toUpperCase() : 'ANDROID';
    window.userInfo.loginName = window.getUrlParam('loginName') ? window.getUrlParam('loginName') : '';
    window.userInfo.deviceId = window.getUrlParam('deviceId') ? window.getUrlParam('deviceId') : '';
    // window.userInfo.deviceType = window.getUrlParam('os') ? window.getUrlParam('os').toUpperCase() : 'ANDROID';
  }
  return window.userInfo;
}



/* 初始化路由 并挂载到vue
 *-------------------------------------------------------------------------------*/
// 初始化路由
const router = new VueRouter({
  mode: 'history',
  routes: router_list,
})
router.beforeEach((to,from,next)=>{
  // if(to.meta.auth){
  //  if(localStorage.getItem("userInfo")){
  //   NProgress.start()
  //   next()
  //  }else{
  //    router.push({path:'/login'})
  //  }
  // }else{
  //   NProgress.start()
  //   next() //放行
  // }
  NProgress.start();
  next();
 })
router.afterEach(() => {
  NProgress.done()
})

const store = new Vuex.Store({
  state: {
  },
  mutations: {
    // increment(state) {
    //   state.count++
    // },
  }
})

//初始化APP
window.vueApp = new Vue({
  router,
  store,
  render(h) {
    return h('div', {
      attrs: {
        id: 'app'
      }
    }, [h('router-view')]);
  }
})
vueApp.$mount('#app')


/* 全局方法
 *-------------------------------------------------------------------------------*/

// window.globalBus = new Vue() // 用于全局消息传递, 详情查看: https://vuefe.cn/v2/guide/components.html#非父子组件通信

window.logout = function () {
  alert('登录已过期，请重新登录');
  // setCookie('token', '')
  // setCookie('refresh_token', '')
  // setCookie('roleTypeId', '')
  // router.push('/login')
};

// 排序处理
window.eduSortParam = function (obj) {
  let rs = []
  for (let ii in obj) {
    rs.push(ii + '=' + obj[ii])
  }
  return rs.join(',');
}

// 只生成一层 a=b;c=d
window.eduFilterParam = function (obj) {
  let rs = []
  for (let ii in obj) {
    rs.push(ii + '=' + obj[ii])
  }
  return rs.join(';');
}



window.getUserInfo();
console.log(window.getUserInfo().os);