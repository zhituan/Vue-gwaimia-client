import Mock from 'mockjs'
import apiData from './data'
//使用mock来连接访问的路由，即访问成功的返回结果
Mock.mock('/goods',{code:0,data:apiData.goods})
Mock.mock('/ratings',{code:0,data:apiData.ratings})
Mock.mock('/info',{code:0,data:apiData.info})
