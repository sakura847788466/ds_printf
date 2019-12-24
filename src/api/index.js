import ajax from './ajax'
let URL = 'https://yun.dascomyun.cn/15_printapi/v2.0'
let URL1 = ' http://192.168.11.197:10011/v1.0'

export const printStatus = (num) => ajax(URL + '/CheckPrinter/' + num + '') //获取打印机状态

export const print_c = (data) => ajax(URL + '/convertPrintData', data, 'POST') //打印数据转换

export const print = (data) => ajax(URL + '/cloud_print', data, 'POST') //打印透传

export const Simulation = (data) => ajax(URL1 + '/Simulation', data, 'POST', 'from') //生成打印数据



