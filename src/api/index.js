// 用来聚合所有的接口
// 引入网络请求地址
import {
    BASE_URL
} from '@/config/gateway.js';
// 引入job模块
import job from '@/api/modules/job.js';
// 引入users模块
import users from '@/api/modules/users.js';
// 引入api生成器
import ApiGenerator from '@/utils/apiGenerator.js'


// 定义模块对象 聚合所有模块
const Modules = {
    job, // 属性和值相同 省略一个可以不写
    users,
}

// 定义一些其他配置
const CONFIG = {
    BASE_URL, // 请求根路径
    TIMEOUT:30000, // 请求超时时间 30秒
    WITHCORS:true, // 请求是否携带session验证
    Modules // 配置所有模块信息
}

// 实例化api生成器
var apiGenerator = new ApiGenerator(CONFIG);

var api = apiGenerator.create();

export default api;