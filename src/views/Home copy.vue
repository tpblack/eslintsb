<template>
  <div class="home">
    <nav>
      <div class="tp-container">
        <div>
          <img src="@/assets/logo.png" alt />
          <a href="#">社会招聘</a>
          <a href="#">校园招聘</a>
          <a href="#">关于大疆</a>
        </div>
        <div>
          <a href="#">登录</a>
        </div>
      </div>
    </nav>

    <div class="main">
      <div>
        <p>未来无所不能</p>
        <p>THE FUTURE OF POSSIBLE</p>
      </div>
    </div>
    <footer>
      <div class="tp-container">
        <p href="#">Copyright © 2019 DJI 大疆创新 版权所有</p>
        <a href="#">zzz官网 |</a>
        <a href="#">zzz赞助 |</a>
        <a href="#">淘宝阿里 |</a>
        <a href="#">腾讯云</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="scss" scoped>
.home {
  overflow-y: hidden;
  height: 100%;
  nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #fff;
    .tp-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }
    div {
      display: flex;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
        margin-right: 34px;
        cursor: pointer;
      }
      a {
        color: #3b3e40;
        font-size: 14px;
        line-height: 70px;
        margin: 0 12px;
      }
      a:hover {
        cursor: pointer;
        color: rgb(0, 204, 255);
      }
    }
  }
  .main {
    height: 100%;
    background-size: cover;
    background-position: 50%;
    margin-bottom: 50px;
    background-image: url(https://we2.djicdn.com/hire/public/img/home-page-banner-2.d8f1ba7.png);
    // padding-top: 200px;
    text-align: center;
    font-size: 35px;
    color: #fff;
    line-height: 1.5;
    div{
      padding-top: 200px;
    }
  }
  footer {
    background-color: #fff;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 60px;
    .tp-container {
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #979797;
      p {
        margin-right: 34px;
      }
      a {
        color: #979797;
        margin-right: 4px;
        font-size: 13px;
      }
    }
  }
}
</style>

