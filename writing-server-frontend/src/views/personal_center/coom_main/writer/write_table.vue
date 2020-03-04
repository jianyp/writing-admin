<template>
  <div class="writer">
    <div v-if="showTable">
      <el-table
        :data="writeData"
        v-loading="loading"
        style="width: 100%">
        <el-table-column
          label="Writer's ID"
          prop="id"
          width="200">
        </el-table-column>
        <el-table-column
          label="Order number"
          prop="order.number"
          width="260">
          <template slot-scope="scope">
            {{scope.row.order.number}} <span v-if="scope.row.order.number<2">order</span><span v-else>orders</span>
          </template>
        </el-table-column>
        <el-table-column
          label="Subjects"
          prop="subject">
          <template slot-scope="scope">
            <span class="subject-tag" v-for="(item,i) in scope.row.subject" :key="i">{{item}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="Action"
          width="280"
        >
        <el-button size="small" round icon="el-icon-star-off">Favorite</el-button>
        <el-button size="small" round icon="el-icon-user">BlackList</el-button>
        </el-table-column>
        <el-table-column type="expand" >
          <template slot-scope="props">
            <el-row :gutter="10">
              <el-col :span="7" v-for="(item,i) in props.row.order.orderDetails" :key="i">
                <div class="order-card" >
                  <i class="el-icon-arrow-right"></i>
                  <p class="order-title">{{item.topic}}</p>
                  <p class="order-subject">{{item.subject}}</p>
                  <p class="order-status">
                    <span v-if="item.status==0" class="colorred">Waiting for payment</span>
                    <span v-if="item.status==1" class="colorgreen">Completed</span>
                    <span v-if="item.status==2" class="coloryellow">In progress</span>
                    <span>Deadline:{{item.deadLine}}</span></p>
                </div>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
  <script>
    export default {
      props:{
        showTable:{type: Boolean},
        writeData:{ type: Array},
        loading:{type:Boolean}
      },
      data() {
        return {
          
        }
      },
      mounted(){
        let vm = this
      },
      methods:{
     
      },
    }
  </script>
  <style lang="less" scoped> 
  .subject-tag{display: inline-block;background: #F4F4F5;border: 1px solid #E9E9EB;border-radius: 4px;padding: 3px 8px;margin-right: 8px;color: #909399;white-space: nowrap;}
  .order-card{
    transition: .3s;
    position: relative;
    cursor: pointer;
    border-radius: 12px;
    border: 1px solid #EAECF0;
    padding: 20px 20px 0 20px;
    &:hover{
      box-shadow: 0 0 5px #ccc;
      margin-top: -5px;
    }
    &>p{margin-bottom: 18px}
    .el-icon-arrow-right{position: absolute;right: 20px;font-size: 18px;font-weight: bold;color: #999}
    .order-title{font-weight: bold;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;padding-right: 20px;}
    .order-subject{
      color: #999999
    }
    .order-status{
      span{display: inline-block;}
      &>span:first-child{
        padding: 1px 10px;
        border-radius: 13px;
      }
      &>span:last-child{
        float: right;
        padding: 1px 0px;
        color: #999999
      }
      .colorred{ border:1px solid #EC808D; color: #EC808D;}
      .colorgreen{ border:1px solid #6DB33F; color: #6DB33F;}
      .coloryellow{ border:1px solid #CB9E03; color: #CB9E03;}
    }
  }
  </style>
  <style>
   .writer .el-button i{font-weight: bold;font-size: 16px;}
   .writer .el-table__expanded-cell[class*=cell]{
     padding: 20px 0
   }
  </style>