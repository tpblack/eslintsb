<template>
  <div class="user">
    <div class="tp-container">
      <div class="container">
        <div class="left">
          <div class="left_top">
            <div class="img_top">
              <img src="https://we2.djicdn.com/hire/public/img/default-avatar.6d24ca6.png" alt />
            </div>
            <div>
              <el-tooltip class="item" effect="dark" content="tp" placement="top">
                <span>tp</span>
              </el-tooltip>
            </div>

            <div>编辑头像</div>
            <div>
              <img src="https://we2.djicdn.com/hire/public/img/hire-qrcode.405a3e5.jpg" alt />
            </div>
            <div>大疆招聘公众号</div>
          </div>
          <div class="left_bottom">
            <P>最新公告</P>
            <P>2018-06-14</P>
            <P>简历功能改版公告</P>
            <P>2017-09-15</P>
            <P>大疆创新2018校招网申截止通知</P>
            <P>2017-08-25</P>
            <P>大疆创新-2018校招-软件开发类编程题笔试...</P>
          </div>
        </div>
        <div class="right">
          <div>
              <template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.user {
  background-color: rgb(247, 248, 249);
  // 设置高度 默认满屏
  min-height: 100%;
  // 图片居中
  background-size: cover;
  // 设置图片偏移  保证宽度改变 图片都能居中显示
  background-position: 50%;
  padding-top: 60px;
  padding-bottom: 50px;

  // 这些边距会增加div的宽高
  // 设置忽略边框
  box-sizing: border-box;
  .container {
    margin: 40px 0;

    display: flex;
    // justify-content: space-between;
    .left {
      display: flex;
      flex-direction: column;
      .left_top {
        width: 226px;
        margin-right: 15px;
        padding: 0 32px 40px 32px;
        background-color: #fff;
        text-align: center;
        .img_top {
          padding-top: 35px;
          img {
            width: 96px;
            height: 96px;
          }
        }
        & > div:nth-child(2) {
          margin-top: 16px;
          font-size: 16px;
          cursor: pointer;
        }
        & > div:nth-child(3) {
          margin-top: 16px;
          padding-bottom: 27px;
          color: #44a8f2;
          font-size: 12px;
          line-height: 24px;
          cursor: pointer;
          border-bottom: 1px solid #f0f1f2;
        }
        & > div:nth-child(4) {
          margin-top: 27px;
          img {
            width: 127px;
            height: 127px;
          }
        }
        & > div:nth-child(5) {
          margin-top: 20px;
          font-size: 14px;
          color: #3b3e40;
          font-family: Open Sans, PingFang SC, Microsoft YaHei, Helvetica Neue,
            Hiragino Sans GB, WenQuanYi Micro Hei, Arial, sans-serif;
        }
      }
      .left_bottom {
        width: 258px;
        margin-right: 15px;
        margin-top: 15px;
        padding: 24px 16px 32px 16px;
        background-color: #fff;
        & > p:nth-child(1) {
          color: #3b3e40;
          margin: 0 0 16px;
          line-height: 24px;
          font-size: 16px;
          font-weight: 400;
        }
        & > p:nth-child(n + 2) {
          height: 100%;
          font-size: 14px;
          color: #6c7073;
          font-family: Open Sans, PingFang SC, Microsoft YaHei, Helvetica Neue,
            Hiragino Sans GB, WenQuanYi Micro Hei, Arial, sans-serif;
        }
        & > p:nth-child(2),
        p:nth-child(4),
        p:nth-child(6) {
          color: #9fa3a6;
        }
        & > p:nth-child(3),
        p:nth-child(5),
        p:nth-child(7) {
          margin-top: 8px;
          margin-bottom: 14px;
          cursor: pointer;
        }
      }
    }
    .right {
      background-color: #fff;
      width: 900px;
      height: 100px;
    }
  }
}
</style>