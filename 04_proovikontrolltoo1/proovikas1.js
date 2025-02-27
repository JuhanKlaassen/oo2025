var kolmnurk = /** @class */ (function () {
    function kolmnurk(xKordinaadid, yKordinaadid) {
        this.xKordinaadid = xKordinaadid;
        this.yKordinaadid = yKordinaadid;
    }
    kolmnurk.prototype.kordinaadiLisaja = function (xKordinaat, yKordinaat) {
        this.xKordinaadid.push(xKordinaat);
        this.yKordinaadid.push(yKordinaat);
    };
    kolmnurk.prototype.küljed = function (x1, x2, y1, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };
    kolmnurk.prototype.ümberMõõt = function () {
        var v = 0;
        for (var nr = 1; nr < this.xKordinaadid.length; nr++) {
            v + this.küljed(this.xKordinaadid[nr - 1], this.yKordinaadid[nr - 1], this.xKordinaadid[nr], this.yKordinaadid[nr]);
        }
        v += this.küljed(this.xKordinaadid[this.xKordinaadid.length - 1], this.yKordinaadid[this.yKordinaadid.length - 1], this.xKordinaadid[0], this.yKordinaadid[0]);
        return v;
    };
    kolmnurk.prototype.joonista = function (g) {
        g.beginPath();
        g.moveTo(this.xKordinaadid[0], this.yKordinaadid[0]);
        for (var nr = 1; nr < this.xKordinaadid.length; nr++) {
            g.lineTo(this.xKordinaadid[nr], this.yKordinaadid[nr]);
        }
        g.lineTo(this.xKordinaadid[0], this.yKordinaadid[0]);
        g.stroke();
    };
    return kolmnurk;
}());
