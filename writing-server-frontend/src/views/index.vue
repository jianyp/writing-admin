<template>
  <div class="pageView">
    <div class="contact_us" id="example-3" @click="show = !show">
      <i class="icon iconfont" :class="show?'iconic_close ':'iconic_consultation'"></i>
    </div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
      >
      <div v-if="show" class="contact_list">
        <!-- 全局联系飘窗 -->
        <ul>
          <li @click="dialogVisible = true">
            <svg class="iconWords" aria-hidden="true">
              <use xlink:href="#iconic_orders"></use>
            </svg>
            Get a call back
          </li>
          <li>
            <svg class="iconWords" aria-hidden="true">
              <use xlink:href="#iconic_orders"></use>
            </svg>
            Chat now
          </li>
          <li>
            <svg class="iconWords" aria-hidden="true">
              <use xlink:href="#iconic_orders"></use>
            </svg>
            Use Messenger
          </li>
          <li>
            <svg class="iconWords" aria-hidden="true">
              <use xlink:href="#iconic_orders"></use>
            </svg>
            Make a Skype call
          </li>
          <li>
            <svg class="iconWords" aria-hidden="true">
              <use xlink:href="#iconic_orders"></use>
            </svg>
            Send us an email
          </li>
        </ul>
        <div class="line"></div>
        <div class="tips">Give us a call (cost-free)</div>
        <ul>
          <li>
            <svg class="iconWords" aria-hidden="true">
              <use xlink:href="#iconic_orders"></use>
            </svg>
            1-800-380-2909
          </li>
          <li>
            <svg class="iconWords" aria-hidden="true">
              <use xlink:href="#iconic_orders"></use>
            </svg>
            44-800-086-9055
          </li>
          <li>
            <svg class="iconWords" aria-hidden="true">
              <use xlink:href="#iconic_orders"></use>
            </svg>
            61-386-477-477
          </li>
        </ul>
      </div> 
    </transition>

    <!-- call back dialog -->
    <div class="dialog">
      <el-dialog
      :visible.sync="dialogVisible"
      :width="dialogWidth"
      >
        <div class="content">
          <div class="title">Give me a Call Back</div>
          <hr>
          <div class="content-main">
            <div class="tips">
              Complete the form and we'll give you a call in a period of 15 minutes.
            </div>
            <div class="explain-title">What will the call be about ?</div>
            <el-form ref="form" :model="form">
              <el-form-item>
                <el-select v-model="form.region" placeholder="Choose the reason of your request">
                  <el-option label="reson1" value="shanghai"></el-option>
                  <el-option label="reson2" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-row :gutter="40">
                  <el-col :lg="12" :md="24"><el-input placeholder="Your Name" v-model="form.name"></el-input></el-col>
                  <el-col :lg="12" :md="24">
                    <el-input placeholder="Your Phone number" v-model="form.phone">
                      <template slot="prepend">+86</template>
                    </el-input>
                  </el-col>
                </el-row>
              </el-form-item>
              <div class="explain-title">Anything you want us to know before the call ?</div>
              <el-input type="textarea" v-model="form.other" rows="4" maxlength="1000" show-word-limit placeholder="Your details in under 1000 symbols"></el-input>
            </el-form>
            <hr>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">Close</el-button>
          <el-button type="primary" @click="dialogVisible = false">Give me a Call</el-button>
        </span>
      </el-dialog>
    </div>
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
      dialogVisible:false,
      form:{},
      dialogWidth:"30%"
    }
  },
  mounted(){
    this.setDialogWidth()
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
    setDialogWidth(){
      let vm = this
      let val = document.documentElement.clientWidth
      if(val<768){
        vm.dialogWidth = "80%"
      }else{
        vm.dialogWidth = "30%"
      }
      // window.onresize = ()=>{
      //   let val = document.documentElement.clientWidth
      //   if(val<768){
      //     vm.dialogWidth = "80%"
      //   }else{
      //     vm.dialogWidth = "30%"
      //   }
      // }
    }
  },
}
</script>
<style lang="less">
  .pageView{ margin-bottom: 0; position:relative; height: 100%;
    .contact_us{ position:fixed; right: 15px; bottom: 15px; height: 48px; width: 48px; border-radius: 50%; color: #fff; cursor: pointer;
      text-align: center; line-height: 50px; background: #6DB33F; z-index: 1001; 
      .iconfont{font-size: 30px;transition: .3s}
      .iconic_close{font-size: 20px;}
      }
     
    .contact_list{ position: fixed ; width: 220px; height: 340px; right: 10px ; bottom: 78px; padding: 20px 0; box-sizing: border-box; background: #fff;
     border-radius: 8px; box-shadow: 0 0 15px #C3CAD9; z-index: 999;overflow: hidden;}
    
  }
  .contact_list ul{
    list-style: none;
    margin: 0;
    padding: 0
  }
  .contact_list ul li{
    font-weight: bold;
    padding-bottom: 4px;
    padding-left: 20px;
    cursor: pointer;
  }
  .contact_list .tips{
    text-align: center;
    color: gray;
    margin-bottom: 10px;
  }
  .dialog{
    .content{
      .explain-title{margin-bottom: 10px;}
      .title{
        text-align: center;
        font-weight: bold;
      }
      .content-main{
        padding:0 20px;
        .tips{
          background: #d9edf6;
          padding: 8px 24px;
          text-align: center;
          letter-spacing:1px;
          margin-bottom: 20px;
        }
      }
    }
  }
  // 重置弹出层样式
  .dialog .el-dialog__headerbtn{top:-19px;right: -34px;font-size: 30px;}
  .dialog .el-dialog__headerbtn .el-dialog__close{color: #fff;font-weight: bold}
  .dialog .el-dialog{border-radius: 5px;}
  .dialog .el-dialog__headerbtn .el-dialog__close:hover{color:#ccc}
  .dialog .el-select{width: 100%;}
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
  .iconWords{ width: 28px; height: 28px; vertical-align: middle;border-radius: 100%;margin-right: 6px;}
  .line{height: 1px;border-top: 1px solid #ccc;margin: 5px 0;}

</style>