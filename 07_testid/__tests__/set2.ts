import { posNeg } from "../f1";
test ("posNeg", ()=>{
    expect(posNeg(5)).toBe(true);
    expect(posNeg(5)).toBe(true);
    expect(posNeg(-2)).toBe(false);
    expect(posNeg(0)).toBe(false);
    expect(posNeg(3)).toBe(true);
    expect(posNeg(-6)).toBe(false);
}); 
