//Koosta liides Sisend meetodiga boolean kysi(); Koosta realiseeriv klass, mi sees määratav väärtus true või false. Koosta klass AND-loogika tarbeks, millel sees kaks sisendit. Loo ka selle meetod kysi(); Kui mõlemad sisendid on true-väärtusega, siis tagasta true, muidu false.
//Võimalda sarnaseid AND-öüöitusi puukujulisse skeemi kokku ühendada. Anna igale lülitusele nimi. Tipuelemendilt väärtuse küsimisel trükitakse järgemööda välja, milliselt lülituselt väärtus küsiti ning milline vastus saadi.

interface Sisend {
    kysi():boolean;
}

class realiseerivKlass implements Sisend{
    maaravVaartus:boolean;
    nimi:string;

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
    nimi:string;

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

const sisend1 = new realiseerivKlass(true, "sisend1");
const sisend2 = new realiseerivKlass(true, "sisend2");
const väljund12 = new andLoogika(sisend1, sisend2, "väljund12");
console.log(väljund12.kysi());
const sisend3 = new realiseerivKlass(false, "sisend3");
const väljund123 = new andLoogika(väljund12, sisend3, "väljund123");
console.log(väljund123.kysi());
