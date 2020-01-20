<template>
  <div class="main_body">
    <div v-if="!isView_port" style="transition: .3s all;" :class="leftWidth? 'header_left': 'header_left2'">
      <order_index></order_index>
    </div>
    <div v-else>
      <order_index></order_index>
    </div>
  </div>
</template>
<script>
import order_index from './orders/index'
export default {
  props:{
    leftWidth:{ type:Boolean },
    isView_port:{ type:Boolean },
  },
  components:{
    order_index
  },
  data(){
    return{}
  },
  mounted(){},
  methods:{},
}
</script>
<style lang="less" scoped>
    .header_left{ margin-left: 296px; }
    .header_left2{ margin-left: 80px; }
</style>

