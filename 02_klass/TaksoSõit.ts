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
  
    getPrice(): number {
      let price = this.pikkus * this.hind;
      if (this.kasOnÖö) {
        price *= 1.2;
      }
      return price;
    }
  
    getRideInfo(): string {
        return "Sihtkoht: " + this.sihtkoht + ", Vahemaa: " + this.pikkus + " km" + ", Hind: " + this.getPrice().toFixed(2) + "€";
    }
}

  let ride1 = new TaksoSõit("Tallinn - Tartu", 180, 0.5, false);
  let ride2 = new TaksoSõit("Tallinn - Pärnu", 130, 0.5, true);

  console.log(ride1.getRideInfo());
  console.log(ride2.getRideInfo());
  
  