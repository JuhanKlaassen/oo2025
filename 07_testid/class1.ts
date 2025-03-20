export class isikukood{
    constructor(protected code:string){}
    gender(){
        return parseInt(this.code[0]) % 2===0? "N": "M";
    }
    birthYear(): number{
        const firstDigit = parseInt(this.code[0]);
        const secondDigit = parseInt(this.code.substring(1,3));
        if(firstDigit===3||firstDigit===4) return 1900 + secondDigit;
        if(firstDigit===5||firstDigit===6) return 2000 + secondDigit;
        return 1800+secondDigit;
    }
}