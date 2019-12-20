<template>
  <div id="reg">
    <el-form label-width="80px">
      <el-form-item>
        <h2>注册</h2>
      </el-form-item>
      <el-form-item label="用户名:">
        <el-Input type="text" v-model="inputText" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="密码:">
        <el-Input type="password" v-model="inputPass" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item>
        <el-Button style="width:100%" type="primary" round @click="reg">立即注册</el-Button>
      </el-form-item>
      <el-form-item>
        <div style="text-align:center">
          <el-button type="text" @click="goLogin">返回登录</el-button>
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
      inputPass: "",
      flag: true
    };
  },
  methods: {
    reg() {
      if (!this.flag) return;

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
      // 注册
      this.$api
        .post("users/reg", {
          userName: this.inputText,
          password: this.inputPass
        })
        .then(res => {
          // 取出请求返回的值
          let data = res.data;
          // 判断服务器返回的code码  只要为0 代表请求成功
          if (data.code == 0) {
            console.log("服务器返回的值:", data.data);
            this.$message.success({
              message: "注册成功",
              duration: 1000,
              onClose: () => {
                // 注册成功跳转登录
                this.$router.push("/login");
              }
            });
          } else {
            this.$message.error({
              message: data.msg,
              duration: 1000
            });
          }
        });
      this.flag = false;
      setTimeout(function() {
        this.flag = true;
      }, 1000);
      // 使用路由进行跳转
      // this.$router.push('/');
      // console.log(this.$api);
      // 发送get请求
      //   this.$api
      //     .post("http://172.16.14.44:3000/users/login", {
      //       userName: this.inputText,
      //       password: this.inputPass
      //     })
      //     .then(res => {
      //       console.log(res.data);
      //       if (res.data.code == 0) {
      //         alert("登录成功");
      //       } else {
      //         alert(res.data.msg);
      //       }
      //     });
    },
    // 返回登录页面
    goLogin() {
      this.$router.push("/Login");
    }
  }
};
</script>

<style lang="scss" scoped>
/* 使用sass css预处理器 因为sass现在改名字了 scss*/
// 使用scss的高级scc语法
#reg {
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