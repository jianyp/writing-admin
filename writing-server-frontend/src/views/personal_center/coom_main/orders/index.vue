<template>
  <div class="order_main">
    <div class="line_title">
      <div class="line_breadcrumb">
        Orders
      </div>
      <div class="line_dropdown">
        <el-dropdown trigger="click" class="dropdown_select" :class="filterFlag?'active':''" @visible-change="filterOpen">
          <span class="el-dropdown-link">
            Filter<i class="el-icon--right" :class="filterFlag?'el-icon-caret-top':'el-icon-caret-bottom '"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-picture">Picture</el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown trigger="click" class="dropdown_select" :class="setFlag?'active':''" @visible-change="setOpen">
          <span class="el-dropdown-link">
            Set<i class="el-icon--right" :class="setFlag?'el-icon-caret-top':'el-icon-caret-bottom '"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <div style="width:300px; padding: 0 16px;">
              <el-row :gutter="20">
                <el-col :span="12" v-for="(sa,index) in setArr.checkArr" :key="index">
                  <el-checkbox v-model="sa.checked">{{sa.name}}</el-checkbox>
                </el-col>
              </el-row>
              <div>
                <el-button type="primary" size="mini" plain>Confirm</el-button>
                <el-button size="mini" >Cancel</el-button>
                <el-button size="mini" >Default</el-button>
              </div>
            </div>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <main_body>
      <div class="order_search">
        <el-row :gutter="20">
          <el-col :lg="6" :md="6" :sm="12" :xs="24" class="search_col">
            <div class="select_name">Supject</div>
            <div class="sel_se_input">
              <el-select v-model="value" placeholder="Please choose">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :lg="6" :md="6" :sm="12" :xs="24" class="search_col">
            <div class="select_name">Deadline</div>
            <div class="sel_se_input">
              <el-select v-model="value" placeholder="Please choose">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :lg="6" :md="6" :sm="12" :xl="12" :xs="24" class="search_col">
            <div class="select_name">Search</div>
            <div class="sel_se_input">
              <el-input class="select_input" v-model="input" placeholder="Please enter content">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="order_tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="All orders" name="orders"></el-tab-pane>
          <el-tab-pane label="Unpaid" name="Unpaid"></el-tab-pane>
          <el-tab-pane label="Completed" name="Completed"></el-tab-pane>
          <el-tab-pane label="Cancelled" name="Cancelled"></el-tab-pane>
        </el-tabs>
      </div>
      <div>
        <order_table :showTable="showTable" @payingFn="payingFn" :setArr="setArr" :loading="loading"></order_table>
        <div class="block block_page">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="pageNum"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="1000"
            class="pagination_style">
          </el-pagination>
        </div>
      </div>
    </main_body>
    <comm_panel :showPanel="showPanel" @closePanel="closePanel">
      <order_details :ordersDetails="ordersDetails"></order_details>
    </comm_panel>
  </div>
</template>
<script>
import order_table from './order_table'
import order_details from './order_details'
export default {
  components:{
    order_table,
    order_details
  },
  data(){
    return{
      value:'',
      input:'',
      pageSize:10,
      pageNum:1,
      activeName:'orders',
      showPanel: false,
      showTable: true,
      checked: false,
      checkeds: false,
      filterFlag:false,
      setFlag:false,
      // loading:true,
      more:[
        { option:'Duplicate' },
        { option:'New orders with the same author' },
        { option:'Add writer to favorites' },
        { option:'Add writer to blacklist' }
      ],
      setArr:{
        total:null,
        checkArr:[
          // { checked:true , name:'Topic' , prop: 'Topic' },
          { checked:true , name:'Subject' , prop: 'subject' },
          { checked:true , name:'Order number' , prop: 'orderNumber' },
          { checked:true , name:'Deadline' , prop: 'deadline' },
          { checked:true , name:'Status' , prop: 'statusType' },
          { checked:false , name:'Writer’s ID' , prop: 'writerid' },
          { checked:true , name:'Price' , prop: 'price' },
        ],
        aaData:[
          {
            topic: "Immigrant Inflows, Native Outflows, and the are more things to describe",
            subject: 'Economics',
            orderNumber: '#20191205001',
            deadline: '23 Jul 2018, 04 PM',
            statusName: 'Waiting for payment',
            statusType: 0,
            price: '$450.39',
            bonus:'($0.8 bonus)',
            writerId:'a1a2a5s4d8wqe3',
            tableName:'Topic',
            more:[
              { option:'Duplicate' },
              { option:'New orders with the same author' },
              { option:'Add writer to favorites' },
              { option:'Add writer to blacklist' }
            ],
          },
          {
            topic: "Writer's Choice",
            subject: 'Economics',
            orderNumber: '#20191205001',
            deadline: '23 Jul 2018, 04 PM',
            statusName: 'Completed',
            statusType: 1,
            price: '$450.39',
            bonus:'($0.8 bonus)',
            writerId:'a1a2a5s4d8wqe3',
            tableName:'Subject',
            more:[
              { option:'Duplicate' },
              { option:'New orders with the same author' },
              { option:'Add writer to favorites' },
              { option:'Add writer to blacklist' }
            ],
          },
          {
            topic: "Immigrant Inflows, Native Outflows, and the...",
            subject: 'Economics',
            orderNumber: '#20191205001',
            deadline: '23 Jul 2018, 04 PM',
            statusName: 'Waiting for payment',
            statusType: 0,
            price: '$450.39',
            bonus:'($0.8 bonus)',
            writerId:'a1a2a5s4d8wqe3',
            tableName:'Order number',
            more:[
              { option:'Duplicate' },
              { option:'New orders with the same author' },
              { option:'Add writer to favorites' },
              { option:'Add writer to blacklist' }
            ],
          },
          {
            topic: "Writer's Choice",
            subject: 'Economics',
            orderNumber: '#20191205001',
            deadline: '23 Jul 2018, 04 PM',
            statusName: 'In progress',
            statusType: 2,
            price: '$450.39',
            bonus:'($0.8 bonus)',
            writerId:'a1a2a5s4d8wqe3',
            more:[
              { option:'Duplicate' },
              { option:'New orders with the same author' },
              { option:'Add writer to favorites' },
              { option:'Add writer to blacklist' }
            ],
          }
        ]
      },
      options: [
        {
          value: 'val1',
          label: 'Golden cake'
        }, {
          value: 'val2',
          label: 'Double skin milk'
        }
      ],
      ordersDetails:{},
    }
  },
  mounted(){
    // this.getTableData()
  },
  methods:{
    handleClick(tab, event) {
      console.log(tab.paneName);
    },
    payingFn(item){
      let vm = this
      vm.showPanel = !vm.showPanel
      vm.showTable = false
      vm.ordersDetails = item
      console.log('=============>>',item)
    },
    closePanel(b){
      this.showPanel = b
      this.showTable = !b
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.getTableData()
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pageNum = val;
      this.getTableData()
    },
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
    filterOpen(flag){
      this.filterFlag = flag;
    },
    setOpen(flag){
      this.setFlag = flag;
    }
  },
  
}
</script>
<style lang="less" scoped>
  .order_main{ position: relative; }
  .line_title{ border-bottom: 1px solid #e5e7ea; padding: 12px ;
    .line_breadcrumb{ font-size: 24px; float: left;
      >span{ color: #999; }
    }
    .line_dropdown{ float: right; 
      .dropdown_select{ border: 1px solid #DCDFE6; height: 40px; line-height: 40px ; width: 100px; text-align: center;color: #666; border-radius: 4px;font-weight: 700;transition: .3s}
      .dropdown_select.active{color:#fff;background: #379FEE}
    }
    &::after{ content: ''; display: block; clear: both; }
  }
  .order_search{
    .search_col{ margin-bottom: 16px; height: 40px ; position: relative;
      .select_name{ position:absolute; width: 60px; line-height: 40px; }
      .sel_se_input{ position:absolute; left: 70px; right: 16px ;
        .el-select{width: 100%;}
      }
    }
  }
  .order_tabs{
    .el-tabs{
      .el-tabs__header{
        .el-tabs__nav-wrap{
          .el-tabs__nav-scroll{
            .el-tabs__nav{
              .el-tabs__item{
                color: red;
                font-weight: 600;
              }
            }
          }
        }
      }
    }
  }
  .block_page{ text-align: center; margin: 16px 0 60px ;
      >.el-pagination{ padding: 0; }
    }
</style>
<style>

</style>

