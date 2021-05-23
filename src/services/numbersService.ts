import axios,{AxiosRequestConfig} from "axios";

const CONFIG = require("../config/config");

export async function getRangeInfo (){
    const requestConfig: AxiosRequestConfig = {
        url : CONFIG.RANGE_INFO_URL,
        method: "get"
      };
      return await axios.request(requestConfig).then((response) => {
        return response.data;
      }).catch((error) => {
        if(error.response.status === 503){
          getRangeInfo();
        }
        console.log(error.response.message);
      });
    }

export async function getDivisorInfo() {
    const requestConfig: AxiosRequestConfig = {
        url : CONFIG.DIVISER_INFO_URL,
        method: "get"
      };
   return await axios.request(requestConfig).then((response) => {
        return response.data;
      }).catch((error) => {
        if(error.response.status === 503){
          getDivisorInfo();
        }
        console.log(error.response.message);
      });
}
