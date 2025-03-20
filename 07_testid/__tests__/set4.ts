import { isikukood } from "../class1";
test ("gender", ()=>{
    expect(new isikukood("50407300309").gender()).toBe("M");
    expect(new isikukood("40407300309").gender()).toBe("N");
});
test ("birthYear", ()=>{
    expect(new isikukood("50407300309").birthYear()).toBe(2004);
    expect(new isikukood("30407300309").birthYear()).toBe(1904);
});