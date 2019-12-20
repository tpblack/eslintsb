<template>
  <div class="home">
    <!-- 每个组件有且只有一个根元素 -->
      <!-- 这是导航 -->
    <HeaderCom></HeaderCom>

    <router-view></router-view>

      <!-- 这是足部 -->
    <FooterCom></FooterCom>
  </div>
</template>

<script>
// 导入header 和footer组件
import HeaderCom from './main/Header.vue'
import FooterCom from './main/Footer.vue'
export default {
  name: "home",
  // 局部组件引入
  components:{
    HeaderCom,FooterCom
  },
};
</script>
<style lang="scss" scoped>
// 设置.home容器高度占满全屏
.home {
  height: 100%;
  background-color: #fff;
}
</style>