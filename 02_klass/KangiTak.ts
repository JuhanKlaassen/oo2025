import { error } from "console";

class Potentsiomeeter{
    nurk:number= 0;
    constructor(protected nurkMin:number, protected nurkMax:number, protected rMin:number, protected rMax:number){}
    muudaNurk(delta:number){
        let uusnurk=this.nurk+delta;
        if(uusnurk<this.nurkMin){
            throw new Error("Liiga väike nurk!");}
        if(uusnurk>this.nurkMax){
            throw new Error("Liiga suur nurk!");}
            this.nurk=uusnurk;
    }
    getR():number{
        return this.rMin + (this.nurk/this.nurkMax)*(this.rMax-this.rMin);
         //ARVUTAGE POTENTSIOMEETRI PRAEGUSE HETKE TAKISTUS.
    }
}
let p1:Potentsiomeeter=new Potentsiomeeter(-120, 120, 100, 500);
p1.muudaNurk(80);
console.log(p1);
p1.muudaNurk(30);
console.log(p1);
console.log(p1.getR());

