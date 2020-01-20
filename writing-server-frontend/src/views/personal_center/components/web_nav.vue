<template>
  <div class="web_nav_box">
    <div v-if="leftWidth">
      <div class="nav_header">
        LOGO REGION
      </div>
      <div class="creat_new">
        <el-button type="primary"> <i class="el-icon-plus"></i> New Order</el-button>
      </div>
      <div class="nav_list" 
        v-for="(na,index) in navArr" :key="na.id" 
        :class="active==index?'checked':''"
        @click="checkedList(na,index)">
        <svg class="iconWords" aria-hidden="true">
          <use :xlink:href="na.icon"></use>
        </svg>
        <span v-if="na.newOrder != ''">
          <el-badge :value="na.newOrder" class="item">
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
    </div>
    <div v-else>
      <div class="nav_header">
        LOGO
      </div>
      <div class="creat_new2">
        <el-button type="primary" title="New Order"> + </el-button>
      </div>
      <div class="nav_list2" 
        v-for="(na,index) in navArr" :key="na.id" 
        :class="active==index?'checked':''"
        @click="checkedList(na,index)">
        <span v-if="na.newOrder != ''" :title="na.navName">
           <el-badge :value="na.newOrder" class="item">
            <svg class="iconWords" aria-hidden="true">
              <use :xlink:href="na.icon"></use>
            </svg>
          </el-badge>
        </span>
        <span v-else :title="na.navName">
          <svg class="iconWords" aria-hidden="true">
            <use :xlink:href="na.icon"></use>
          </svg>
        </span>
      </div>
      <div class="nav_open" @click="openNav">
       <i class="el-icon-d-arrow-right"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
 props:{
   leftWidth:{
     type: Boolean
   },
 },
  data(){
    return{
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
    let vm = this
  },
  methods:{
    checkedList(item,i){
      let vm = this
      vm.active = i
    },
    //展开导航栏
    openNav(){
      this.$emit('openNav',true)
    }
  },
}
</script>
<style lang="less" scoped>
  .web_nav_box{ position: fixed; top: 0; bottom: 0; width: 100%; height: 100%; background: #00303F; 
    .nav_header{ height: 60px; color: #fff; text-align: center; line-height: 60px; font-size:24px; font-weight: 600;}
    .creat_new{ text-align: center; padding: 16px 0 8px;  margin-bottom: 32px;
      button{ width: 180px; }
    }
    .creat_new2{ text-align: center; padding: 16px 0 8px;  margin-bottom: 32px;
      button{ width: 60px; }
    }
    .nav_btn{ position: fixed; left: 58px; right: 58px; bottom: 96px; 
      .btn_style{ width: 180px; border-radius: 4px; border: 1px solid #1BB8FA; color: #fff; height: 40px; line-height: 40px; 
        text-align: center; cursor: pointer;
        &:nth-child(1){ margin-bottom: 14px; }
        &:hover{ background:#1BB8FA; }
      }
    }
    .nav_list{ margin-bottom: 8px; font-size: 16px; padding: 18px 21px; color:#95A0AA; box-sizing: border-box; cursor: pointer;
      .iconWords{ width: 24px; height: 24px; vertical-align: middle; }
    }
    .nav_list2{ margin-bottom: 8px; padding: 18px 21px;box-sizing: border-box; cursor: pointer; text-align: center;
      .iconWords{ width: 24px; height: 24px; vertical-align: middle;}
    }
    .checked{ background:#7dd9ff; color: #fff; }
    .nav_open{ border: 1px solid #f1f1f1 ; color: #f1f1f1; cursor: pointer; border-radius: 4px; height: 30px; line-height: 30px;
      width: 30px; margin-left: 25px; text-align: center; margin-top:8px;
      &:hover{ border-color: #5CB9FF;color: #5CB9FF; }
    }
  }
</style>