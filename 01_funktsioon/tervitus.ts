let eesnimi:string="Juku";
//let eesnimi:string=56
let vanus:number=19;
console.log("abc");
console.log("Tere, "+eesnimi);
if(vanus<7){
    console.log("Tasuta");
} else {
    if(vanus<18){
        console.log("Osta Lastepilet");
    }
    else {
        console.log("Osta täispilet");
    }
    //Teata kas tuleb osta lapsepilet või täispilet
}
let symbolid:string[]=[];
for(let nr=0; nr<vanus; nr++){
    symbolid.push("*");
}   
console.log(symbolid.join(""));