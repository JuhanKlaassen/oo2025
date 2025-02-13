class Resistor {
    r: number = 0;
    constructor(r: number) {
      this.r = r;
    }
    getCurrent(u: number): number {
      return u / this.r;
    }
  }
  
  let r1: Resistor = new Resistor(110);
  console.log(r1.getCurrent(5));
  let r2: Resistor = new Resistor(220);
  console.log(r2.getCurrent(5));
  let r3: Resistor = new Resistor(4700);
  console.log(r3.getCurrent(5));
  let takistused:Resistor[]=[r1,r2,r3];
  console.log(takistused);
let voolusumma = 0
  for(let takisti of takistused){
    voolusumma += takisti.getCurrent(5);
  }
  console.log(voolusumma);
  console.log(takistused.reduce((siiani, praegune) => siiani+praegune.getCurrent(5), 0));


  