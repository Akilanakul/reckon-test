import axios,{AxiosRequestConfig} from "axios";

const CONFIG = require("../config/config");

export async function getTextToSearch (){
    const requestConfig: AxiosRequestConfig = {
        url : CONFIG.TEXT_TO_SEARCH_URL,
        method: "get"
      };
      return axios.request(requestConfig).then((response) => {
        return response.data;
      }).catch((error) => {
        if(error.response.status === 503){
          getTextToSearch();
        }
        console.log(error.message);
      });
    }

export async function getSubText() {
    const requestConfig: AxiosRequestConfig = {
        url : CONFIG.SUB_TEXT_URL,
        method: "get"
      };
   return await axios.request(requestConfig).then((response) => {
        return response.data;
      }).catch((error) => {
        if(error.response.status === 503){
          getSubText();
        }
        console.log(error.message);
      });
}

export async function postResults(response:any){
  const requestConfig: AxiosRequestConfig = {
    url : CONFIG.SUBMIT_RESULTS_URL,
    method: "post",
    data: response
  };

return await axios.request(requestConfig).then((response) => {
    return response.data;
  }).catch((error) => {
    console.log(error.message);
  });
}
