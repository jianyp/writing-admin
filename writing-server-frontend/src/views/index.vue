<template>
  <div class="pageView">
    <div class="contact_us" id="example-3" @click="show = !show">
      <i class="icon iconfont iconic_consultation"></i>
    </div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
      >
      <div v-if="show" class="contact_list">
        <!-- 全局联系飘窗 -->
        asdasd
      </div> 
    </transition>
    <!-- <div v-if="!showPersonal">
      <homePage @gotoLogin="gotoLogin" v-if="!showLogin" ></homePage>
      <loginPage @backHome="backHome" @loginFn="loginFn" v-else-if="showLogin"></loginPage>
    </div>
    <div v-else>
      <personalPage></personalPage>
    </div> -->
    <router-view></router-view>
  </div>
</template>
<script>
import homePage from './homePage/index'
import loginPage from './login/index'
import personalPage from './personal_center/index'
export default {
  components:{
    homePage,
    loginPage,
    personalPage
  },
  data(){
    return{
      show: true,
      showLogin: false,
      showHomePage: true,
      showPersonal: false,
    }
  },
  mounted(){

  },
  methods:{
    gotoLogin(item){
      // let vm = this
      // vm.showLogin = item
      // vm.show = false
    },
    backHome(item){
      // let vm = this
      // console.log(item)
      // vm.showLogin = item
    },
    loginFn(item){
      // let vm = this
      // console.log('=====>',item)
      // vm.showHomePage = item
      // vm.showLogin = item
      // vm.showPersonal = item
    },
  },
}
</script>
<style lang="less">
  .pageView{ margin-bottom: 0; position:relative; height: 100%;
    .contact_us{ position:fixed; right: 15px; bottom: 15px; height: 48px; width: 48px; border-radius: 50%; color: #fff; cursor: pointer;
      text-align: center; line-height: 50px; background: #6DB33F; z-index: 1001; }
      &::after{ content:''; background: #fff; border: 1px solid #6Db33f; position:fixed; right: 12px; bottom: 12px; height: 54px; width: 54px;  border-radius: 50%;}
    .contact_list{ position: fixed ; width: 180px; height: 300px; right: 10px ; bottom: 78px; padding: 8px; box-sizing: border-box; background: #fff;
     border-radius: 8px; box-shadow: 0 0 15px #C3CAD9; z-index: 999; }
  }
</style>
<style scoped>
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>