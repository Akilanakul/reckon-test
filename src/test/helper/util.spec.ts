import {jsonToMap,findIndex} from "../../helper/util";
import { assert} from "chai";
import * as dataJson from "../resource/data.json";

describe('jsonToMap ', () => {
    it('converts json to map ', () => {
        const map = jsonToMap(dataJson);
        assert.equal(map.get(3),"Boss");
        assert.equal(map.get(5),"Hogg");
    });
});

describe('findIndex ', () => {
    let subTexts : string[] = ["akila"];
    let result : string[] = ["<No Output>"];

    it('find index of substring ', () => {
        const index = findIndex("*Peter told me (actually he slurrred) that peter the pickle piper piped a pitted pickle before he petered out. Phew!",subTexts);
      assert.deepEqual(index.get("akila"),result);
    });
});