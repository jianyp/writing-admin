<template>
  <div>
     <i class="el-icon-s-fold monav_header_icon" @click="drawer = true"></i>
    <el-drawer
      :visible.sync="drawer"
      size="100%"
      direction="ltr">
      <div class="deawer_box">
        <div class="nav_header">
          LOGO REGION
        </div>
        <div class="creat_new">
          <el-button type="primary"> + New Order</el-button>
        </div>
        <div class="nav_list" 
          v-for="(na,index) in navArr" :key="na.id" 
          :class="active==index?'checked':''"
          @click="checkedList(na,index)">
          <svg class="iconWords" aria-hidden="true">
            <use :xlink:href="na.icon"></use>
          </svg>
          <span v-if="na.newOrder != ''">
            <el-badge :value="0" class="item">
              {{na.navName}}
            </el-badge>
          </span>
          <span v-else>
              {{na.navName}}
          </span>
        </div>
        <div class="nav_btn">
          <div class="btn_style">
            Contact us
          </div>
          <div class="btn_style">
            Tems of use
          </div>
        </div>
        <div class="logOut">
            <div class="logOut_nav"><i class="el-icon-right"></i>log out</div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>
<script>
export default {
  data(){
    return{
      drawer: false,
      direction: 'rtl',
      active:0,
      navArr:[
        {navName:'Orders',icon:'#iconic_orders',newOrder:'3'},
        {navName:'My mriters',icon:'#iconic_mriters',newOrder:''},
        {navName:'Member',icon:'#iconic_member',newOrder:''},
        {navName:'Personal Center',icon:'#iconic_personal',newOrder:''},
        {navName:'About platform',icon:'#iconic_platform',newOrder:''},
      ]
    }
  },
  mounted(){
  },
  methods:{
    checkedList(item,i){
      let vm = this
      vm.active = i
    },
  },
}
</script>
<style lang="less" scoped>
    .monav_header_icon{ font-size: 2.6rem; margin-right: 18px; margin-top:4px;}
    .deawer_box{position: fixed; left:0; right:0; top: 60px; bottom: 0; overflow-y: auto;}
    .nav_header{ height: 60px; color: #fff; text-align: center; line-height: 60px; font-size:24px; font-weight: 600;}
    .creat_new{ text-align: center; padding: 16px 0 8px;  margin-bottom: 32px;
      button{ width: 180px; }
    }
    .nav_list{ margin-bottom: 8px; font-size: 16px; padding: 18px 21px; color:#95A0AA; box-sizing: border-box; cursor: pointer;
      .iconWords{ width: 24px; height: 24px; vertical-align: middle; }
    }
    .checked{ background:#7dd9ff; color: #fff; }
    .nav_btn{ padding-left: 50%; margin-left: -90px;
      .btn_style{ width: 180px; border-radius: 4px; border: 1px solid #1BB8FA; color: #fff; height: 40px; line-height: 40px; 
        text-align: center; cursor: pointer; 
        &:nth-child(1){ margin-bottom: 14px; }
        &:hover{ background:#1BB8FA; }
      }
    }
    .logOut{ padding-left: 50%; margin-left: -90px; 
      .logOut_nav{ width: 180px; font-size: 20px; font-weight: 700; color: #fff; height: 40px; line-height: 40px; 
        margin: 20px 0 ; text-align: center; cursor: pointer; 
        &:acitive{ color: #999; }
      }
    }
</style>
<style>
  .el-drawer__wrapper>.el-drawer__container>.el-drawer{ background: #00303F; }
  .el-drawer__wrapper>.el-drawer__container>.el-drawer>.el-drawer__header{ color: #fff;}
</style>