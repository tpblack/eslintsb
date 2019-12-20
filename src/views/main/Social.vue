<template>
  <div class="social">
    <!-- 增加一个容器 -->
    <div class="tp-container">
      <div class="top"></div>
      <div class="bottom">
        <!-- 这是类别区域 -->
        <div class="classNav">
          <div class="nav">
            <div>职位类别:</div>
            <div class="active">所有类别</div>
            <!-- 使用列表渲染 渲染所有的类别 -->
            <div v-for="item in typeList" :key="item.id">{{item.type}}</div>
          </div>
          <div class="nav">
            <div>工作城市:</div>
            <div class="active">所有城市</div>
            <div>北京市</div>
            <div>杭州市</div>
            <div>南京市</div>
            <div>上海市</div>
            <div>深圳市</div>
            <div>西安市</div>
            <div>香港</div>
          </div>
        </div>
        <!-- 这是搜索区域 -->
        <div class="searchNav">
          <el-input
            suffix-icon="el-icon-search"
            placeholder="请输入职位关键词"
            style="width:320px;"
            size="medium"
            v-model="query"
            clearable
          ></el-input>
          <div class="keyword">
            <span>职院招聘</span>
            <span>嵌入式</span>
            <span>算法</span>
            <span>机械</span>
            <span>采购</span>
            <span>运维</span>
            <span>开发</span>
            <span>实习生</span>
          </div>
        </div>
        <!-- 这是结果区域 -->
        <div class="result">
          <!-- 自定义 -->
          <el-table
            :data="jobs"
            :header-cell-style="{backgroundColor:'#f5f5f5',fontSize:'18px',color:'#616466'}"
          >
            <el-table-column prop="job_name" label="职位名称" width="280"></el-table-column>
            <el-table-column prop="job_type" label="职位类别">
              <template slot-scope="scope">
                  <!-- scope.row当前表格对象 -->
                  <!-- 过滤器 过滤职位列表 -->
                  {{jobTypeUpdata(scope.row.job_type)}}
              </template>
            </el-table-column>
            <el-table-column prop="job_city" label="工作城市"></el-table-column>
            <el-table-column prop="job_time" label="发布时间"></el-table-column>
            <el-table-column label="收藏">
              <!-- scope 指向当前这一行的数据 -->
              <template>
                <span class="el-icon-star-off" style="cursor:pointer"></span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template>
                <span style="cursor:pointer; color:#b4b4b4 ">查看详情></span>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination background layout="prev, pager, next" :total="pagination.total" :current-page="pagination.page-0" @current-change="pageChange" class="mypage" />
        </div>
      </div>
    </div>
    <!-- <div class="box">
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
    </div>-->
  </div>
</template>

<script>
export default {
  name: "social",
  data() {
    return {
      // 职位类别
      typeList: [],
      // 搜索框的值
      query: "",
      // 职位列表
      jobs: [],
      // 分页器
      pagination: {}
    };
  },
  // 页面渲染完毕调用接口
  mounted() {
    this.getTypeList();
    this.fetchJobs();
  },
  // 定义一个过滤器  处理职位类别
  // filters:{
  //   jobTypeUpdata(val){
  //     // 将typeList的类型与val进行匹配
  //     var item = this.typeList.find(item=> item.id==val);

  //     return val + "122";
  //   }
  // },

  methods: {
    getTypeList() {
      // 获取类别列表
      this.$api.get("job/typeList").then(res => {
        let data = res.data;
        this.typeList = data.data;
      });
    },
    // 获取职位列表
    fetchJobs() {
      // axios的get参数
      this.$api.get("job/lists", { params: { page: this.pagination.page || 1  } }).then(res => {
        let {
          data: { items, total, page }
        } = res.data;
        this.jobs = items;
        // 定制分页器
        this.pagination = {
          page,
          total
        };
      });
    },
    // 页面改变的方法
    pageChange(index){
      // 页码改变 重新修改分页器
      this.pagination.page =index;
      // 重新查询
      this.fetchJobs();
    },
    jobTypeUpdata(val){
      // 将typeList的类型与val进行匹配
      var item = this.typeList.find(item=> item.id==val);
      return item.type;
    }
  }
};
</script>

<style lang="scss" scoped>
.social {
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
  .top {
    height: 300px;
    background: url(https://we2.djicdn.com/hire/public/img/search-banner.c9d5236.jpg)
      no-repeat;
    background-size: cover;
    background-position: 50%;
  }
  .bottom {
    background-color: #fff;
    min-height: 500px;
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 40px 48px;
    .classNav {
      // 类别搜索导航的样式
      padding-bottom: 20px;
      border-bottom: 1px solid #ccc;
      margin-bottom: 20px;
      .nav {
        display: flex;
        margin-top: 30px;
        & > div {
          margin: 0 10px;
          color: #7f8382;
          font-size: 14px;
          cursor: default;
        }
        & > div:nth-child(n + 2) {
          // 选择除第一个以外都不同
          cursor: pointer;
        }
        // 鼠标悬浮变色
        & > div:nth-child(n + 2):hover {
          color: #232526;
        }
        .active {
          color: #232526;
        }
      }
    }
    .searchNav {
      text-align: right;
      .keyword {
        margin-top: 10px;
        font-size: 13px;
        color: #b4b4b4;
        span {
          cursor: pointer;
          margin-left: 20px;
        }
      }
    }
    .result {
      margin-top: 20px;
      .mypage {
        text-align: center;
        margin-top: 20px;
      }
    }
  }
}
</style>