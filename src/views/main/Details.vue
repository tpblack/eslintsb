<template>
  <div class="details">
    <div class="tp-container">
      <div class="container">
        <div>
          <h1 class="text-h1">{{details.job_name}}</h1>
        </div>
        <div class="job-base">
          <div>
            职位类别：
            {{jobTypeUpdata(details.job_type)}}
          </div>
          <div>
            工作城市：
            {{details.job_city}}
          </div>
          <div>
            发布时间：
            {{details.job_time}}
          </div>
        </div>
        <div class="job-content">
          <p>工作职责</p>
          <p v-for="(item,index) in jobAskArr" :key="index">{{item}}</p>
        </div>
        <div class="job-content-article">
          <p>任职要求</p>
          <p v-for="(item,index) in jobInfoArr" :key="index">{{item}}</p>
        </div>
        <div class="job-button">
          <el-button class="btn1" @click="showScope(details.pk)">{{collectionPosition}}</el-button>
          <el-button class="btn2" type="info">立即申请</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infoId: "",
      details: {},
      jobInfoArr: [],
      jobAskArr: [],
      typeList: [],
      collectionPosition: "收藏职位"
    };
  },
  mounted() {
    this.getTypeList();
    this.infoList();
  },
  methods: {
    getTypeList() {
      // 获取类别列表
      this.$api.get("job/typeList").then(res => {
        let data = res.data;
        this.typeList = data.data;
        console.log(this.typeList);
      });
    },
    infoList() {
      //   获取浏览器地址  ?后的参数
      this.infoId = this.$route.query.id;
      this.$api.get("job/info", { params: { id: this.infoId } }).then(res => {
        let data = res.data;
        this.details = data.data;
        // console.log(data.data.job_info.split('\n'))
        this.jobInfoArr = data.data.job_info.split("\n");
        this.jobAskArr = data.data.job_ask.split("\n");
        console.log(this.details);
      });
    },

    jobTypeUpdata(val) {
      if (!val) return;

      console.log(111);
      // 将typeList的类型与val进行匹配
      var item = this.typeList.find(item => item.id === val);
      return item.type;
    },
    showScope(pk) {
      // 收藏与取消收藏
      this.$api.post("job/coll", { id: pk }).then(res => {
        if (res.data.code === 0) {
          this.$message.info({ message: res.data.msg });
          // 验证请求成功 对当前行进行操作
          this.details.isColl = !this.details.isColl;
        } else {
          this.$message.error({ message: res.data.msg });
        }
      });
    }
  },
  watch: {
    "details.isColl"(val){
       if (val) {
        this.collectionPosition = "取消收藏";
      } else {
        this.collectionPosition = "收藏职位";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.details {
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

    background-color: #fff;
    padding: 0 100px 0 55px;
    .text-h1 {
      display: inline-block;
      line-height: 30px;
      font-size: 22px;
      color: #707473;
      font-weight: 400;
      margin: 24px 0 16px;
    }
    .job-base {
      display: flex;
      padding-bottom: 35px;
      border-bottom: 1px solid #ebebeb;
      div {
        color: #979797;
        cursor: pointer;
        font-size: 14px;
      }
      & > div:nth-child(1) {
        margin-right: 50px;
        margin-left: 10px;
      }
      & > div:nth-child(2) {
        margin-right: 120px;
      }
    }
    .job-content,
    .job-content-article {
      padding-top: 30px;
      & > p:nth-child(1) {
        font-size: 14px;
        margin-bottom: 20px;
        color: #707473;
      }
      & > p:nth-child(n + 2) {
        font-size: 14px;
        margin-bottom: 13px;
        color: #707473;
      }
    }

    .job-button {
      margin-top: 85px;
      padding-bottom: 100px;
      .btn1 {
        padding: 14px;
      }
      .btn1:hover {
        border-color: #9fa3a6 !important;
        color: #3b3e40 !important;
        background: #fff !important;
      }
      .btn2 {
        background-color: #3b3e40;
        padding: 14px;
      }
      .btn2:hover {
        background-color: #535759 !important;
        border-color: #535759 !important;
        color: #fff !important;
      }
    }
  }
}
</style>