
export class AKontroll{
    constructor(protected text: string){}
        aController(): number{
            return(this.text.match(/a/gi) || []).length;
        }
        täishäälikuLugeja(): number{
            return(this.text.match(/aeiouöüõä/gi) || []).length;

        }
}