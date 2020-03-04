<template>
  <div class="writing_body">
    <nav class="navbar navbar-inverse navbar-static-top">
      <div class="container-fluid allMaxWitdh">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="logoName" style="margin: 14px; color: #fff; ">LOGO REGION</div>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="nav_list_tab"><span class="nav_list nav_active">HOME</span></li>
            <li class="nav_list_tab"><span class="nav_list">SERVICE SYSTEM</span></li>
            <li class="nav_list_tab"><span class="nav_list">PRODOUCT CENTER</span></li>
            <li class="nav_list_tab"><span class="nav_list">FAQ</span></li>
          </ul>
          
          <ul class="nav navbar-nav navbar-right">
            <li class="nav_list_tab"><span class="singBtn default-color" @click="gotoLogin">Sign In</span></li>
            <li class="nav_list_tab"><span class="singBtn success-color">place an order</span></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
      
    </nav>
    <div class="banner">
      <div class="allMaxWitdh" style="margin: 0 auto;">
        <div class="col-md-6 col-sm-6">
          <div class="banner_info">
            <div>Professional Writing</div>
            <div style="margin-top: -12px;">Service Platform</div>
          </div>
          <div class="banner_info_info">
            "Writing group" is a paper, research paper, term paper,
            dissertation and thesis writing company
          </div>
        </div>
        <div class="col-md-6 col-sm-6">
          <div style="padding: 36px 0;">
            <div class="select_box">
              <div class="select_line">
                <select class="select_css" style="float:left; width: 65%; margin-right: 5%;">
                  <option>bachelor</option>
                </select>
                <select class="select_css" style=" float:left; width: 30%;">
                  <option>16days</option>
                </select>
              </div>
              <div class="select_line">
                <select class="select_css" style="width: 100%;">
                  <option>essay</option>
                </select>
              </div>
              <div class="select_line">
                <select class="select_css" style="width: 100%;">
                  <option>6page/800words</option>
                </select>
              </div>
              <div  class="select_css select_enter">
                proceed to order(11.6$)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="excellen_service">
      <div class="allMaxWitdh" style="margin: 0 auto; text-align: center;">
        <div class="service_title">EXCELLENT SERVICE</div>
        <div class="row">
          <div class="list_info col-md-offset-1 col-md-2 col-sm-6">
            <i class="icon iconfont iconic_subject"></i>
            <p>All subjects</p>
          </div>
          <div class="list_info col-md-2 col-sm-6">
            <i class="icon iconfont iconic_business"></i>
            <p>Business</p>
          </div>
          <div class="list_info col-md-2 col-sm-6">
            <i class="icon iconfont iconic_clock"></i>
            <p>Humanities</p>
          </div>
          <div class="list_info col-md-2 col-sm-6">
            <i class="icon iconfont iconic_mathematics"></i>
            <p>Mathematics</p>
          </div>
          <div class="list_info col-md-2 col-sm-6">
            <i class="icon iconfont iconic_book"></i>
            <p>Programming</p>
          </div>
        </div>
      </div>
    </div>
    <div class="line_box">
      How it works
    </div>
    <div class="line_card">
      <div class="col-sm-6 col-md-4">
        <div class="card-box" >
          <img class="card_img" src="../img/img_01.png">
          <div class="caption">
            <h4>1. Post your question</h4>
            <p>Include details on what you need help with, your budget, and how much time you have.</p>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-4">
        <div class="card-box">
          <img class="card_img" src="../img/img_02.png">
          <div class="caption">
            <h4>2. Select a Tutorn</h4>
            <p>We recommend tutors that are perfect for your question. You choose the one you want to work with.</p>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-4">
        <div class="card-box">
          <img class="card_img" src="../img/img_03.png">
          <div class="caption">
            <h4>3. Get help quickly</h4>
            <p>Message tutors through Studypool's chat feature. Only pay at the end. Satisfaction guaranteed.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
show3: true
    }
  },
  mounted(){},
  methods:{
    gotoLogin(){
      let vm = this
      // vm.$emit('gotoLogin',true)
      this.$router.push({path:'/login'})
    }
  },
}
</script>
<style scoped>
  .writing_body{ margin-bottom: 0; position:relative; height: 100%; }
  .writing_body .navbar{ margin-bottom: 0; line-height: 40px;}
  .navbar-inverse{  background: #00303F; }
  .logoName{ font-weight: 700; font-size: 30px;}
  .nav_list_tab{ margin: 14px 0 0 ; }
  .allMaxWitdh{ max-width: 1280px; }
  .nav_list{ color: #fff; margin: 0 8px;  cursor: pointer; position: relative; font-size: 16px;font-weight: bold;}
  .nav_list:hover{ color: #6DB33F; }
  .nav_active{ color: #6DB33F; }
  .nav_active::after{ content:''; display: inline-block; position: absolute; height: 2px;
     background: #6DB33F ; width: 50%; left: 25%; bottom: -4px; }
  .singBtn{ border-radius: 4px; border: 1px solid; color: #fff; padding: 6px 16px; margin: 0 8px; cursor: pointer; font-size: 14px;font-weight: bold; }
  .default-color{ background: rgba(0,0,0,0); }
  .success-color{ background: #6DB33F; border-color: #6DB33F; }
  .banner{ position: relative; min-height: 300px; background-image: url('../img/banner01.png'); background-size:  cover;}
  
  .banner_info{ font-size: 30px; font-weight: 700; color: #fff; margin: 0 auto; width: 350px ; padding-top: 72px; }
  .banner_info_info{ padding: 8px 16px; color: #fff; width: 350px; font-size: 12px;margin: 0 auto; border-left: 2px solid #C72C48}
  .select_box{ width: 360px; height: 220px; background: rgba(0,0,0,.5); margin: 0 auto; padding: 11px; box-sizing: border-box; }
  .select_line{ margin-bottom: 12px; overflow: hidden; }
  .select_css{ height: 40px; }
  .select_enter{ background: #379FEE; width: 100%; text-align: center; line-height: 40px; color: #fff; }
  .excellen_service{ background: #F0F2F4; padding: 16px; color: #ADBBC4;  }
  .service_title{ margin-bottom: 8px; font-weight: 700;font-size: 20px;}
  .list_info{ font-size: 16px;display: flex;justify-content: center; }
  .list_info>p{margin: 0;line-height: 57px;font-weight: 700;}
  .list_info>i{ font-size: 40px; margin-right: 8px; }
  .line_box{ max-width: 1280px; margin: 0 auto; text-align: center; font-weight: 700; font-size: 24px; color: #333333;padding: 40px 0;}
  .line_card{  max-width: 960px; margin: 0 auto;}
  .card_img{ width: 80px; height: 80px;border:1px dashed;}
  .caption{text-align: left;margin-top: 20px;}
  .caption>h4{font-size: 16px;font-weight: bold;}
  .card-box{border: none;overflow: hidden;box-sizing: border-box;text-align: center;padding: 40px;box-shadow: 0px 0px 3px #999;height: 280px;}
</style>