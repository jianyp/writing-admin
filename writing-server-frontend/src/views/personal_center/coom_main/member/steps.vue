<template>
  <div>
    <div class="steps">
      <div class="steps-item" v-for="(item,index) in stepsNum" :key="index" :class="activeStep>index?'active-step':''">
        <div class="steps-item-head">
          <div class="steps-line"></div>
          <div v-if="index!=activeStep-1" class="steps-icon">{{index+1}}</div>
          <div v-if="index==activeStep-1" class="steps-text">You earned 5% off on this level</div>
        </div>
        <div class="steps-item-main" v-if="index!=activeStep-1">
            <p>Level {{index+1}}</p>
            <p>130 points</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      stepsNum: 10,
      activeStep: 3,
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.steps {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;
    &>.steps-item:first-child .steps-line{
      width: 50%;
      left: 50%;
    }
    &>.steps-item:last-child .steps-line{
      width: 50%;
      right: 50%;
    }
  
    .steps-item{flex-grow: 1;min-width: 100px;
    .steps-item-head {
        position: relative;
        height: 26px;
        .steps-line {
            position: absolute;
            top: calc(50% - 2px);
            height: 2px;
            width: 100%;
            border: 1px solid #C0C4CC;
            z-index: -1;
        }
        .steps-icon{
            display: inline-block;
            margin-left: 50%;
            color: #C0C4CC;
            text-align: center;
            transform: translateX(-50%);
            background: #fff;
            border-radius: 50%;
            width: 26px;
            height: 26px;
            font-weight: bold;
            line-height: 22px;
            border: 2px solid #C0C4CC
        }
        .steps-text{
            color: #8A5016;
            background: #FFE8D2;
            border: 2px solid #ECBA82;
            padding: 10px;
            width: 120px;
            position: absolute;
            top: -20px;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 6px;
        }
    }
    .steps-item-main{text-align: center;
        &>p:first-child{color: #999999;font-weight: 700;margin: 0}
        &>p:last-child{color: #C0C4CC;}
    }
  }
  .steps-item.active-step .steps-line{
      border: 1px solid #ECBA82;
  }
  .steps-item.active-step .steps-icon{
      color: #ECBA82;
      border: 2px solid #ECBA82
  }
  .steps-item.active-step .steps-item-main>p:first-child,.steps-item.active-step .steps-item-main>p:last-child{color:#ECBA82}
  
}
</style>


