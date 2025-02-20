class TaksoSõit {
    sihtkoht: string;
    pikkus: number;
    hind: number;
    kasOnÖö: boolean;
  
    constructor(sihtkoht: string, pikkus: number, hind: number, kasOnÖö: boolean) {
      this.sihtkoht = sihtkoht;
      this.pikkus = pikkus;
      this.hind = hind;
      this.kasOnÖö = kasOnÖö;
    }
  
    sõiduHind(): number {
      let tasu = this.pikkus * this.hind;
      if (this.kasOnÖö) {
        tasu *= 1.2;
      }
      return tasu;
    }
  
    sõiduInfo(): string {
        return "Sihtkoht: " + this.sihtkoht + ", Vahemaa: " + this.pikkus + " km" + ", Hind: " + this.sõiduHind().toFixed(2) + "€";
    }
}

  let sõit1 = new TaksoSõit("Tallinn -> Tartu", 210, 0.5, false);
  let sõit2 = new TaksoSõit("Tallinn -> Pärnu", 130, 0.3, true);

  console.log(sõit1.sõiduInfo());
  console.log(sõit2.sõiduInfo());
  
  