<template>
  <div class="login">
    <!-- 使用el的布局容器 -->
    <div class="main">
      <el-row class="row">
        <!-- 在el中栅格为24 -->
        <el-col :span="12" class="left">
          <div>
            <el-carousel height="600px" :autoplay="false">
              <el-carousel-item v-for="item in 3" :key="item">
                <div :class="['carousel-img','item'+item]">
                  <div>
                    <P>阿坤{{item}}</P>
                    <p>@{{item}}</p>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
            <img src="@/assets/logo.png" />
          </div>
        </el-col>
        <el-col :span="12" class="right">
          <div>
            <el-form label-width="80px">
              <el-form-item>
                <h2>登录</h2>
              </el-form-item>
              <el-form-item label="用户名:">
                <el-Input type="text" v-model="inputText" placeholder="请输入用户名" />
              </el-form-item>
              <el-form-item label="密码:">
                <el-Input type="password" v-model="inputPass" placeholder="请输入密码" />
              </el-form-item>
              <el-form-item>
                <el-Button style="width:100%" type="primary" round @click="login">登录</el-Button>
              </el-form-item>
              <el-form-item>
                <div style="text-align:center">
                  <el-button type="text">没有账号?立即注册</el-button>
                </div>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="footer">
      <p>fasdgasdfasdfasdfgasd</p>
      <p>gadsfasddddddddddddd</p>
      <p>dddddddddddddddddddddddddddd</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      inputText: '',
      inputPass: '',
    }
  },
  methods: {
    login(){
      // 使用路由进行跳转
      this.$router.push('/');
    }
  },
};
</script>

<style lang="scss" scoped>
/* 使用sass css预处理器 因为sass现在改名字了 scss*/
// 使用scss的高级scc语法
.login {
  background-color: rgb(237, 237, 237);
  min-height: 100%;
  // 设置父元素为flex布局
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
  .main {
    // 等同于 .login>.main
    width: 90%;
    // margin: 0 auto;
    //设置最小高度
    height: 600px;
    border: 1px solid #ccc;
    // 设置阴影   x   y  半径  颜色
    box-shadow: 1px 1px 2px #ccc, -1px -1px 10px #ccc;
    border-radius: 4px;
    // 忽略边框
    // box-sizing: border-box;
    .row {
      height: 100%;
      .left,
      .right {
        height: 100%;
      }
      .left {
        height: 100%;
        & > div {
          position: relative;
          img {
            position: absolute;
            width: 50px;
            height: 50px;
            top: 40px;
            left: 40px;
            z-index: 9999;
          }
          .carousel-img {
            position: relative;
            height: 100%;
            // 设置背景图片大小
            background-size: cover;
            background-repeat: no-repeat;
            // &地址符
            &.item1 {
              background-image: url("https://account.djicdn.com/pc/static/img/1.e61fc72.jpg");
            }
            &.item2 {
              background-image: url("https://account.djicdn.com/pc/static/img/2.643c4c1.jpg");
            }
            &.item3 {
              background-image: url("https://account.djicdn.com/pc/static/img/3.61f61fa.jpg");
            }
            div {
              position: absolute;
              bottom: 100px;
              right: 40px;
              p {
                color: #fff;
                font-size: 28px;
                font-weight: 600;
                line-height: 1.3;
                text-align: right;
              }
              p:last-child {
                font-size: 14px;
                margin-top: 5px;
              }
            }
          }
        }
      }
      .right {
        background-color: #fff;
        & > div {
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
      }
    }
  }
  .footer {
    margin-top: 20px;
    color: #979797;
    font-size: 12px;
    text-align: center;
    line-height: 2;
  }
}
</style>