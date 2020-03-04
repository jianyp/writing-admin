<template>
  <div class="order_main">
    <div class="line_title">
      <div class="line_breadcrumb">
        <span>Orders/</span>Details
      </div>
      <div class="line_dropdown">
        <el-dropdown trigger="click" class="dropdown_select" :class="actionFlag?'active':''" @visible-change="actionOpen">
          <span class="el-dropdown-link">
            Actions
            <i class="el-icon--right" :class="actionFlag?'el-icon-caret-top':'el-icon-caret-bottom '"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-picture">Picture</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <main_body>
      <div class="steps_line">
        <el-steps :active="active" finish-status="success">
          <el-step description="Waiting for payment"></el-step>
          <el-step description="Writer selection"></el-step>
          <el-step description="In progress"></el-step>
          <el-step description="Preview"></el-step>
          <el-step description="All done"></el-step>
        </el-steps>
      </div>
      <div class="orders_details">
        <div class="order_name">
          <span>Order:</span>
          {{ordersDetails.ordernumber}}
        </div>
        <div class="order_topic">
          <span>Topic:</span>
          {{ordersDetails.topic}}
        </div>
      </div>
      <div class="details_collapse">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="Details" name="first"></el-tab-pane>
          <el-tab-pane label="Messages" name="second"></el-tab-pane>
          <el-tab-pane label="Files" name="third"></el-tab-pane>
        </el-tabs>
        <!-- Details -->
        <div class="details" v-if="activeName == 'first'">
          <el-row :gutter="40">
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
              <div class="details-border">
                <el-collapse v-model="activeNames" accordion>
                  <el-collapse-item name="1">
                    <template slot="title">Order details</template>
                    <el-row :gutter="20" class="details_row">
                      <el-col :xs="24" :sm="6" :md="6" :lg="4">
                        <div class="details_label">Subject:</div>
                      </el-col>
                      <el-col :xs="24" :sm="16" :md="18" :lg="20">
                        <div class="details_info">English</div>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20" class="details_row">
                      <el-col :xs="24" :sm="6" :md="6" :lg="4">
                        <div class="details_label">Topic:</div>
                      </el-col>
                      <el-col :xs="24" :sm="16" :md="18" :lg="20">
                        <div class="details_info">
                          How the behavioral economics impact the investment of education?
                        </div>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20" class="details_row">
                      <el-col :xs="24" :sm="6" :md="6" :lg="4">
                        <div class="details_label">Academic Level:</div>
                      </el-col>
                      <el-col :xs="24" :sm="16" :md="18" :lg="20">
                        <div class="details_info">Professional</div>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20" class="details_row">
                      <el-col :xs="24" :sm="6" :md="6" :lg="4">
                        <div class="details_label">Type of service:</div>
                      </el-col>
                      <el-col :xs="24" :sm="16" :md="18" :lg="20">
                        <div class="details_info">Writing from scratch</div>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20" class="details_row">
                      <el-col :xs="24" :sm="6" :md="6" :lg="4">
                        <div class="details_label">Type of paper:</div>
                      </el-col>
                      <el-col :xs="24" :sm="16" :md="18" :lg="20">
                        <div class="details_info">Research paper</div>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20" class="details_row">
                      <el-col :xs="24" :sm="6" :md="6" :lg="4">
                        <div class="details_label">Paper Format:</div>
                      </el-col>
                      <el-col :xs="24" :sm="16" :md="18" :lg="20">
                        <div class="details_info">MLA</div>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20" class="details_row">
                      <el-col :xs="24" :sm="6" :md="6" :lg="4">
                        <div class="details_label">Additional Materials:</div>
                      </el-col>
                      <el-col :xs="24" :sm="16" :md="18" :lg="20">
                        <div class="details_info">Not needed</div>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20" class="details_row">
                      <el-col :xs="24" :sm="6" :md="6" :lg="4">
                        <div class="details_label">Price:</div>
                      </el-col>
                      <el-col :xs="24" :sm="16" :md="18" :lg="20">
                        <div class="details_info">$62</div>
                      </el-col>
                    </el-row>
                  </el-collapse-item>
                  <el-collapse-item title="Paper details">
                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                  </el-collapse-item>
                  <el-collapse-item title="Payment">
                    <div>简化流程：设计简洁直观的操作流程；</div>
                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                  </el-collapse-item>
                </el-collapse>
              </div>  
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="6">
              <div class="detail-card">
                <div class="card-head">
                  <p>price:</p>
                  <p>$450.39</p>
                  <button>Pay Now</button>
                </div>
                <div class="card-content">
                  <p>
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#iconic_heart"></use>
                    </svg>
                    Additional services
                  </p>
                  <div class="card-content-item" v-for="item in payList" :key="item.option" :class="item.pay?'active':''"> 
                    <span>{{item.option}}</span>
                    <span class="iconfont iconic_check"></span>
                    <span>{{item.price}}</span>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- Message -->
        <div class="msg animated " v-else-if="activeName == 'second'">
          <div class="msg-view">
            <div v-for="(item,i) in msgList" :key="i">
              <p class="msg-date">{{item.date}}</p>
              <div class="msg-item" v-for="(msg,i) in item.msg" :key="i">
                <div class="messages-head">
                  <div class="sys-head" v-if="msg.sendId=='Support'">
                    <i class="iconfont iconic_consultation"></i>
                  </div>
                  <img v-else src="~@/views/img/img_head.png" alt />
                </div>
                <div class="msg-content">
                  <p>{{msg.sendId}}</p>
                  <p>{{msg.content}}</p>
                </div>
                <div class="msg-time">02:24 PM</div>
              </div>
            </div>
          </div>
          <div class="msg-send">
            <div class="iconfont iconic_files"></div>
            <input type="text" placeholder="messages..." />
            <button>Send</button>
          </div>
        </div>
        <!-- Files -->
        <div class="files animated fadeIn" v-else>
          <div class="received-files">
            <div class="files-head">
              <div class="divider"></div>
              <span>Received Files ({{fileCount || 0}})</span>
            </div>
            <el-table v-if="fileTable && fileTable.length>0" :data="fileTable">
              <el-table-column
                prop="filename"
                label="File"
                >
                <template slot-scope="scope">
                  <span style="font-weight:bold">{{scope.row.filename}}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="date"
                label="Date">
              </el-table-column>
              <el-table-column
                prop="filesize"
                label="FileSize"
                >
              </el-table-column>
              <el-table-column
                label="Action">
                <el-button type="primary" plain>DownLoad</el-button>
              </el-table-column>
            </el-table>
            <div v-else class="re-file-empty"></div>
          </div>
          <div class="my-files">
            <div class="files-head">
              <div class="divider"></div>
              <span>My Files ({{fileCount || 0}})</span>
              <el-upload
                :action="upLoad()"
                :on-change="handleChange"
                multiple
                :on-success="upLoadSuccess"
                :show-file-list="flag"
                :file-list="fileList"
              >
                <el-button type="primary">
                  <i class="iconfont iconic_upload"></i> Upload
                </el-button>
              </el-upload>
            </div>
            <el-table v-if="myFileTable&&myFileTable.length>0"></el-table>
            <div v-else class="my-file-empty"></div>
          </div>
        </div>
      </div>
    </main_body>
  </div>
</template>
<script>
export default {
  props: {
    ordersDetails: {
      type: Object
    }
  },
  data() {
    return {
      active: 0,
      activeName: "first",
      activeNames: ["1"],
      fileList: [],
      fileTable:[
        {filename:"immigration.docx",filesize:"23KB",date:"Jul 26,2019 01:00PM"},
        {filename:"immigration.docx",filesize:"23KB",date:"Jul 26,2019 01:00PM"}
      ],
      myFileTable:[],
      fileCount:null,
      flag: false,
      actionFlag:false,
      msgList: [
        {
          date: "July 22,2019",
          msg: [
            {
              sendId: "Support",
              img: "",
              content:
                "Dear Yuheng, We are glad to tell you that the writer has completed your assignment. The preview file with watermarks is now available in the Files section of the order. Please check it and either approve the order to receive the final file, or send it back for revision providing detailed comments and a new deadline. The perfect paper needs to be proofread by several people. Moreover, an official proof of originality will always come in handy. Add our two extras: Editor's Check and Plagiarism Report to make sure your paper is polished to perfection. If you have any questions, feel free to contact us 24/7. Best Regards, WriteMyPapers.org Support Team"
            },
            {
              sendId: "Tom",
              img: "",
              content:
                "hi it is a literature review, i uploaded the paper what you need to read. please write down more critical thinking."
            },
            {
              sendId: "Jack",
              img: "",
              content:
                "hi it is a literature review, i uploaded the paper what you need to read. please write down more critical thinking."
            }
          ]
        }
      ],
      payList:[
        {option:'Plagiarism Report',price:'$9.99',pay:false},
        {option:'VIP Customer Service',price:'$14.99',pay:true},
        {option:'Table of Contents',price:'$9.00',pay:false},
        {option:'Simple Language',price:'$0.90',pay:false},
      ]
    };
  },
  mounted() {
    this.getFileList()
  },
  methods: {
    handleClick(tab, e) {
      let vm = this;
    },
    handleChange(file, fileList) {
     
    },
    upLoadSuccess(){
      this.getFileList()
    },
    upLoad(){
      return 'http://localhost:3000/uploadfile'
    },
    getFileList(){
      this.$axios.get('/file').then(res=>{
        let data = res.data.data
        this.fileTable = data
        this.fileCount = data.length
        console.log(data)

      }).catch(err=>{

      })
    },
    actionOpen(flag){
      this.actionFlag = flag;
    }
  }
};
</script>
<style lang="less" scoped>

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
      border: 1px solid #DCDFE6;
      height: 40px;
      line-height: 40px;
      width: 100px;
      text-align: center;
      color: #666;
      border-radius: 4px;
      transition: .3s;
    }
    .dropdown_select.active{color:#fff;background: #379FEE}
  }
  &::after {
    content: "";
    display: block;
    clear: both;
  }
}
.orders_details {
  margin: 16px 0;
  padding: 4px;
  border-left: 2px solid #c72c48;
  > div > span {
    margin-right: 8px;
  }
  .order_name {
    color: #999999;
  }
  .order_topic {
    margin-top: 8px;
    > span {
      color: #999999;
    }
  }
}
.details_collapse {
  .details_row {
    padding: 8px;
    box-sizing: border-box;
    .details_label {
      color: #99a9bf;
    }
    .details_info {
      color: #333333;
    }
  }
  .details-border{
    border: 1px solid #EBEEF5;
    padding: 20px;
  }
}
// 详情卡片样式
.detail-card{box-shadow: 0 0 15px #c6c6c6;
  .card-head{
    padding:15px 30px;
    background: #00303F;
    color: #fff;
    &>p:nth-child(2){
      font-size: 30px;
    }
    &>button{
      background: #379FEE;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      padding: 9px 20px;
    }
  }
  .card-content{
    padding: 15px 30px;
    .icon{ width: 30px; height: 30px; vertical-align: middle;margin-right: 10px;}
    .card-content-item.active{
      background: rgba(27, 184, 250, 0.1);
      border: 1px solid rgba(27, 184, 250, 0.5);
      .iconic_check{
        opacity: 1;
      }
    }
    .card-content-item{
      // background: rgba(27, 184, 250, 0.1) #f6fcff;
      background: #f6fcff;
      // border: 1px solid rgba(27, 184, 250, 0.5) #d6f2fe;
      border: 1px solid #d6f2fe;
      border-radius: 4px;
      padding: 14px 16px;
      margin-bottom: 10px;
      white-space: nowrap;
      overflow: hidden;
      &>span:nth-child(1){
        float: left;
      }
      &>span:nth-child(2){
        float: right;
        margin-left: 8px;
      }
      &>span:nth-child(3){
        float: right;
      }
      .iconic_check{
        color: #379FEE;
        font-size: 12px;
        opacity: 0;
      }
    }
  }
}

// 消息模块样式
.msg {
  border: 1px solid #ebeef5;
  .msg-view {
    max-height: 400px;
    overflow-y: auto;
    .msg-date {
      border-bottom: 1px solid #e4e4e4;
      padding: 10px 0;
      margin: 0 20px;
      font-size: 18px;
    }
    .msg-item + .msg-item{
      background: #E8F8FE;
    }
    .msg-item {
      display: flex;
      padding: 20px;
      margin: 5px 0;
      .messages-head {
        margin-right: 20px;
      }
      .msg-content {
        flex-grow: 1;
        & > p:first-child {
          font-size: 18px;
          font-weight: bold;
        }
      }
      .msg-time {
        white-space: nowrap;
        margin-left: 30px;
        color: #999999;
      }
    }
  }
  .msg-send {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    border-top: 1px solid #ebeef5;
    padding: 30px 20px;
    & > input {
      flex-grow: 1;
      background: #f1f1f1;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      padding: 20px 10px;
      outline: none;
    }
    & > button {
      background: #379fee;
      color: #fff;
      font-weight: bold;
      border: none;
      margin-left: 20px;
      padding: 10px 30px;
      font-size: 16px;
      border-radius: 4px;
      margin: 10px 0px 10px 20px;
    }
    .iconic_files {
      font-size: 30px;
      margin-right: 20px;
      color: #dcdfe6;
    }
  }
  // 系统头像
  .sys-head {
    border-radius: 100%;
    text-align: center;
    vertical-align: middle;
    background: #6db33f;
    padding: 9px 15px;
    .iconfont {
      font-size: 30px;
      color: #fff;
    }
  }
}


// 文件模块样式
.files {
  .files-head {
    display: flex;
    font-size: 16px;
    align-items: center;
    margin: 10px 0;
    & > span {
      margin-right: 40px;
    }
    .divider {
      width: 2px;
      height: 16px;
      background: #c72c48;
      margin-right: 4px;
    }
  }
  // 空文件样式
  .re-file-empty {
    background: url(../../../../views/img/img_empty.png) no-repeat center center;
    height: 169px;
    margin: 20px 0;
    position: relative;
  }
  .re-file-empty::before {
    content: "No data!";
    display: block;
    position: absolute;
    left: calc(50% - 120px);
    transform: translateX(-50%);
    bottom: -20px;
  }
  .re-file-empty::after {
    content: "Here you can find all the received files.";
    color: #aeaeae;
    display: block;
    position: absolute;
    left: calc(50% + 28px);
    transform: translateX(-50%);
    bottom: -20px;
  }
  .my-file-empty {
    background: url(../../../../views/img/img_empty.png) no-repeat center center;
    height: 169px;
    margin: 20px 0;
    position: relative;
  }
  .my-file-empty::before {
    content: "No data!";
    display: block;
    position: absolute;
    left: calc(50% - 165px);
    transform: translateX(-50%);
    bottom: -20px;
  }
  .my-file-empty::after {
    content: "Here you can upload any helpful files for your writers.";
    color: #aeaeae;
    display: block;
    position: absolute;
    left: calc(50% + 28px);
    transform: translateX(-50%);
    bottom: -20px;
  }
}
</style>
<style>
.steps_line > .el-steps > .el-step > .el-step__main > .el-step__description {
  margin-top: 5px;
}
.files .el-upload__input {
  display: none !important;
}
.msg-view::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 5px;
}
.msg-view::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background: #ccc;
}
.msg-view::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  border-radius: 10px;
  background: #fff;
}


</style>