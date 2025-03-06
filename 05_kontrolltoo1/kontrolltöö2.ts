// Klassile saab lisada sooritatud ainete hindeid ja ainepunkte, välja küsida nende andmete põhjal parasjagu arvutatud kaalutud keskmine.
class kaalutudKeskmine{
    ained: {punktid:number, hinded:number}[]=[];
    aineLisaja(punktid:number, hinded:number):void{
        if(punktid<=0 || hinded<1 || hinded>5){
            throw new Error("Punkte peab olema rohkem kui 0 ja hinded peavad jääma vahemikku 1-5");
        }
        this.ained.push({punktid, hinded});
    }
    keskmiseArvutaja():number{
        let kõikPunktid = 0;
        let kaalutud = 0;
        for(const aine of this.ained){
            kõikPunktid += aine.punktid
            kaalutud += aine.punktid * aine.hinded;
        }
        return(kaalutud/kõikPunktid);
    }
}
const kogum = new kaalutudKeskmine();
kogum.aineLisaja(6, 5);
kogum.aineLisaja(4, 2);
kogum.aineLisaja(2, 3);
kogum.aineLisaja(2, 1);
console.log("Sooritatud ainete kaalutud keskmine on: ",kogum.keskmiseArvutaja().toFixed(2));
