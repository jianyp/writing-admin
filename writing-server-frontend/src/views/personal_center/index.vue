<template>
  <div class="conter_main_body">
    <div v-if="!isView_port">
      <div class="main_header">
        <web_header @toggleClick="toggleClick" :leftWidth="leftWidth" style="transition: .3s all;" :class="leftWidth? 'header_left': 'header_left2'">
        </web_header>
      </div>
      <div class="main_left_nav">
        <web_nav :leftWidth="leftWidth" @openNav="openNav" style="transition: .3s all;" :class="leftWidth? 'nav_left': 'nav_left2'"></web_nav>
      </div>
    </div>
    <div v-else>
      <mobile_header>
        <mobile_nav style="float:left"></mobile_nav>
      </mobile_header>
    </div>
    <div class="main_right_body" >
      <main_index :isView_port="isView_port" :leftWidth="leftWidth" ></main_index>
    </div>
  </div>
</template>
<script>
import web_header from './components/web_header'
import mobile_header from './components/mobile_header'
import web_nav from './components/web_nav'
import mobile_nav from './components/mobile_nav'
import main_index from './coom_main/index'
export default {
  components:{
    mobile_header,
    web_header,
    web_nav,
    mobile_nav,
    main_index
  },
  data(){
    return{
      isView_port: false,
      leftWidth: true,
      isDrawer: false,
      webWidth:0, 
    }
  },
  mounted(){
    let vm = this
    vm.resizeWinow()
  },
  methods:{
    resizeWinow(){
      let vm = this
      let wws = document.documentElement.clientWidth
      console.log('===>',wws)
        vm.webWidth = wws
      if(wws<768){
        vm.isView_port = true
      }else{
        vm.isView_port = false
      }
      window.onresize = () => {
        let ww = document.documentElement.clientWidth
        if(ww<768){
          vm.isView_port = true
        }else{
          vm.isView_port = false
          if(ww>=996){
            vm.leftWidth = true
          }else if(768<=ww<996){
            vm.leftWidth = false
          }
        }
        vm.webWidth = ww
      }
    },
    openNav(item){
      this.leftWidth = item
    },
    toggleClick(item){
      this.leftWidth = item
    }
  },
}
</script>
<style lang="less" scoped>
  .conter_main_body{ position: relative;
    .header_left{ margin-left: 270px; }
    .header_left2{ margin-left: 80px; }
    .main_left_nav{ float: left; }
    .nav_left{ width: 270px; }
    .nav_left2{ width: 80px; }
  }
</style>