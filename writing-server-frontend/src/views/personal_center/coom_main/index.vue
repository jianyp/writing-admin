<template>
  <div class="main_body">
    <div v-if="!isView_port" style="transition: .3s all;" :class="leftWidth? 'header_left': 'header_left2'">
      <router-view></router-view>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    leftWidth:{ type:Boolean },
    isView_port:{ type:Boolean },
  },
  components:{
  },
  data(){
    return{}
  },
  mounted(){},
  methods:{},
}
</script>
<style lang="less" scoped>
    .header_left{ margin-left: 270px; }
    .header_left2{ margin-left: 80px; }
</style>

