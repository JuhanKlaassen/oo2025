// Klassile saab lisada sooritatud ainete hindeid ja ainepunkte, välja küsida nende andmete põhjal parasjagu arvutatud kaalutud keskmine.
// Loo kasutajaliides: kasutaja valib hinde (A-F) ja sisestab ainepunktide arvu. Joonisel on näha ainete kaalutud keskmine, samuti ained ristkülikuna, millel laiuseks on ainepunktide arv ning kõrguseks hinde numbriline väärtus (A-5 .. F-1)
class kaalutudKeskmine2{
    ained: {punktid:number, hinded:number}[]=[];

    aineLisaja(punktid:number, hinded:number){
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


const kogum2 = new kaalutudKeskmine2();
kogum2.aineLisaja(6, 5);
kogum2.aineLisaja(4, 2);
kogum2.aineLisaja(2, 3);
kogum2.aineLisaja(2, 1);
console.log("Sooritatud ainete kaalutud keskmine on: ",kogum2.keskmiseArvutaja().toFixed(2));
