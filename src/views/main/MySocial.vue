<template>
  <div class="social">
    <div class="box">
      <div class="header"></div>
      <div class="main_social">
        <div class="main_oneDiv">
          <ul>
            <li class="liOne">
              <span>职位类别:</span>
              <a>所有类别</a>
              <a>市场销售类</a>
              <a>运营类</a>
              <a>互联网类</a>
              <a>职能类</a>
              <a>研发类</a>
              <a>服务类</a>
              <a>信息安全类</a>
              <a>设计类</a>
              <a>财务类</a>
              <a>地产类</a>
            </li>
            <li class="liTwo">
              <span>工作城市:</span>
              <a href="#">所有城市</a>
              <a href="#">北京市</a>
              <a href="#">杭州市</a>
              <a href="#">南京市</a>
              <a href="#">上海市</a>
              <a href="#">深圳市</a>
              <a href="#">西安市</a>
              <a href="#">香港</a>
            </li>
            <div class="hr_social"></div>
            <li class="liThree">
              <div>
                <el-input size="medium" placeholder="请输入职位关键字" v-model="input2"></el-input>
              </div>
            </li>
            <li class="liFour">
              <div>
                <a href="#">职院招聘</a>
                <a href="#">嵌入式</a>
                <a href="#">算法</a>
                <a href="#">机械</a>
                <a href="#">采购</a>
                <a href="#">运维</a>
                <a href="#">开发</a>
                <a href="#">实习生</a>
              </div>
            </li>
          </ul>
        </div>
        <div class="main_twoDiv">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="职位名称" width="360"></el-table-column>
            <el-table-column prop="name" label="职位类别" width="180"></el-table-column>
            <el-table-column prop="address" label="工作城市"></el-table-column>
            <el-table-column prop="time" label="发布时间" width="180"></el-table-column>
            <el-table-column prop="collection" label="收藏" width="180"></el-table-column>
            <el-table-column prop="details" label="操作"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input2: "",
      tableData: [
        {
          date: "汽车电子硬件工程师（毫米波雷达）",
          name: "研发类",
          address: "深圳市",
          time: "2019-12-19",
          collection: "♥",
          details: "查看详情>",
        },
        {
          date: "汽车电子硬件工程师（毫米波雷达）",
          name: "研发类",
          address: "深圳市",
          time: "2019-12-19",
          collection: "♥",
          details: "查看详情>",
        },
        {
          date: "汽车电子硬件工程师（毫米波雷达）",
          name: "研发类",
          address: "深圳市",
          time: "2019-12-19",
          collection: "♥",
          details: "查看详情>",
        },
        {
          date: "汽车电子硬件工程师（毫米波雷达）",
          name: "研发类",
          address: "深圳市",
          time: "2019-12-19",
          collection: "♥",
          details: "查看详情>",
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.social {
  background-color: rgb(247, 248, 249);

  // 设置高度 默认满屏
  // height: 100%;
  // 图片居中
  background-size: cover;
  // 设置图片偏移  保证宽度改变 图片都能居中显示
  background-position: 50%;
  padding-top: 60px;
  padding-bottom: 50px;

  // 这些边距会增加div的宽高
  // 设置忽略边框
  box-sizing: border-box;

  .box {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    .header {
      height: 300px;
      background: url(https://we2.djicdn.com/hire/public/img/search-banner.c9d5236.jpg)
        no-repeat;
      background-size: cover;
      background-position: 50%;
    }
    .main_social {
      background-color: #fff;
      margin: 24px -92px 24px 0;
      padding: 40px 48px;

      .main_oneDiv {
        ul {
          max-width: 1104px;
          li {
            span,
            a {
              color: #7f8382;
              font-size: 14px;
            }
          }
          .liOne,
          .liTwo {
            a {
              margin-right: 24px;
            }
          }
          .liThree,
          .liTwo {
            margin: 24px 0;
          }
          .hr_social {
            border: 0.5px #ccc solid;
          }
          .liThree {
            position: relative;
            div {
              width: 320px;
              height: 30px;
              position: absolute;
              right: 0px;
            }
          }
          .liFour {
            position: relative;
            height: 40px;
            div {
              position: absolute;
              right: 0;
              a {
                margin-right: 5px;
              }
              padding-top: 40px;
            }
          }
        }
      }
      // .main_twoDiv {
      // }
    }
  }
}
</style>