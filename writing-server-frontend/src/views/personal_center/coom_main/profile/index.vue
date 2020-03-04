<template>
  <div class="order_main">
    <div class="line_title">
      <div class="line_breadcrumb">Personal Center</div>
    </div>
    <main_body>
      <div class="order_tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane v-for="item in tabs" :label="item.label" :name="item.name" :key="item.name"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="account" v-if="activeName == 'account'">
        <div class="top-tips">
          <p>Personal information</p>
          <p>Update your name,phone number,and emails.</p>
        </div>
        <hr class="line" />
        <el-row>
          <el-col :lg="10" :md="10" :xs="24">
            <el-form
              :model="personalInformationForm"
              :rules="personalInformationFormRules"
              label-position="left"
              ref="ruleForm"
              label-width="50%"
              class="form-information"
            >
              <el-form-item label="Name (or nickname)" required>
                <el-input v-if="editForm" v-model="personalInformationForm.name"></el-input>
                <p v-else>{{personalInformationForm.name}}</p>
              </el-form-item>
              <el-form-item label="Client ID" required>
                <el-input v-if="editForm" v-model="personalInformationForm.clientId"></el-input>
                <p v-else>{{personalInformationForm.clientId}}</p>
              </el-form-item>
              <el-form-item label="Email" prop="email">
                <el-input v-if="editForm" v-model="personalInformationForm.email"></el-input>
                <p v-else>{{personalInformationForm.email}}</p>
              </el-form-item>
              <el-form-item label="Phone Number" required>
                <el-input v-if="editForm" v-model="personalInformationForm.phone"></el-input>
                <p v-else>{{personalInformationForm.phone}}</p>
              </el-form-item>
              <el-form-item label="Studying at" prop="school">
                <el-select v-if="editForm" v-model="personalInformationForm.school" placeholder>
                  <el-option label="options1" value="shanghai"></el-option>
                  <el-option label="options2" value="beijing"></el-option>
                </el-select>
                <p v-else>
                  <span v-if="personalInformationForm.school == ''" style="color:#99A9BF">Choose</span>
                  <span v-else>{{personalInformationForm.school}}</span>
                </p>
              </el-form-item>
              <el-form-item label="Studying for degree" prop="degree">
                <el-select v-if="editForm" v-model="personalInformationForm.degree" placeholder>
                  <el-option label="options1" value="shanghai"></el-option>
                  <el-option label="options2" value="beijing"></el-option>
                </el-select>
                <p v-else>
                  <span v-if="personalInformationForm.degree == ''" style="color:#99A9BF">Choose</span>
                  <span v-else>{{personalInformationForm.degree}}</span>
                </p>
              </el-form-item>
              <el-form-item label="Graduation year" prop="graduation">
                <el-date-picker
                  v-if="editForm"
                  v-model="personalInformationForm.graduation"
                  type="month"
                  placeholder
                >

                </el-date-picker>
                <p v-else>
                  <span v-if="personalInformationForm.graduation == ''" style="color:#99A9BF">Choose</span>
                  <span v-else>{{personalInformationForm.graduation}}</span>
                </p>
              </el-form-item>
              <el-form-item label="Time Zone" prop="zone">
                <el-select v-if="editForm" v-model="personalInformationForm.zone" placeholder>
                  <el-option label="options1" value="shanghai"></el-option>
                  <el-option label="options2" value="beijing"></el-option>
                </el-select>
                <p v-else>
                  <span v-if="personalInformationForm.zone == ''" style="color:#99A9BF">Choose</span>
                  <span v-else>{{personalInformationForm.zone}}</span>
                </p>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :lg="14" :md="24" :xs="24">
            <div style="padding-left:20px">
              <span v-if="!editForm">
                <el-button @click="edit()">Edit</el-button>
              </span>
              <span v-else>
                <el-button @click="save()">Save</el-button>
                <el-button @click="editForm=false">cancel</el-button>
              </span>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- password -->
      <div class="password" v-if="activeName == 'password'">
        <div class="top-tips">
          <p>Password</p>
          <p>Change your password: make it totally new or stronger.</p>
        </div>
        <hr class="line" />
        <el-row>
          <el-col :lg="10" :md="24" :xs="24">
            <el-form
              :model="personalInformationForm"
              :rules="personalInformationFormRules"
              label-position="left"
              ref="ruleForm"
              label-width="50%"
              class="form-information"
            >
              <el-form-item label="Password">
                <el-input
                  v-if="editForm"
                  :type="showPassword?'text':'password'"
                  v-model="personalInformationForm.password"
                >
                  <i slot="suffix" class="el-icon-view" @click="showPsd()"></i>
                </el-input>
                <p v-else>{{personalInformationForm.password}}</p>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :lg="14" :md="14" :xs="24">
            <div style="padding-left:20px">
              <span v-if="!editForm">
                <el-button @click="edit()">Edit</el-button>
              </span>
              <span v-else>
                <el-button @click="save()">Save</el-button>
                <el-button @click="editForm=false">cancel</el-button>
              </span>
            </div>
          </el-col>
        </el-row>
      </div>
    </main_body>
    <comm_panel :showPanel="showPanel" @closePanel="closePanel">
      <!-- <order_details :ordersDetails="ordersDetails"></order_details> -->
    </comm_panel>
  </div>
</template>
<script>
// import write_table from './write_table'
// import order_details from './order_details'
export default {
  components: {
    // write_table,
    // order_details
  },
  data() {
    return {
      pageSize: 10,
      pageNum: 1,
      activeName: "account",
      showPanel: false,
      showTable: true,
      editForm: false,
      tabs: [
        { label: "Account", name: "account" },
        { label: "Password", name: "password" },
        { label: "Payment cards", name: "paymentcards" }
      ],
      personalInformationForm: {
        name: "Tom",
        clientId: "20200225",
        email: "24051295@qq.com",
        phone: "+86 13112113512",
        school: "",
        degree: "",
        graduation: "",
        zone: "",
        password: "123456"
      },
      personalInformationFormRules: {
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ]
      },
      showPassword: false
      // loading:true,
    };
  },
  mounted() {
    // this.getTableData()
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab.paneName);
    },
    payingFn(item) {
      let vm = this;
      vm.showPanel = !vm.showPanel;
      vm.showTable = false;
      vm.ordersDetails = item;
      console.log("=============>>", item);
    },
    closePanel(b) {
      this.showPanel = b;
      this.showTable = !b;
    },
    edit() {
      this.editForm = true;
    },
    save() {
      this.editForm = false;
    },
    showPsd() {
      this.showPassword = !this.showPassword;
    }
    // getTableData(){
    //   let vm = this
    //   let params = {
    //     userid:JSON.parse(localStorage.getItem('userInfo')).usersid,
    //     pageNum:vm.pageNum,
    //     pageSize:vm.pageSize
    //   }
    //   this.$axios.get('/order/userorder',{params:params}).then(res=>{
    //     vm.loading=false
    //     let data = res.data.data;
    //     data.forEach(item=>{
    //       item.more = vm.more
    //     })
    //     vm.setArr.aaData = data;
    //     vm.setArr.total = res.data.total;
    //   }).catch(err=>{

    //   })
    // }
  }
};
</script>
<style lang="less" scoped>
.order_main {
  position: relative;
}
.line_title {
  border-bottom: 1px solid #e5e7ea;
  padding: 12px;
  .line_breadcrumb {
    font-size: 24px;
    float: left;
    > span {
      color: #999;
    }
  }
  .line_dropdown {
    float: right;
    .dropdown_select {
      border: 1px solid #dcdfe6;
      height: 40px;
      line-height: 40px;
      width: 100px;
      text-align: center;
      color: #666;
      border-radius: 4px;
      font-weight: 700;
      transition: 0.3s;
    }
    .dropdown_select.active {
      color: #fff;
      background: #379fee;
    }
  }
  &::after {
    content: "";
    display: block;
    clear: both;
  }
}
.top-tips {
  border-left: 2px solid #c72c48;
  padding-left: 20px;
  margin-top: 20px;
  & > p:first-child {
    font-size: 24px;
    font-weight: 700;
  }
}
.line {
  width: 80%;
  margin: 20px 0 20px 20px;
}
.form-information {
  padding: 0 20px;
}
.form-information p {
  font-weight: bold;
  margin: 0;
}
</style>
<style>
.form-information .el-select {
  width: 100%;
}
.form-information .el-form-item__label {
  font-weight: 400;
  color: #99a9bf;
}
.el-input__suffix {
  right: 12px;
  font-size: 18px;
  cursor: pointer;
}
.el-input__suffix:hover i {
  color: #6db33f;
}
.form-information .el-date-editor.el-input{width: 100%}
.account .el-input__prefix{display: none}
</style>

