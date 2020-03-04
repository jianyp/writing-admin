<template>
  <div class="order_main">
    <div class="line_title">
      <div class="line_breadcrumb">
        My writers
      </div>
    </div>
    <main_body>
      <div class="order_tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane v-for="item in tabs" :label="`${item.label} ( ${item.count} ) `" :name="item.name" :key="item.name"></el-tab-pane>
        </el-tabs>
      </div>
      <div>
        <write_table :showTable="showTable" @payingFn="payingFn" :writeData="tableData" :loading="loading"></write_table>
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
      <!-- <order_details :ordersDetails="ordersDetails"></order_details> -->
    </comm_panel>
  </div>
</template>
<script>
import write_table from './write_table'
// import order_details from './order_details'
export default {
  components:{
    write_table,
    // order_details
  },
  data(){
    return{
      pageSize:10,
      pageNum:1,
      activeName:'all',
      showPanel: false,
      showTable: true,
      tabs:[
        {label:"All",name:"all",count:"29" },
        {label:"Favorites",name:"favorites",count:"6"},
        {label:"BlackList",name:"blacklist",count:"1"}
      ],
      // loading:true,
      tableData:[
        {
          id:"2724158",
          order:{
            number:"3",
            orderDetails:[
              {topic:"Writer's ChoiseWriter's ChoiseWriter's ChoiseWriter's ChoiseWriter's ChoiseWriter's ChoiseWriter's Choise",status:"0",subject:"Economis",deadLine:"23 Jul 2019"},
              {topic:"Writer's Choise",status:"1",subject:"Economis",deadLine:"23 Jul 2019"},
              {topic:"Writer's Choise",status:"2",subject:"Economis",deadLine:"23 Jul 2019"}
            ]
          },
          subject:["Economics","English","Art"]
        },
        {
          id:"2724158",
          order:{
            number:"1",
            orderDetails:[
              {topic:"Writer's Choise",status:"0",subject:"Economis",deadLine:"23 Jul 2019"},
              {topic:"Writer's Choise",status:"1",subject:"Economis",deadLine:"23 Jul 2019"},
              {topic:"Writer's Choise",status:"2",subject:"Economis",deadLine:"23 Jul 2019"}
            ]
          },
          subject:["Economics","English","Art"]
        },
        {
          id:"2724158",
          order:{
            number:"2",
            orderDetails:[
              {topic:"Writer's Choise",status:"0",subject:"Economis",deadLine:"23 Jul 2019"},
              {topic:"Writer's Choise",status:"1",subject:"Economis",deadLine:"23 Jul 2019"},
              {topic:"Writer's Choise",status:"2",subject:"Economis",deadLine:"23 Jul 2019"}
            ]
          },
          subject:["Economics","English","Art"]
        }
      ]
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


