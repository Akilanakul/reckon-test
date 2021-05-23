import * as _ from "lodash";
import { indexOf } from "lodash";

export function formatOutput(output: Map<number,string>) {
    let result: string[] = [];
    output.forEach((value,key) => {
        result.push(`${key} : ${value}`);
    });
    return result.join("<br>");
}

export function formatSearchOutput(paragraph: string, resultMap: Map<string,string[]>){
    let results = [];
    for (const [key, value] of resultMap) { 
        console.log("key"+key);
        let result =  {
            "subtext": key,
            "result": value.length > 0 ? value.toString() : ""
        }
        results.push(result);
    }
    return {
        "candidate": "Akhila AJ",
        "text": paragraph,
        "results": results
    }
}

export function jsonToMap(jsonObject: any) {
    let map = new Map<number, string>();
    map.set(_.get(jsonObject.outputDetails[0],"divisor"),(_.get(jsonObject.outputDetails[0],"output")));
    map.set(_.get(jsonObject.outputDetails[1],"divisor"),(_.get(jsonObject.outputDetails[1],"output")));
    return map;
}

// Custom indexOf method
export function findIndex(str: string, substrs: string[]){
    const paragraph = str.toLowerCase();//for case incensitive search
    let resultMap = new Map<string, string[]>();
    //Loop through all the substrings
    substrs.forEach((substr) => {
    const substring = substr.toLowerCase(); // For case incensitive search
    let resultArray : string[] = [];
    const substrLength = substring.length+1;
    for (let j = 0; j < paragraph.length+1; j++) {
        if (substring[0] == paragraph[j]) { //If first letter of sub string matches any letter of paragraph
           let paragraphWord: string = "";
            for(let k = j ; k < substrLength - 1 + j; k++){
                paragraphWord = paragraphWord + paragraph[k]; //slice the substringlength of paragraph 
            }
            if(substring === paragraphWord){ // if paragraph word equals substring 
                resultArray.push(j+1+""); // get the index 
            }
        }
    }
    resultArray.length > 0 ? resultArray : resultArray.push("<No Output>" );
    resultMap.set(substr,resultArray);
})
return resultMap;
}
