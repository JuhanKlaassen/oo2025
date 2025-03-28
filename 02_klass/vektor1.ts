class Vektor{
    constructor(protected x:number, protected y:number){}
    kuva():void{
        console.log(this.x,this.y);
    }
    pikkus():number{
        return Math.sqrt((this.x*this.x)+(this.y*this.y));
    }
    liida(teine:Vektor):Vektor{
        return new Vektor(this.x+teine.x, this.y+teine.y);
    }
    //loo käsklus vektori korrutamiseks arvuga
    korruta(arv:number):Vektor{
        return new Vektor(this.x*arv, this.y*arv)
    }  
    suurendaX():void{
        this.x+1;
    }
    //Skalaarkorrutis.
    skalaar(teine:Vektor){
        return (this.x*teine.x)+(this.y*teine.y);
    }
}

//loo massiiv neljast vektorist
//Leia nende kõigi summa

let vektorid:Vektor[]=[
    new Vektor(1, 3),
    new Vektor(7, 6),
    new Vektor(1, 2),
    new Vektor(2, 8),
];
let asukoht = vektorid[0];
for(let i=1; i<vektorid.length; i++){
    asukoht=asukoht.liida(vektorid[i]);
}
asukoht.kuva();

let v1:Vektor=new Vektor(3, 5);
let vagun:Vektor=new Vektor(9, 0);
let energia:number=v1.skalaar(vagun);
console.log(energia);
v1.suurendaX();
v1.korruta(9).kuva();
v1.kuva();
console.log(v1.pikkus());
let v3:Vektor=v1.liida(new Vektor(1, 2));
v3.kuva();

