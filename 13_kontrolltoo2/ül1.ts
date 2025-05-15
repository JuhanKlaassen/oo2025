//Koosta liides Sisend meetodiga boolean kysi(); Koosta realiseeriv klass, mi sees määratav väärtus true või false. Koosta klass AND-loogika tarbeks, millel sees kaks sisendit. Loo ka selle meetod kysi(); Kui mõlemad sisendid on true-väärtusega, siis tagasta true, muidu false.

interface Sisend {
    kysi():boolean;
}

class realiseerivKlass implements Sisend{
    maaravVaartus:boolean;

    constructor(maaravVaartus:boolean){
        this.maaravVaartus = maaravVaartus;
    }

    kysi():boolean{
        return this.maaravVaartus;
    }
}

class andLoogika implements Sisend{
    sisend1:Sisend;
    sisend2:Sisend;

    constructor(sisend1:Sisend, sisend2:Sisend){
        this.sisend1 = sisend1;
        this.sisend2 = sisend2;
    }

    kysi():boolean{
        return this.sisend1.kysi() && this.sisend2.kysi();
    }
    
}

const sisend1 = new realiseerivKlass(true);
const sisend2 = new realiseerivKlass(true);
const väljund12 = new andLoogika(sisend1, sisend2);
console.log(väljund12.kysi());

