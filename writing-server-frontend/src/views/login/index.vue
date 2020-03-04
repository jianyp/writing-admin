<template>
  <div class="login_page" :class="isMobile ? 'webpage':''">
    <div class="login_logo_line">LOGO REGION</div>
    <div class="login_body">
      <el-row :gutter="10" type="flex" class="row-bg" justify="space-around">
        <el-col :xs="22" :sm="12" :md="10" :lg="8" :xl="8">
          <div class="login_title">
            <h1>Welcom back!</h1>
            <h4>Log in to continue</h4>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10" type="flex" class="row-bg" justify="space-around">
        <el-col :xs="22" :sm="12" :md="10" :lg="8" :xl="8">
          <div class="login_box">
            <div class="login_input">
              <div class="input_name">Email</div>
              <el-input v-model="emailInp" placeholder="Type your email"></el-input>
            </div>
            <div class="login_input">
              <div class="input_name">Password</div>
              <el-input
                v-model="pswInp"
                placeholder="Type your password"
                type="password"
                @keyup.enter.native="loginFn"
              ></el-input>
            </div>
            <div v-show="tips" class="err-tips animated shake">
              <p>e-mail or password is wrong !</p>
            </div>
            <div class="login_check_line">
              <div class="remember_box">
                <el-checkbox v-model="checked">Remember me</el-checkbox>
              </div>
              <div class="forgot_box">Forgotget?</div>
            </div>
            <div>
              <el-button style="width: 100%;" type="success" @click="loginFn">Log In</el-button>
            </div>
            <div>
              <el-button
                style="width: 100%; margin-top: 16px;"
                type="primary"
                @click="backHome"
              >goBack</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { Login, register } from "@/api/api.js";
export default {
  data() {
    return {
      isMobile: false,
      emailInp: "",
      pswInp: "",
      checked: false,
      tips: false,
    };
  },
  mounted() {
    // let vm = this
    this.rememberUser();
  },
  methods: {
    backHome() {
      let vm = this;
      // vm.$emit('backHome',false)
      this.$router.push({ path: "/" });
    },
    loginFn() {
      let vm = this;
      let params = {};
      params.username = this.emailInp;
      params.password = this.pswInp;
      // if (this.emailInp && this.pswInp) {
      //   this.$axios
      //     .post("/login", params)
      //     .then(res => {
      //       if (res.data.code === 200) {
      //         vm.tips = false;
      //         localStorage.setItem("userMsg",JSON.stringify(params));
      //         localStorage.setItem("userInfo", JSON.stringify(res.data.user));
      //         localStorage.setItem("token", res.data.token);
      //         this.$router.push({ path: "/personal_center" });
      //       } else {
      //         vm.tips = true;
      //       }
      //     })
      //     .catch(err => {
      //       console.log(err)
      //       if (err) {
      //         // this.$message.error('Oops ! Something went wrong and it was probably our fault.Please try again later or report the problem to us');
      //         this.$message({
      //           duration: 6000,
      //           type: "error",
      //           message:
      //             "Oops ! Something went wrong and it was probably our fault.Please try again later or report the problem to us"
      //         });
      //       }
      //     });
      // }else{
      //   vm.tips = true;
      // }
      this.$router.push({ path: "/personal_center" });
    },
    rememberUser() {
      if (localStorage.getItem("rememberUser")) {
        this.checked = true;
        this.emailInp = JSON.parse(localStorage.getItem("userMsg")).username;
        this.pswInp = JSON.parse(localStorage.getItem("userMsg")).password;
      }
    }
  },
  watch: {
    checked() {
      if (this.checked) {
        localStorage.setItem("rememberUser", true);
      } else {
        localStorage.removeItem("rememberUser");
      }
    }
  }
};
</script>
<style scoped>
.login_page {
  position: relative;
}
.login_logo_line {
  height: 50px;
  line-height: 50px;
  font-size: 24px;
  color: #fff;
  font-weight: 700;
  padding: 0 16px;
  background: #00303f;
}
.login_body {
  position: fixed;
  background: #f1f1f1;
  left: 0;
  right: 0;
  top: 50px;
  bottom: 0;
  background: #f1f1f1;
}
.login_title {
  margin-top: 50px;
}
.login_title > h1 {
  font-weight: 700;
  color: #333;
}
.login_title > h4 {
  color: #bababa;
}
.login_title > h1,
.login_title > h4 {
  text-align: center;
}
.login_box {
  width: 100%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 8px #c3cad9;
  margin-top: 50px;
  padding: 16px;
  box-sizing: border-box;
}
.login_input {
  margin-bottom: 16px;
}
.login_check_line {
  margin-bottom: 32px;
}
.remember_box {
  float: left;
}
.forgot_box {
  float: right;
  color: #6db33f;
  cursor: pointer;
}
.login_check_line::after {
  content: "";
  clear: both;
  display: block;
}
.input_name {
  color: #c4c4c4;
  margin-bottom: 4px;
}
.err-tips {
  color: red;
}
</style>