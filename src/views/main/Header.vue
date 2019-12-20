<template>
  <!-- 这是导航 -->
  <div class="nav">
    <!-- 使用app.vue的布局容器 -->
    <!-- 将tp-container设置为flex容器 -->
    <div class="tp-container">
      <!-- 设置左右两端对齐 使用要设置两个div 一个放左边一个放右边 -->
      <div class="left">
        <!-- 使用@/ 指向src目录 -->
        <!-- 做一个图片链接  为了不受其他样式影响 直接使用tag 渲染成其他标签 -->
        <router-link to="/" tag="span">
          <img src="@/assets/logo.png" alt />
        </router-link>
        <router-link to="/social">社会招聘</router-link>
        <a href="#">校园招聘</a>
        <a href="#">关于招聘</a>
      </div>
      <div class="right">
        <!-- <a href="#">登录</a> -->
        <router-link to="/login" v-if="!userName">登录</router-link>
        <!-- 去除a标签的默认行为 -->
        <!-- <a href="#" @click.prevent v-else>欢迎您,{{userName}}</a> -->
        <el-dropdown v-else>
          <span style="cursor:pointer">欢迎您,{{userName}}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>个人空间</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      userInfo: {}
    };
  },
  // 计算函数
  computed: {
    // 计算用户的用户名
    userName() {
      // 判断用户是否为空
      // JSON.stringify 判断对象为空
      // 直接遍历对象
      // 使用es6的deys判断这个给对象的属性的长度是否有
      if (Object.keys(this.userInfo).length) {
        return this.userInfo.username;
      }
      return "";
    }
  }, // 生命周期函数 渲染后
  mounted() {
    this.fetchUserInfo();
  },

  methods: {
    // 获取用户信息
    // 为什么明明登录成功了  还是显示还没有登录
    // 在前后端分离的过程中  由于浏览器的限制 每次传递的session值都是不一样的
    // 于是后端无法判断是否
    // 解决办法 : 每次发送ajax的时候  手动传递session值
    fetchUserInfo() {
      this.$api.get("users/userInfo").then(res => {
        let data = res.data;
        // 判断状态码
        if (data.code === 0) {
          console.log("服务器返回的值:", data.data);
          // 将用户信息保存到userInfo中
          this.userInfo = data.data;
        } else {
          this.$message.error({
            message: data.msg,
            duration: 1000
          });
        }
      });
    },

  }
};
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9999;
}
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
    span:hover {
      color: #44a8f2;
    }
  }
}
</style>