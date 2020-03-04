<template>
  <div class="order_main">
    <div class="line_title">
      <div class="line_breadcrumb">Member</div>
    </div>
    <main_body>
      <div class="order_tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane v-for="item in tabs" :label="item.label" :name="item.name" :key="item.name"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="loyalty"  v-if="activeName=='loyaltyprogram'">
        <el-row :gutter="20">
          <el-col :lg="8" :md="8" :xs="24">
            <div class="vip-card">
              <div class="my-points">My points：{{points}}</div>
              
              <div class="vip-card-content">
                <img src="../../../img/img_leve.png" alt="">
                <div class="vip-card-text">
                  <p>Level  {{level}}</p>
                  <p>registration</p>
                </div>
              </div>
              <img class="vip-img" src="../../../img/img_vip.png" alt="">
            </div>
          </el-col>
          <el-col :lg="12" :md="12" :xs="24">
            <div class="rewards">
              <p>Loyalty rewards</p>
              <p>This is our beneficial Loyalty program. Enjoy getting points from each order and moving to the higher level. It gives you rewards: both one-time and life-time discounts, free pages, or extras like VIP customer service, Plagiarism report, TOP writer, etc.</p>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :lg="20" :md="20" :xs="24">
            <div class="steps-box">
              <steps></steps>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="bonus" v-if="activeName=='bonus'">
        <el-row :gutter="20">
          <el-col :lg="12" :md="12" :xs="24">
            <div class="rewards">
              <p>Your bonuses</p>
              <p>Hey, Yuheng! This place will always store your bonus, if any. 5%, 10%, or 15% is what you can get when placing another order .</p>
            </div>
          </el-col>
          <el-col :lg="8" :md="8" :xs="24">
            <div class="bonus-card">
              <p>${{bonus}}</p>
              <p>my bonus</p>
              <button>Use bonus</button>
              <img class="bonus-img" src="../../../img/img_coin.png" alt="">
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col  :lg="20" :md="20" :xs="24">
            <div>
              <div class="bonus-title">
                How to get bonus?
              </div>
            </div>
            <div>
              <div class="bonus-title">
                Bonus history
                <span>Total:{{historyTotal}}</span>
              </div>
              <history_table :tableData="historyData"></history_table>
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
import steps from './steps'
import history_table from './history_table'
export default {
  components: {
    // write_table,
    // order_details
    steps,
    history_table
  },
  data() {
    return {
      pageSize: 10,
      pageNum: 1,
      activeName: "loyaltyprogram",
      showPanel: false,
      showTable: true,
      points:10,
      level:1,
      bonus:45.39,
      historyTotal:45.39,
      tabs: [
        { label: "Loyalty program", name: "loyaltyprogram" },
        { label: "bonus", name: "bonus" },
      ],
      historyData:[
        {id:"20200225001",transaction:"Feb 25, 2020 15:57 PM ",amount:"+2.6"},
        {id:"20200225001",transaction:"Feb 25, 2020 15:57 PM ",amount:"+2.6"},
        {id:"20200225001",transaction:"Feb 25, 2020 15:57 PM ",amount:"+2.6"}
      ]
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
.vip-card{
  background: linear-gradient(90deg,rgba(236,208,156,1),rgba(210,176,115,1));
  width:100%;
  border-radius: 14px;
  overflow: hidden;
  position: relative;
  padding: 40px 20px 30px 20px;
  .my-points{
    position: absolute;
    right: 0;
    top: 0;
    padding: 15px 22px;
    background: #BF995B;
    font-size: 16px;
    color: white;
    font-weight: bold;
    border-radius: 0 8px;
    z-index: 2;
  }
  .vip-img{
    position: absolute;
    right: 20px;
    bottom: 0;
    width: 40%;
  }
  .vip-card-content{ 
    display: flex;
    &>div{margin-left: 20px;
      p{color: #AE823D;font-weight: bold;}
      &>p:first-child{
        font-size: 30px;
      }
    }
  }
}
.rewards{
  padding: 20px 40px;
  border-radius: 14px;
  border: 1px solid #EAECF0;
  &>p:first-child{font-size: 24px;color: #333333;margin-bottom: 17px;}
}
.steps-box{box-shadow: 0 0 10px #999;padding: 34px 0;border-radius: 12px;margin-top: 20px;}

.bonus{
  .bonus-card{
    padding: 28px 30px;
    border-radius: 14px;
    background: #00303F;
    position: relative;
    color: #fff;
    &>p:first-child{font-size: 30px;margin: 0;line-height: 1em;}
    &>p:nth-child(2){color: #C0C4CC;margin-bottom: 17px;}
    .bonus-img{
      position: absolute;
      right: 50px;
      top: 28px;
    }
    button{background: #379FEE;border-radius: 4px;border: none;outline: none;padding: 9px 15px;font-size: 16px;font-weight: bold}
  }
  .rewards{padding: 30px 40px;}
  .bonus-title{font-size: 24px;color: #333;padding:2px 10px;border-left: 2px solid #C72C48;margin: 30px 0 30px 0;
    &>span{float: right;font-weight: bold;}
  }
}
</style>
<style>

</style>

