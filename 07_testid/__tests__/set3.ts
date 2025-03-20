import { keskmineKiirus } from "../f2";
test ("keskmineKiirus", ()=>{
    expect(keskmineKiirus(30, 60)).toBe(40);
    expect(keskmineKiirus(25, 25)).toBe(25);
    expect(keskmineKiirus(50, 100)).toBe(66.67);

});