/**
 * Created by hideyoshi on 2017/3/23.
 */
import axios from 'axios'
import config from './config'
import Qs from 'qs'
// axios(config);
export class AXIOS {
    constructor() {

        }
        //获取已授权列表
    get(param) {
        config.data.strSQL = param.param;
        config.data.page = param.param.page;
        return axios.get(param.api, {}, config);
    }
    post(param) {
        config.data.companyNo = param.param.companyNo;
        config.data.traceCode = param.param.traceCode;
        config.data.itemName = param.param.itemName;
        config.data.measureTime = param.param.measureTime;
        config.data.baseNo = param.param.baseNo;
        config.data = Qs.parse(config.data);
        //console.log(config)
        return axios.post(param.api, {}, config);
    }
    reqSuccess(obj, msg) {

    }
    reqFail(obj, msg) {

    }
}
export default AXIOS;