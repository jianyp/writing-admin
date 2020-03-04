<template>
  <div>
      <el-table
        :data="tableData"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="id"
          label="Order ID"
          align="center"
        >
          <template slot-scope="scope">
            <div class="orderid_col">
              <span>{{scope.row.id}}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="transaction"
          label="Transaction data"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="amount"
          label="Amount"
          align="center"
        >
        </el-table-column>
      </el-table>
  </div>
</template>
  <script>
    export default {
      props:{
        showTable:{type: Boolean},
        setArr:{ type: Object},
        loading:{type:Boolean},
        tableData:{type:Array}
      },
      data() {
        return {
         
        }
      },
      mounted(){

      },
      methods:{
        //checkOther
       
      },
    }
  </script>
  <style lang="less" scoped> 
    .orderid_col{ text-overflow: ellipsis; white-space: nowrap; overflow: hidden; color: #333333;
      >span{  border-bottom: 1px solid; cursor: pointer; font-weight: bold}
      >span:hover{  color: #6db33f; border-bottom: 1px solid; }
    }
  </style>
  <style>
    
  </style>