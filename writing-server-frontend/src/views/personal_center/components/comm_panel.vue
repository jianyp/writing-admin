<template>
  <div class="collapse_panel" :style="'height:'+hh+'px'" :class="showPanel?'panel_width2':'panel_width1'">
    <div class="close_panel">
      <i class="el-icon-error" @click="closePanel"></i>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props:{
    showPanel:{ type: Boolean }
  },
  data() {
    return {
      hh:0,
    }
  },
  mounted() {
    let vm = this
    vm.hh = document.documentElement.clientHeight - 77
  },
  methods: {
    closePanel(){
      this.$emit('closePanel',false)
    }
  },
}
</script>
<style lang="less" scoped>
  .collapse_panel{ position: absolute; transition: .3s all; z-index: 101; background: #fff; 
    top: 10px; right: 0; overflow-y: auto; padding: 8px; box-sizing: border-box;
    .close_panel{ font-size: 18px; text-align: right; 
      >i{ cursor: pointer; }
    }  
  }
  .panel_width1{ width: 0; opacity: 0; }
  .panel_width2{ width: 100%; opacity: 1; }
</style>