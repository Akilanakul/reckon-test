import * as _ from "lodash";
import { getDivisorInfo, getRangeInfo } from "../services/numbersService";
import { jsonToMap,formatOutput } from "../helper/util"

export async function checkIfDivisble() {
    try{
    const range = await getRangeInfo();
    //assign lower and upper range to const for further use
    const lowerRange = _.get(range, "lower");
    const upperRange = _.get(range, "upper");

    //invoke divisorinfo url and get divisor json
    const divisorInfo = await getDivisorInfo();

    //convert json to key and desciption map
    const divisorMap = jsonToMap(divisorInfo);

    return await buildOutput(lowerRange, upperRange, divisorMap);
    } catch(error){
        console.log(_.get(error,"message"));
        console.log(_.get(error,"response.message"));
    }
}

export function buildOutput(lowerRange: number,upperRange: number , divisorMap: Map<number,string>): string{
    let result: string;
    let resultMap = new Map<number,string>();
    for (let i = lowerRange; i <= upperRange; i++) {
        divisorMap.forEach(function(value, key){
           // If the number is wholly divisible add key and values it to result map
            if((i % key === 0)){
                //if the same number is divisible by another divisor append the values
                resultMap.has(i) ? resultMap.set(i,resultMap.get(i) + value) : resultMap.set(i,value);
            }
        })
        //if the number is not divisible add " "
        resultMap.has(i) ? "" : resultMap.set(i,"");
    }
    result =  formatOutput(resultMap);
    return result;
}
