class kolmnurk {
    constructor(protected xKordinaadid:number[], protected yKordinaadid:number[]){}

    kordinaadiLisaja(xKordinaat:number, yKordinaat:number): void{
        this.xKordinaadid.push(xKordinaat); this.yKordinaadid.push(yKordinaat);
    }
    küljed(x1:number, x2:number, y1:number, y2:number){
        return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
    }
    ümberMõõt():number{
        let v:number=0;
        for(let nr=1; nr<this.xKordinaadid.length; nr++){
            v+this.küljed(this.xKordinaadid[nr-1], this.yKordinaadid[nr-1], this.xKordinaadid[nr], this.yKordinaadid[nr]);
        }
        v+=this.küljed(this.xKordinaadid[this.xKordinaadid.length-1], this.yKordinaadid[this.yKordinaadid.length-1], this.xKordinaadid[0], this.yKordinaadid[0]);
        return v;
    }
    joonista(g:any):void{
        g.beginPath();
        g.moveTo(this.xKordinaadid[0], this.yKordinaadid[0]);
        for(let nr=1; nr<this.xKordinaadid.length; nr++){
            g.lineTo(this.xKordinaadid[nr], this.yKordinaadid[nr]);
        }
        g.lineTo(this.xKordinaadid[0], this.yKordinaadid[0]);
        g.stroke();
    }
}
