import * as _ from "lodash";
import { findIndex,formatSearchOutput } from "../helper/util"
import { getSubText, getTextToSearch,  postResults} from "../services/searchService";

export async function searchForWord() {
    try{
    const searchResult = await getTextToSearch();
    //extract the paragraph from the result
    const paragraph = _.get(searchResult, "text");
    const subText = await getSubText();

    let subTexts: string[] = [];
    subTexts = _.get(subText, "subTexts");
    // console.log("subTexts"+subTexts[0]);

    const index = findIndex(paragraph,subTexts);

    return formatSearchOutput(paragraph, index);
    }catch(error){
        console.log(_.get(error,"message"));
        console.log(_.get(error,"response.message"));
    }
}

export function submitResults(response:any){
    return postResults(response).catch((error) => {
        console.log(error.response.message);
    });
}