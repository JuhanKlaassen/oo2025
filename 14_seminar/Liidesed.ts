/*
Liides "Sisend" määrab kõikide seda impleveerivate klasside jaoks reegli, et nad kõik peavad kasutama funktsiooni "kysi(). Need klassid ei sõltu üksteisest, neid saab vahetada ja asendada. Kõikide klasside sisendina saab kasutada teisi samu klasse.."
*/
interface Sisend {
    kysi():boolean;
}

class realiseerivKlass implements Sisend{
    maaravVaartus:boolean;
    nimi: string;

    constructor(maaravVaartus:boolean, nimi:string){
        this.maaravVaartus = maaravVaartus;
        this.nimi = nimi;
    }

    kysi():boolean{
        console.log("Küsiti lülitilt " + this.nimi + " mille väärtus on: " + this.maaravVaartus);
        return this.maaravVaartus;

    }
}

class andLoogika implements Sisend{
    sisend1:Sisend;
    sisend2:Sisend;
    nimi: string;

    constructor(sisend1:Sisend, sisend2:Sisend, nimi:string){
        this.sisend1 = sisend1;
        this.sisend2 = sisend2;
        this.nimi = nimi;
    }

    kysi():boolean{
        //return this.sisend1.kysi() && this.sisend2.kysi(); 
        const loogika1 = this.sisend1.kysi();
        const loogika2 = this.sisend2.kysi();
        const loogikaTulemus = loogika1 && loogika2;
        console.log("Küsiti lülitit " + this.nimi + " mille väärtuseks: " + loogikaTulemus);
        return loogikaTulemus

    }
    
}

class orLoogika{
    sisend1:Sisend;
    sisend2:Sisend;
    nimi: string;

    constructor(sisend1:Sisend, sisend2:Sisend, nimi:string){
        this.sisend1 = sisend1;
        this.sisend2 = sisend2;
        this.nimi = nimi;
    }

    kysi():boolean{
        //return this.sisend1.kysi() && this.sisend2.kysi();
        const loogika1 = this.sisend1.kysi();
        const loogika2 = this.sisend2.kysi();
        const loogikaTulemus = loogika1 || loogika2;
        console.log("Küsiti lülitit " + this.nimi + " mille väärtuseks: " + loogikaTulemus);
        return loogikaTulemus
    }
}

class notLoogika{
    sisend: Sisend;
    nimi:string

    constructor(sisend:Sisend, nimi:string){
    this.sisend = sisend;
    this.nimi = nimi;
    }

    kysi():boolean{
        const loogika = this.sisend.kysi();
        const loogikaTulemus = !loogika;
        console.log("Küsiti lülitit " + this.nimi + " mille väärtuseks : " + loogikaTulemus)
        return loogikaTulemus;
    }
}

const sisend1 = new realiseerivKlass(true, "sisend1");
const sisend2 = new realiseerivKlass(true, "sisend2");
const väljund12 = new andLoogika(sisend1, sisend2, "andVäljund");
console.log(väljund12.kysi());
const sisend3 = new realiseerivKlass(false, "sisend3");
const väljund123 = new andLoogika(väljund12, sisend3, "andVäljund2");
console.log(väljund123.kysi());
const sisend4 = new realiseerivKlass(true, "sisend4");
const väljund1234 = new orLoogika(väljund123, sisend4, "orVäljund");
console.log(väljund1234.kysi());
const väljund12345 = new notLoogika(väljund1234, "notVäljund");
console.log(väljund12345.kysi());
