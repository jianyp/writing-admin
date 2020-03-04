<template>
  <div>
    <div v-if="showTable">
      <el-table
        :data="setArr.aaData"
        v-loading="loading"
        style="width: 100%">
         <el-table-column label="Topic" min-width="260px">
          <template slot-scope="scope">
            <div class="topic_info">
              <el-popover
                placement="bottom"
                trigger="click"
                width="200"
                :content="scope.row.topic">
                <span slot="reference">{{scope.row.topic}}</span>
              </el-popover>
          </div>
          </template>
        </el-table-column>
        <el-table-column
          v-for="(ta,index) in setArr.checkArr"
          :key="index"
          :prop="ta.prop"
          :label="ta.name"
          v-if="ta.checked && ta.prop != 'statusType' && ta.prop != 'price' "
          min-width="160px">
        </el-table-column>
        <el-table-column
          v-for="(ta,index) in setArr.checkArr"
          :key="index"
          :prop="ta.prop"
          :label="ta.name"
          v-if="ta.checked && ta.prop == 'statusType'"
          min-width="160px">
          <template slot-scope="scope">
            <div class="status_info colorred" v-if="scope.row.statusType == 0">
              <span slot="reference">Waiting for payment</span>
            </div>
            <div class="status_info colorgreen" v-else-if="scope.row.statusType == 1">
              <span slot="reference">Completed</span>
            </div>                                                                  
            <div class="status_info coloryellow" v-else>
              <span slot="reference">In progress</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-for="(ta,index) in setArr.checkArr"
          :key="index"
          :prop="ta.prop"
          :label="ta.name"
          v-if="ta.checked && ta.prop == 'price'"
          min-width="160px">
          <template slot-scope="scope">
              <!-- ${{scope.row.price}}<span style="color: #6DB33F;">(${{scope.row.bonus}} bonus)</span> -->
              <span style="font-weight:bold;">{{scope.row.price}}</span><span style="color: #6DB33F;">{{scope.row.bonus}}</span>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="operation"
          width="150">
          <template slot-scope="scope">
            <!-- <el-button @click="payingFn(scope.row)" v-show="scope.row.status == 0" type="primary" size="small">Pay</el-button> -->
            <el-button @click="payingFn(scope.row)" type="primary" size="small">Pay</el-button>
            <el-popover
              placement="left-start"
              trigger="click">
              <div v-for="(o,index) in scope.row.more" :key="index" class="list_item" 
                :class="activeIndex == index ? 'list_item_active':''" @click="checkOther(o,index)">{{ o.option }}</div>
            <el-button type="primary" plain size="small" slot="reference">more</el-button>
            </el-popover>
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
        setArr:{ type: Object},
        loading:{type:Boolean}
      },
      data() {
        return {
          count: 5,
          activeIndex:null,
        }
      },
      mounted(){
        let vm = this
      },
      methods:{
        //checkOther
        checkOther(o,index){
          let vm = this
          vm.activeIndex = index
          console.log(o,index)
        },
        payingFn(item){
          this.$emit('payingFn',item)
        },
      },
    }
  </script>
  <style lang="less" scoped> 
    .block_page{ text-align: center; margin: 16px 0 60px ;
      >.el-pagination{ padding: 0; }
    }
    .topic_info{ text-overflow: ellipsis; white-space: nowrap; overflow: hidden; color: #333333;
      >span{  border-bottom: 1px solid; cursor: pointer; font-weight: bold}
      >span:hover{  color: #6db33f; border-bottom: 1px solid; }
    }
    .status_info{ border-radius: 13px; height: 26px; color: #333; text-align: center; line-height: 26px }
    .colorred{ border:1px solid #EC808D; color: #EC808D;}
    .colorgreen{ border:1px solid #6DB33F; color: #6DB33F;}
    .coloryellow{ border:1px solid #CB9E03; color: #CB9E03;}
    .list_item{ padding: 8px; box-sizing: border-box; cursor: pointer;
      &:hover{ background: #ECF5FF ; color: #379FEE; }    }
    .list_item_active{ background:#dbecfe ; color: #379FEE; }
  </style>
  <style>
    .block_page>.el-pagination>ul>li{ min-width: 30px; }
  </style>