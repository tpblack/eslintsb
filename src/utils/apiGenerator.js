// 在配置文件中
// 导入axios 
import Axios from 'axios';
// 导入element ui
import {Message} from 'element-ui';
// 定义一个api生成器
class ApiGenerator { // es6
    // 类的构造函数
    constructor(config) {
        console.log('api生成器的打印',config)
        // 将config保存起来 定义一个全局配置
        this.config = config;
        // 配置axios的默认请求地址
        Axios.defaults.baseURL = this.config.BASE_URL;
        // 配置axios每次发送请求都携带sessionID值
        Axios.defaults.withCredentials = this.config.WITHCORS;
        // 配置axios的请求超时时间
        Axios.defaults.timeout = this.config.TIMEOUT;
        // 配置axios在post请求的时候请求体以ajax的形式请求
        // 默认post请求头
        Axios.defaults.headers.post['Accept'] = 'application/json' // 设置post的响应json
        Axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest' // 设置post的请求为ajax请求
        // 定义一个axios的拦截器
        Axios.interceptors.request.use(
            req => { // 请求拦截成功的回调函数 req当前请求的值
                // 最后返回拦截的请求
                // 给所有请求默认参数
                // req.params = {
                //   ...req.params,
                //   abc: 123
                // }; // 为了不影响原本的参数  复制一份之前的参数
                // console.log('这是axios拦截的请求' , req);
                return req;
            },
            err => { // 请求拦截失败的回调函数
                return Promise.reject(err); // 返回.catch方法
            })
        // 定义一个响应的拦截器
        Axios.interceptors.response.use(
            (res) => {
                if (res.data.code === 0) { // 如果响应码为0 则代表请求成功
                    // 响应成功  去除axios的第一层data  再去除服务器返回的data数据
                    return res.data.data;
                } else {
                    // 出现错误 提示出错
                    // 返回一个错误的promise
                    Message.error(res.data.msg);
                    return Promise.reject(res.data.msg);
                }
                return res;
            },
            (err) => {
                return Promise.reject(err);
            }
        )
        // 获得__method的返回值
        this.method =  this.__method();
    }
    // 生成api的方法
    create() {
        // 定义一个模块对象
        let modules = {};
        // 循环传递过来的module
        // console.log(this.config.Modules)
        // 遍历对象
        for (let module in this.config.Modules) {
            // console.log(module)
            let modulesApi = {}; // 用来保存每个api的模块
            // 循环每个模块
            this.config.Modules[module].forEach(item => {
                console.log(item);
                // 定义模块对象
                let moduleApi = (params)=>{
                    item.params = params;
                    // axios方法
                    // 判断接口规范是否定义正确
                    // 检测请求方法是否定义
                    if(this.method[item.method] === undefined ){ // 如果为undefined则未定义该方法
                        console.log('该方法未定义',item.method);
                        return;
                    }
                    return this.method[item.method](item);
                }
                modulesApi[item.name] = moduleApi;
            });
            // 将所有的模块 保存到大模块中
            modules[module] = modulesApi;
            console.log(modulesApi);
        }
        console.log(modules)
        return modules;
    }
    // 定义一个发送请求的方法 私有的
    __method() {
        return {
            get(opt) {
                // 定义get需要的参数
                let params = opt.params || {}; // 如果没有get请求没有参数就用空对象
                return Axios({
                    method: 'get', // 请求方式
                    url: opt.url, // 请求地址
                    responseType: 'json', // 请求返回类型
                    params, // get请求的参数
                })
            },
            post() {
                // 定义post需要的参数
                let data = opt.params || {}; // 如果没有post请求没有参数就用空对象
                return Axios({
                    method: 'post', // 请求方式
                    url: opt.url, // 请求地址
                    responseType: 'json', // 请求返回类型
                    data, // post请求的参数
                })
            }
        }
    }


    // // 定义类的方法
    // a() {
    //     console.log(123)
    // }

    // // 定义一个静态方法
    // static akun() {
    //     console.log('蠢鲲');
    // }

    // // 定义私有方法
    // __siyou() {
    //     console.log('私有')
    // }
}

export default ApiGenerator; // 导出 api 生成器