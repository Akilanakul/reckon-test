import {buildOutput} from "../../handler/numbersHandler";
import { assert} from "chai";

describe('buildOutput ', () => {
    it('builds output from json', () => {
        let map = new Map<number, string>()  
        map.set(3,"Boss");
        map.set(5,"Hogg");
        const result = buildOutput(0,100,map);
        assert.exists("15 : BossHogg");
    });
});