<template>
  <!-- 使用el的布局容器 -->
  <div id="login">
    <el-form label-width="80px">
      <el-form-item>
        <h2>登录</h2>
      </el-form-item>
      <el-form-item label="用户名:">
        <el-Input type="text" v-model="inputText" placeholder="请输入用户名或手机号" />
      </el-form-item>
      <el-form-item label="密码:">
        <el-Input type="password" v-model="inputPass" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item>
        <el-Button style="width:100%" type="primary" round @click="login">登录</el-Button>
      </el-form-item>
      <el-form-item>
        <div style="text-align:center">
          <el-button type="text" @click="goReg">没有账号?立即注册</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      inputText: "",
      inputPass: ""
    };
  },
  methods: {
    login() {
      // 先判断文本框是否有内容
      if (!this.inputText) {
        // 使用el的友好提示
        this.$message.error({
          message: "用户名或手机号不能为空",
          duration: 1000
        });
        return;
      }
      if (!this.inputPass) {
        // 使用el的友好提示
        this.$message.error({
          message: "密码不能为空",
          duration: 1000
        });
        return;
      }
      // 向后台发送请求登录
      // axios
      // this.$api
      //   .post("users/login", {
      //     userName: this.inputText,
      //     password: this.inputPass
      //   })
      //   .then(res => {
      //     // 取出请求返回的值
      //     // 判断服务器返回的code码  只要为0 代表请求成功
      //     console.log("服务器返回的值:", res);
      //     this.$notify({
      //       title: "登录成功",
      //       message: "正在进入主页",
      //       type: "success",
      //       duration: 2000, // 显示时间
      //       onClose: () => {
      //         // 窗口关闭的回调函数
      //         // 等两秒跳转
      //         // 登录成功跳转首页
      //         this.$router.push("/");
      //       }
      //     });
      //   });
      this.$api.users
        .login({
          userName: this.inputText,
          password: this.inputPass
        })
        .then(res => {
          // 取出请求返回的值
          // 判断服务器返回的code码  只要为0 代表请求成功
          console.log("服务器返回的值:", res);
          this.$notify({
            title: "登录成功",
            message: "正在进入主页",
            type: "success",
            duration: 2000, // 显示时间
            onClose: () => {
              // 窗口关闭的回调函数
              // 等两秒跳转
              // 登录成功跳转首页
              this.$router.push("/");
            }
          });
        });
    },
    // 跳转注册页面
    goReg() {
      // 路径 | 对象
      // 路径 | {path : 路径 ，name：路由的名字，params：}
      this.$router.push({ path: "/Reg" });
    }
  }
};
</script>

<style lang="scss" scoped>
/* 使用sass css预处理器 因为sass现在改名字了 scss*/
// 使用scss的高级scc语法
#login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    width: 70%;
    h2 {
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 30px;
    }
  }
}
</style>