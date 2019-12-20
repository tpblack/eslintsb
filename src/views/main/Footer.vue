<template>
  <!-- 这是足部 -->
  <div class="footer" id="footer">
    <!-- 使用布局容器包裹 -->
    <div class="tp-container">
      <div class="left">
        <p>Copyright © 2019 DJI 大疆创新 版权所有</p>
        <a href="#">DJI 大疆创新官网 |</a>
        <a href="#">DJI 大疆创新官方商城 |</a>
        <a href="#">天空之城 |</a>
        <a href="#">RoboMaster |</a>
        <a href="#">DJI 大疆招聘公众号</a>
      </div>
      <div class="right">
        <a href="#">简体中文 |</a>
        <a href="#">English</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.nav,
.footer {
  // .home .nav
  height: 60px;
  background-color: #fff;
  .tp-container {
    height: 100%;
    display: flex;
    // 设置flex容器的排序方式
    // 两端对齐 中间内容平分
    justify-content: space-between;
    // 设置垂直方向排列
    align-items: center; // 居中显示
    .left {
      // 设置left为flex容器
      display: flex;
      // 设置垂直方向居中
      align-items: center;
      img {
        width: 34px;
        height: 34px;
        margin-right: 56px;
        cursor: pointer;
      }
    }
    a {
      color: #232526;
      font-size: 14px;
      margin-right: 20px;
    }
    a:last-child {
      margin-right: 0;
    }
    a:hover {
      color: #44a8f2;
      cursor: pointer;
    }
  }
}
// 设置底部样式
#footer {
  
  height: 50px;
  color: #707473;
  margin-top: -50px;

  a {
    // a标签无法继承父类
    color: #707473;
    font-size: 12px;
    margin-right: 4px;
  }
  a:hover{
      color: #232526;
  }
  p {
    font-size: 12px;
    margin-right: 26px;
    cursor: pointer;
  }
}
</style>