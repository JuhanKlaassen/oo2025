function aritmeetiline(a:number,b:number,c:number):number{
    return (a+b+c)/3
}
console.log(aritmeetiline(5,9,1));

function libisevAritmeetiline(massiiv:number[]):number[]{
    const Keskmised:number[]=[];
    for(let i=0; i < massiiv.length - 2; i++){
        const keskmisedArvutus = (massiiv[i]+massiiv[i+1]+massiiv[i+2])/3
        Keskmised.push(keskmisedArvutus);
    }
    return Keskmised
}
console.log(libisevAritmeetiline([5,2,6,8,2,1,1,6,2,3,869]));

class LibisevKlass {
    constructor(protected arvud:number[], Keskmised:number[]){}

    aRVUTAJA(lisamiseks:number):void{
        this.arvud.push(lisamiseks);
        kokku = this.arvud.length;
        if n=>3{
            Keskmine = aritmeetiline
        }
        
    }
    arvutaja(massiiv:number[]){
        
    }
}