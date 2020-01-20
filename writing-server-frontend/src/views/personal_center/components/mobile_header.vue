<template>
  <div class="header_mobile">
    <slot ></slot>
    <a>LOGO</a>
  </div>
</template>
<script>
export default {
  data(){
    return{
    }
  },
  mounted(){},
  methods:{
   
  },
}
</script>
<style lang="less" scoped>
  .header_mobile{ padding: 0 16px; padding: 12px 16px;border-bottom: 1px solid #e5e7ea;
    >a{ font-size: 24px; color: #555; font-weight: 700; text-decoration: none; }
  }
</style>