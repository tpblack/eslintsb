// 定义一个规范
const job = [{
        // 定义请求地址
        url: 'job/lists',
        // 定义请求方式
        method: 'get',
        // 定义请求的方法名
        name: 'getJobList',
        // 定义方法的作用
        title: '获取职位列表(带分页)',
    },
    {
        // 定义请求地址
        url: 'job/typeList',
        // 定义请求方式
        method: 'get',
        // 定义请求的方法名
        name: 'jobTypeList',
        // 定义方法的作用
        title: '获取类别列表',
    },
    {
        // 定义请求地址
        url: 'job/info',
        // 定义请求方式
        method: 'get',
        // 定义请求的方法名
        name: 'jobInfo',
        // 定义方法的作用
        title: '查看详情页面的数据',
    },
    {
        // 定义请求地址
        url: 'job/coll',
        // 定义请求方式
        method: 'get',
        // 定义请求的方法名
        name: 'jobColl',
        // 定义方法的作用
        title: '查看详情页面的收藏与取消收藏',
    },
    {
        // 定义请求地址
        url: 'job/typeList',
        // 定义请求方式
        method: 'get',
        // 定义请求的方法名
        name: 'jobTypeList',
        // 定义方法的作用
        title: '获取类别列表',
    },
]

// 默认导出job
export default job;