import { AKontroll } from "../class2";
test ("aController", ()=>{
    expect(new AKontroll("Juhan Klaassen").aController()).toBe(3);
    expect(new AKontroll("Kartulid ja banaanid!").aController()).toBe(5);
});
test ("täishäälikuLugeja", ()=>{
    expect(new AKontroll("Juhan Klaassen").täishäälikuLugeja()).toBe(5);
});