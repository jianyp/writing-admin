<template>
  <div >
    <div class="header_box" >
      <i class="el-icon-s-fold" @click="toggleClick" style="transition: transform 0.3s;" 
        :style="{transform: 'rotateZ(' + (!leftWidth ? '0' : '-90') + 'deg)'}"></i>
      <div class="right_nav">
        <span class="nav_list">
          <i class="el-icon-user"></i>Welcome to your Control Panel, <span class="userName">{{user || 'Tom'}}</span> !
        </span>
        <span class="nav_list nav_listColor" @click="logOut"><i class="el-icon-right"></i>log out</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    leftWidth:{
      type: Boolean
    }
  },
  data(){
    return{
      user:JSON.parse(localStorage.getItem("userMsg")).username
    }
  },
  mounted(){
    let vm = this
    // vm.isCollapse = vm.leftWidth
  },
  methods:{
    toggleClick(){
      let vm = this
      vm.$emit('toggleClick',!vm.leftWidth)
    },
    logOut(){
      let vm = this
      this.$router.push({path:'login'})
      localStorage.removeItem("userInfo");
    }
  },
}
</script>
<style lang="less" scoped>
  .header_box{ border-bottom: 1px solid #e5e7ea ; height: 60px; background: #fff; line-height: 60px; padding: 0 8px;
    >i{ font-size: 24px; vertical-align: middle; cursor: pointer; }
    .right_nav{ float: right; font-size: 14px; color: #333;
      .nav_list{ margin-right: 35px; 
        >i{ width: 16px ; height: 16px; }
        >.userName{ color: #6DB33F; font-weight: bold}
      }
      .nav_listColor{ color: #A8BEC9; cursor: pointer; }
    }
  }
</style>